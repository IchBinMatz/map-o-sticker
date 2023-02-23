<script lang="ts">
    import { browser } from "$app/environment";
    import { onDestroy, onMount } from "svelte";

    let mapElement: HTMLDivElement;
    let map: L.Map;

onMount(async () => {
    if (browser) {
        const leaflet = await import('leaflet')
        map = leaflet.map(mapElement).setView([53.462147658636255, 9.998711356931745], 6);

        leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
        leaflet.marker([54.78065463305339, 8.82010421472079], {title: "tj", interactive: true}).addTo(map)
        leaflet.marker([37.15667659707556, -7.567374318490646], {title: "björn", interactive: true}).addTo(map)
        leaflet.marker([48.1319107636191, 11.597328269263155], {title: "wg", interactive: true}).addTo(map)
        leaflet.marker([54.86601997512145, 8.664989118933663], {title: "eltern", interactive: true}).addTo(map)
        leaflet.marker([53.5839063248693, 10.030755051845581], {title: "bruder", interactive: true}).addTo(map)
        leaflet.marker([53.528094164617904, 8.105920701789987], {title: "alte Wohnung", interactive: true}).addTo(map)
        leaflet.marker([54.86966009631935, 8.895859553098285], {title: "lde", interactive: true}).addTo(map)
        leaflet.marker([52.256295421053245, 8.1017744410037], {title: "ex", interactive: true}).addTo(map)
        leaflet.marker([54.778399572631464, 8.827109637840012], {title: "ng", interactive: true}).addTo(map)
    }
})

onDestroy(async () => {
    if (map) {
        map.remove()
    }
})

function resizeMap() {
    if (map) { map.invalidateSize()}
}
</script>
<svelte:window on:resize={resizeMap} />
<main>
    <div bind:this={mapElement}></div>
</main>

<style>
    @import 'leaflet/dist/leaflet.css';
    main div {
        width: 100%;
        height: 100vh;
    }
</style>