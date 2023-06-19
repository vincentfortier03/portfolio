<script lang="ts">
	import type { ExperienceProps } from "$lib/Utils";

    export let props:ExperienceProps;
    export let useAsBG:boolean = false

    let {imageSRC, imageAlt, imageH, title, description, compagnie} = {...props}

    
    
</script>

<div class="card w-[25vw] variant-glass-surface">
    {#if useAsBG}
        <header class="card-header h-1/3 rounded-tl-container-token rounded-tr-container-token" style="background-image:url({imageSRC}); background-size:cover;">
        </header>    
        {:else}
            <header class="card-header h-1/3 bg-white rounded-tl-container-token rounded-tr-container-token" >
                <div class="grid grid-cols-1 place-items-center w-full h-full">
                    <img class="{imageH}" src="{imageSRC}" alt="{imageAlt}" />
                </div>
            </header>
        {/if}
        
    
    <section class="p-4 flex flex-col gap-8">
        <div class="w-full">
            <h2 class="h2 font-semibold">
                {title}
            </h2>
            <h4 class="h4 italic">
                {compagnie}
            </h4>
        </div>
        
        <p>
            {description}
        </p>
        
    </section>
</div>