<script lang="ts">
	import { browser } from '$app/environment';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import { Canvas } from '@threlte/core'
	import { Object3DInstance, Mesh } from '@threlte/core'
	import { useGltf } from '@threlte/extras'
	import { MeshBasicMaterial } from 'three'

	const { gltf } = useGltf('$lib/models/svelte.glb')
	let isInView: boolean;
</script>

<div class="flex flex-col w-full gap-10 p-24">
	
	<h1 class="h1">Qui suis-je?</h1>
	
	<hr class="!border-t-4" />
	<h1 class="h1">Expérience</h1>


	<hr class="!border-t-4" />
	<h1 class="h1">Éducation</h1>
	
	<hr class="!border-t-4" />

	<div class="flex flex-col-gap-6 w-full">
		<Canvas>

		
		<h1 class="h1">Connaissances</h1>
		{#if $gltf}
			<Object3DInstance object={$gltf.nodes['node-name']} />
		{/if}

		<!-- or only the geometry -->
		{#if $gltf}
			<Mesh geometry={$gltf.nodes['node-name'].geometry} material={new MeshBasicMaterial()} />
		{/if}
	</Canvas>
	</div>
</div>

