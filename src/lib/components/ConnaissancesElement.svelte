<script lang="ts">
    import type {MousePosition} from "$lib/Utils"
	import { Canvas } from "@threlte/core";
	import ElementCanvas from "./ElementCanvas.svelte";
    
    export let name:string;
    export let description:string;
    export let modelName:string;
    export let reverse:boolean
    export let logoScale:number;
    export let cameraHeight:number

    let logoCanvas:string = 'order-first'
    let logoPaper:string = 'order-last'
    
    if(reverse){
        logoCanvas = 'order-last'
        logoPaper = 'order-first'
    }
    
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

<div class="container-mouse justify-center" on:mousemove={handleMouseMove}>
    <div class=" border-white w-1/4 {logoCanvas}">
        <Canvas>
            <ElementCanvas mousePosition={mouseXY} modelName={modelName} logoScale={logoScale} cameraHeight={cameraHeight}/>
        </Canvas>
    </div>
   
<div class="flex flex-col justify-center border-white p-10 w-2/4">
    <div class="card p-8 variant-glass-surface h-1/2 {logoPaper}">
        <div class="grid grid-cols-1 w-full h-full">
            <h1 class="h1 font-black">{name}</h1>
            <p class="p1">{description}</p>
            
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
    }

</style>