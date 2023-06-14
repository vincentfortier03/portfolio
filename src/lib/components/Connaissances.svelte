<script lang="ts">

	import { Canvas } from "@threlte/core";
	import ConnaissancesCanvas from "./ConnaissancesCanvas.svelte";

</script>

<div class="grid grid-cols-2 w-full h-[50vh]  border-white">
    <div class=" border-white">
        <Canvas>
            <ConnaissancesCanvas />
        </Canvas>
    </div>
   
<div class=" border-white p-10">
    <div class="card p-8 variant-ringed-surface h-full">
        <h1 class="h1">Sveltekit</h1>
    </div>
</div>
    
</div>

