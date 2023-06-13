<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppBar, AppShell } from '@skeletonlabs/skeleton';
	import AppBarContent from '$lib/components/AppBarContent.svelte';
</script>


<AppShell>
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">(icon)</svelte:fragment>
			<div class="w-full flex flex-row justify-center gap-20">
				<button type="button" class="btn !bg-transparent">
					<span>Qui suis-je?</span>
				</button>
				<button type="button" class="btn !bg-transparent">
					<span>Expérience</span>
				</button>
				<button type="button" class="btn !bg-transparent">
					<span>Éducation</span>
				</button>
				<button type="button" class="btn !bg-transparent">
					<span>Connaissances</span>
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
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<!-- (footer) -->
</AppShell>

