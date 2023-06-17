<script lang="ts">
	import ConnaissancesElement from '$lib/components/ConnaissancesElement.svelte';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	
</script>

<div class="flex flex-col w-full gap-10 p-24">
	
	<h1 class="h1">Qui suis-je?</h1>
	
	<hr class="!border-t-4" />
	<h1 class="h1">Expérience</h1>


	<hr class="!border-t-4" />
	<h1 class="h1">Éducation</h1>
	
	<hr class="!border-t-4" />

	<div class="flex flex-col gap-6">
		<div class="grid grid-auto-rows gap-10">

			<div class="h-[10vh]">
				<h1 class="h1">Connaissances</h1>
			</div>
			<div class="placeholder-grid-small">
				
			</div>
	
			<div class="connaissance-container">
				<ConnaissancesElement name={'Svelte'} description={'placeholder'} modelName="svelte-anim-4" reverse={false} logoScale={10} cameraHeight={30}/>
			</div>

			<div class="placeholder-grid-big">
				
			</div>

			<div class="connaissance-container">
				<ConnaissancesElement name={'Blazor'} description={'placeholder'} modelName="blazor-anim-1" reverse={true} logoScale={12} cameraHeight={30}/>
			</div>

			<div class="placeholder-grid-big">
				
			</div>

			<div class="connaissance-container">
				<ConnaissancesElement name={'HTML'} description={'placeholder'} modelName="html-anim-4" reverse={false} logoScale={35} cameraHeight={30}/>
			</div>

			<div class="placeholder-grid-big">
				
			</div>

			<div class="connaissance-container">
				<ConnaissancesElement name={'CSS'} description={'placeholder'} modelName="css-anim-6" reverse={true} logoScale={150} cameraHeight={125}/>
			</div>

			<div class="placeholder-grid-big">
				
			</div>

			<div class="connaissance-container">
				<ConnaissancesElement name={'TypeScript'} description={'placeholder'} modelName="ts-anim-3" reverse={true} logoScale={50} cameraHeight={50}/>
			</div>
		</div>
		
	</div>
</div>

<style>
	.connaissance-container{
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.placeholder-grid-big{
		height: 20vh;
		border: 2px;
		
	}
	.placeholder-grid-small{
		height: 10vh;
		border: 2px;
		
	}
</style>

