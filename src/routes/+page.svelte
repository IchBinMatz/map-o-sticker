<script lang="ts">
  import { browser } from "$app/environment";
  import { onDestroy, onMount, SvelteComponent } from "svelte";
  import toilet from "$lib/assets/toilet.png";
  import MarkerPopup from "./MarkerPopup.svelte";
  import { places } from "./places";

  let mapElement: HTMLDivElement;
  let map: L.Map;
  

  onMount(async () => {
    if (browser) {
      const leaflet = await import("leaflet");
      function bindPopup(
        marker: L.Marker,
        createFn: (container: HTMLElement) => SvelteComponent
      ) {
        let popupComponent: SvelteComponent | null;
        marker.bindPopup(() => {
          let container = leaflet.DomUtil.create("div");
          popupComponent = createFn(container);
          return container;
        });

        marker.on("popupclose", () => {
          if (popupComponent) {
            let old = popupComponent;
            popupComponent = null;
            setTimeout(() => {
              old.$destroy();
            }, 500);
          }
        });
      }
      let myIcon = leaflet.icon({ iconUrl: toilet, iconSize: [30, 30] });
      map = leaflet
        .map(mapElement)
        .setView([53.462147658636255, 9.998711356931745], 6);

      leaflet
        .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        })
        .addTo(map);
      places.map((p) => {
        let marker = leaflet.marker(p.loc, { title: p.name, icon: myIcon });
        let img = p.img;
        if (img != undefined) {
          bindPopup(marker, (t) => {
            let c = new MarkerPopup({
              target: t,
              props: {
                src: img as string,
              },
            });
            return c;
          });
        }
        marker.addTo(map);
      });
    }
  });

  onDestroy(async () => {
    if (map) {
      map.remove();
    }
  });
</script>

<svelte:window
  on:resize={() => {
    if (map) {
      map.invalidateSize();
    }
  }}
/>
<main>
  <div bind:this={mapElement} />
</main>

<style>
  @import "leaflet/dist/leaflet.css";
  main div {
    width: 100%;
    height: 100vh;
  }
</style>
