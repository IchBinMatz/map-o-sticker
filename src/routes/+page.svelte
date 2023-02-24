<script lang="ts">
  import { browser } from "$app/environment";
  import { onDestroy, onMount, SvelteComponent } from "svelte";
  import toilet from "$lib/assets/toilet.png";
  import layl from "$lib/assets/fotos/layl.jpg";
  import bhotel from "$lib/assets/fotos/portugal.jpg";
  import timo from "$lib/assets/fotos/t.jpg";
  import MarkerPopup from "./MarkerPopup.svelte";

  let mapElement: HTMLDivElement;
  let map: L.Map;
  let places: { name: string; loc: [number, number]; img?: string }[] = [
    { name: "tj", loc: [54.78065463305339, 8.82010421472079], img: timo },
    {
      name: "bhotel",
      loc: [37.15667659707556, -7.567374318490646],
      img: bhotel,
    },
    { name: "wg", loc: [48.1319107636191, 11.597328269263155] },
    { name: "party", loc: [48.13122540161655, 11.595708636957829] },
    { name: "eltern", loc: [54.86601997512145, 8.664989118933663] },
    { name: "bruder", loc: [53.5839063248693, 10.030755051845581] },
    { name: "alte Wohnung", loc: [53.528094164617904, 8.105920701789987] },
    { name: "ex", loc: [52.256295421053245, 8.1017744410037] },
    { name: "ng", loc: [54.778399572631464, 8.827109637840012] },
    { name: "gh", loc: [53.526107661188796, 8.128171334775397] },
    { name: "lay", loc: [54.86966009631935, 8.895859553098285], img: layl },
    { name: "mind", loc: [52.02722078477807, 8.535908692324725] },
    { name: "autobahn", loc: [53.300584250313534, 9.534203569285786] },
  ];

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
