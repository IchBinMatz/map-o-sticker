<script lang="ts">
    import { browser } from "$app/environment";
    import { onDestroy, onMount } from "svelte";
    import toilet from "$lib/assets/toilet.png";

    let mapElement: HTMLDivElement;
    let map: L.Map;
    let places :{name: string, loc: [number, number]}[] = [
        {name: "tj", loc: [54.78065463305339, 8.82010421472079]},
        {name: "bhotel", loc: [37.15667659707556, -7.567374318490646]},
        {name: "wg", loc: [48.1319107636191, 11.597328269263155]},
        {name: "eltern", loc: [54.86601997512145, 8.664989118933663]},
        {name: "bruder", loc: [53.5839063248693, 10.030755051845581]},
        {name: "alte Wohnung", loc: [53.528094164617904, 8.105920701789987]},
        {name: "ex", loc: [52.256295421053245, 8.1017744410037]},
        {name: "ng", loc: [54.778399572631464, 8.827109637840012]},
        {name: "gh", loc: [53.526107661188796, 8.128171334775397]},
        {name: "lay", loc: [54.86966009631935, 8.895859553098285]},
        {name: "autobahn", loc: [53.300584250313534, 9.534203569285786]}
    ]

    onMount(async () => {
        if (browser) {
            const leaflet = await import("leaflet");
            let myIcon = leaflet.icon({iconUrl: toilet, iconSize: [30, 30]})
            map = leaflet
                .map(mapElement)
                .setView([53.462147658636255, 9.998711356931745], 6);

            leaflet
                .tileLayer(
                    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                    {
                        attribution:
                            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                    }
                )
                .addTo(map);
            places.map(p => leaflet.marker(p.loc, {title: p.name, icon: myIcon}).addTo(map))
        }
    });

    onDestroy(async () => {
        if (map) {
            map.remove();
        }
    });

    function resizeMap() {
        if (map) {
            map.invalidateSize();
        }
    }
</script>

<svelte:window on:resize={resizeMap} />
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
