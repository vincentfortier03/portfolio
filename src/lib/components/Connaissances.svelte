<script lang="ts">
    import type {MousePosition} from "$lib/Utils"
	import { Canvas } from "@threlte/core";
	import ConnaissancesCanvas from "./ConnaissancesCanvas.svelte";
    
    let mouseXY:MousePosition = {
        x:0,
        y:0,
        z:0
    }

    function handleMouseMove(e:MouseEvent){
        mouseXY.x = e.clientX
        mouseXY.y = e.clientY
    }


</script>

<div class="container-mouse" on:mousemove={handleMouseMove}>
    <div class="border-2 border-white w-1/4">
        <Canvas>
            <ConnaissancesCanvas mousePosition={mouseXY}/>
        </Canvas>
    </div>
   
<div class="flex flex-col justify-center border-white p-10 w-2/4">
    <div class="card p-8 variant-ringed-surface h-1/2">
        <div class="grid grid-cols-1 w-full h-full border-2">
            <h1 class="h1">Sveltekit</h1>
            <p class="p1">x: {mouseXY.x}</p>
            <p class="p1">y: {mouseXY.y}</p>
        </div>
    </div>
</div>
    
</div>

<style>
    .container-mouse{
        display:flex;
        flex-direction: row;
        width: 100%;
        height: 50vh;
        justify-items: center;
    }

</style>