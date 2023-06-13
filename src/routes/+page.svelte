<script lang="ts">
	
	import ConnaissancesCanvas from '$lib/components/ConnaissancesCanvas.svelte';
import '@skeletonlabs/skeleton/styles/skeleton.css';
	import { Canvas } from '@threlte/core';
	
</script>

<div class="flex flex-col w-full gap-10 p-24">
	
	<h1 class="h1">Qui suis-je?</h1>
	
	<hr class="!border-t-4" />
	<h1 class="h1">Expérience</h1>


	<hr class="!border-t-4" />
	<h1 class="h1">Éducation</h1>
	
	<hr class="!border-t-4" />

	<div class="flex flex-col-gap-6 w-full">
		<h1 class="h1">Connaissances</h1>
		<Canvas>
			<ConnaissancesCanvas />
		</Canvas>
	</div>
</div>

