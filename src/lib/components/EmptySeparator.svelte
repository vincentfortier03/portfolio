<script lang="ts">
	import { onMount } from "svelte";

    export let size = "30vh"
    export let bordered = false

    let border = ""

    onMount(()=>{
        console.log(size)
        if(bordered === true){
            border = "border-2 border-red-600"
        }
    })
</script>

{#if size}
    <div class="h-[{size}] {border}"></div>
{/if}
