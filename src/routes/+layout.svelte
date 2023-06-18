<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppBar, AppShell, Tab, TabGroup } from '@skeletonlabs/skeleton';
	import { intersectionStore } from '$lib/stores/IntersectionStore';
	import type { IntersectionValues, MousePosition } from "$lib/Utils";

	let intersection:IntersectionValues 

	intersectionStore.subscribe((value)=>{
		intersection = value
	})

	let tabSet:number;

	let timestamp = 0;
	let mY = 0;
	
	
	function handleScroll(){
		console.log("scrolled")
	}


</script>

<svelte:document on:scroll={()=>{handleScroll()}} />

<AppShell >
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">(icon)</svelte:fragment>
			<div class="w-full flex flex-row justify-center gap-20">
				<button class:intersecting={$intersectionStore.whois} type="button" class="btn  btn-lg hover:intersecting">
					<a href="#Whois">Qui suis-je?</a>
				</button>
				<button class:intersecting={$intersectionStore.exp} type="button" class="btn btn-lg bg-initial hover:variant-filled-primary">
					<a href="#Experience">Expérience</a>
				</button>
				<button class:intersecting={$intersectionStore.education} type="button" class="btn btn-lg bg-initial hover:variant-filled-primary">
					<a href="#Education">Éducation</a>
				</button>
				<button class:intersecting={$intersectionStore.connaissances} type="button" class="btn btn-lg bg-initial hover:variant-filled-primary border-surface-900-50-token">
					<a href="#Connaissances">Connaissances</a>
				</button>
			</div>
			<svelte:fragment slot="trail">(actions)</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">
		
	</svelte:fragment>
	<!-- (footer) -->
</AppShell>

<style>
	.intersecting{
		--tw-bg-opacity: 1;
    	background-color: rgb(var(--color-primary-500) / var(--tw-bg-opacity));
    	color: rgb(var(--on-primary))
	}
</style>