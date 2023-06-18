<script lang="ts">
	import { ConnaissancesStore } from '$lib/stores/ConnaissancesIntersection';
	import { intersectionStore } from '$lib/stores/IntersectionStore';
	import ConnaissancesElement from '$lib/components/ConnaissancesElement.svelte';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import IntersectionObserver from "svelte-intersection-observer";
	import type { IntersectionValues } from '$lib/Utils';
	import { fade } from 'svelte/transition';
	
	
	let intersectionValues:IntersectionValues

	intersectionStore.subscribe((values)=>{
		intersectionValues = values
	})

	let element:HTMLElement;
	let whoIsElement:HTMLElement;
	let expElement:HTMLElement;
	let educationElement:HTMLElement;
	let connaissancesElement:HTMLElement;

	let svelteElem:HTMLElement
	let blazorElem:HTMLElement
	let htmlElem:HTMLElement
	let cssElem:HTMLElement
	let tsElem:HTMLElement
	
</script>

<div class="flex flex-col w-full gap-10 p-24">

	<div class="placeholder-grid-big"></div>

	<svg viewBox="0 0 600 100" xmlns="http://www.w3.org/2000/svg"> 
		<text x="35" y="65" class="text-white fill-white font-black text-[60px]">Vincent Fortier</text>
	</svg>

	<div class="placeholder-grid-big"></div>

	<IntersectionObserver element={whoIsElement} bind:intersecting={$intersectionStore.whois} threshold={0.2}>
		<div bind:this={whoIsElement} class="section-container" id="Whois">
			{#if $intersectionStore.whois}
				<div transition:fade="{{delay: 0, duration: 500}}" class="section-container">
					<h1 class="categories-font" >Qui suis-je?</h1>
					<div class="placeholder-grid-big"></div>
					<div class="placeholder-grid-big"></div>
					<div class="placeholder-grid-big"></div>
					<div class="placeholder-grid-big"></div>
					<div class="placeholder-grid-big"></div>
					<div class="placeholder-grid-big"></div>
				</div>
			{/if}
		</div>
		
	</IntersectionObserver>
	
	

	<IntersectionObserver element={expElement} bind:intersecting={$intersectionStore.exp} threshold={0.2}>
		<div bind:this={expElement} class="section-container" id="Experience">
			{#if $intersectionStore.exp}
				<div transition:fade="{{delay: 0, duration: 500}}" class="section-container">
					<h1 class="categories-font" >Expérience</h1>
					<div class="placeholder-grid-big"></div>
					<div class="placeholder-grid-big"></div>
					<div class="placeholder-grid-big"></div>
					<div class="placeholder-grid-big"></div>
					<div class="placeholder-grid-big"></div>
					<div class="placeholder-grid-big"></div>
				</div>
			{/if}
		</div>
	</IntersectionObserver>

	

	<IntersectionObserver element={educationElement} bind:intersecting={$intersectionStore.education} threshold={0.2}>
		<div bind:this={educationElement} class="section-container" id="Education">
			{#if $intersectionStore.education}
				<div transition:fade="{{delay: 0, duration: 500}}" class="section-container">
					<h1 class="categories-font" >Éducation</h1>
					<div class="placeholder-grid-small"></div>
					<div class="card p-8 variant-glass-surface">
						<div class="placeholder-grid-big"></div>
						<div class="placeholder-grid-big"></div>
						<div class="placeholder-grid-big"></div>
						<div class="placeholder-grid-big"></div>
					</div>
				</div>
			{/if}
		</div>
	</IntersectionObserver>
	
	
	

	<IntersectionObserver element={connaissancesElement} bind:intersecting={$intersectionStore.connaissances} threshold={0}>
		<div bind:this={connaissancesElement} class="flex flex-col gap-6" id="Connaissances">
			{#if $intersectionStore.connaissances}
				<div transition:fade="{{delay: 0, duration: 500}}" class="grid grid-auto-rows gap-10">

					<div class="h-[10vh]">
						<h1  class="categories-font">Connaissances</h1>
					</div>

					<div class="placeholder-grid-small"></div>
			
					<IntersectionObserver element={svelteElem} bind:intersecting={$ConnaissancesStore.svelte} threshold={0.5}>
						<div bind:this={svelteElem} class="connaissance-container" >
							{#if $ConnaissancesStore.svelte}
							<div transition:fade="{{delay: 0, duration: 500}}" class="w-full">
								<ConnaissancesElement name={'Svelte'} description={'placeholder'} modelName="svelte-anim-4" reverse={false} logoScale={10} cameraHeight={30}/>
							</div>
							{/if}
							
						</div>
					</IntersectionObserver>

					

					<div class="placeholder-grid-big"></div>

					<IntersectionObserver element={blazorElem} bind:intersecting={$ConnaissancesStore.blazor} threshold={0.5}>
						<div bind:this={blazorElem} class="connaissance-container" >
							{#if $ConnaissancesStore.blazor}
							<div transition:fade="{{delay: 0, duration: 250}}" class="w-full">
								<ConnaissancesElement name={'Blazor'} description={'placeholder'} modelName="blazor-anim-1" reverse={true} logoScale={12} cameraHeight={30}/>
							</div>
							{/if}
						</div>
					</IntersectionObserver>

					<div class="placeholder-grid-big"></div>

					<IntersectionObserver element={htmlElem} bind:intersecting={$ConnaissancesStore.html} threshold={0.5}>
						<div bind:this={htmlElem} class="connaissance-container" >
							{#if $ConnaissancesStore.html}
							<div transition:fade="{{delay: 0, duration: 250}}" class="w-full">
								<ConnaissancesElement name={'HTML'} description={'placeholder'} modelName="html-anim-4" reverse={false} logoScale={35} cameraHeight={30}/>
							</div>
							{/if}
						</div>
					</IntersectionObserver>
					

					<div class="placeholder-grid-big"></div>

					<IntersectionObserver element={cssElem} bind:intersecting={$ConnaissancesStore.css} threshold={0.5}>
						<div bind:this={cssElem} class="connaissance-container" >
							{#if $ConnaissancesStore.css}
							<div transition:fade="{{delay: 0, duration: 250}}" class="w-full">
								<ConnaissancesElement name={'CSS'} description={'placeholder'} modelName="css-anim-6" reverse={true} logoScale={150} cameraHeight={125}/>
							</div>
							{/if}
						</div>
					</IntersectionObserver>

					<div class="placeholder-grid-big"></div>

					<IntersectionObserver element={tsElem} bind:intersecting={$ConnaissancesStore.ts} threshold={0.5}>
						<div bind:this={tsElem} class="connaissance-container" >
							{#if $ConnaissancesStore.ts}
							<div transition:fade="{{delay: 0, duration: 250}}" class="w-full">
								<ConnaissancesElement name={'TypeScript'} description={'placeholder'} modelName="ts-anim-3" reverse={true} logoScale={50} cameraHeight={50}/>
							</div>
							{/if}
						</div>
					</IntersectionObserver>

					<div class="placeholder-grid-big"></div>
					
				</div>
			{/if}
		</div>
		
	</IntersectionObserver>
</div>

<style>
	.connaissance-container{
		display: flex;
		flex-direction: row;
		justify-content: center;
		height: 50vh;
	}

	.placeholder-grid-big{
		height: 20vh;
		border: 2px;
		
	}
	.placeholder-grid-small{
		height: 10vh;
		border: 2px;
		
	}

	.section-container{
		width: 100%;
		height: 100vh;
	}

	.categories-font{
		font-weight: 700;
		font-size: 75px;
	}
</style>

