<script lang="ts">
	import { ConnaissancesStore } from '$lib/stores/ConnaissancesIntersection';
	import { intersectionStore } from '$lib/stores/IntersectionStore';
	import ConnaissancesElement from '$lib/components/ConnaissancesElement.svelte';
	import EmptySeparator from '$lib/components/EmptySeparator.svelte';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import IntersectionObserver from "svelte-intersection-observer";
	import { fade } from 'svelte/transition';
	import type { connaissancesElementProps } from '$lib/Utils';
	import { browser } from '$app/environment';
	import ExperienceComponent from '$lib/components/ExperienceComponent.svelte';
	
	let whoIsElement:HTMLElement;
	let expElement:HTMLElement;
	let educationElement:HTMLElement;
	let connaissancesElement:HTMLElement;

	let svelteElem:HTMLElement
	let blazorElem:HTMLElement
	let htmlElem:HTMLElement
	let cssElem:HTMLElement
	let tsElem:HTMLElement

	let svelteVis:string = "invisible"
	let blazorVis:string = "invisible"
	let htmlVis:string = "invisible"
	let cssVis:string = "invisible"
	let tsVis:string = "invisible"

	let svelteOptions:connaissancesElementProps = {
		name:'Svelte',
		description: 'placeholder',
		modelName: "svelte-anim-4",
		reverse: false, 
		logoScale: 10, 
		cameraHeight: 30
	}

	let blazorOptions:connaissancesElementProps = {
		name:'Blazor',
		description: 'placeholder',
		modelName: "blazor-anim-1",
		reverse: true, 
		logoScale: 12, 
		cameraHeight: 30
	}

	let htmlOptions:connaissancesElementProps = {
		name:'HTML',
		description: 'placeholder',
		modelName: "html-anim-4",
		reverse: false, 
		logoScale: 35, 
		cameraHeight: 30
	}

	let cssOptions:connaissancesElementProps = {
		name:'CSS',
		description: 'placeholder',
		modelName: "css-anim-6",
		reverse: true, 
		logoScale: 150, 
		cameraHeight: 125
	}

	let tsOptions:connaissancesElementProps = {
		name:'TypeScript',
		description: 'placeholder',
		modelName: "ts-anim-3",
		reverse: true, 
		logoScale: 50, 
		cameraHeight: 50
	}

	let transitionString:string = "transition-opacity duration-500 ease-in-out"

	$: $ConnaissancesStore, changeVisibility();

	function changeVisibility(){
		if($ConnaissancesStore.svelte === true){
			svelteVis = "opacity-1";
		} else{
			svelteVis = "opacity-0"
		}

		if($ConnaissancesStore.blazor === true){
			blazorVis = "opacity-1";
		} else{
			blazorVis = "opacity-0"
		}

		if($ConnaissancesStore.html === true){
			htmlVis = "opacity-1";
		} else{
			htmlVis = "opacity-0"
		}

		if($ConnaissancesStore.css === true){
			cssVis = "opacity-1";
		} else{
			cssVis = "opacity-0"
		}
		if($ConnaissancesStore.ts === true){
			tsVis = "opacity-1";
		} else{
			tsVis = "opacity-0"
		}
		
		
	}

	const sleep = (milliseconds:number) => {
  		return new Promise(resolve => setTimeout(resolve, milliseconds))
	}
	
	
	let bgSpeedHigh = "5s"
	let bgSpeedLow = "15s"
	let currentBgSpeed = bgSpeedLow

	let scrollY = 0
	let lastScrollY = 0;
	

	function handleScroll(){
		currentBgSpeed = bgSpeedHigh
		console.log("animations: ") 
		console.log("th bg speed b: ", currentBgSpeed)
		console.log("exp bg speed b: " )
		sleep(1000)
		currentBgSpeed = bgSpeedLow
		console.log("bg speed a: ", currentBgSpeed)
		console.log("exp bg speed a: ")
	}
	
</script>



<div class="flex flex-col w-full gap-10 p-24" >

	<EmptySeparator/>

	<svg viewBox="0 0 600 100" xmlns="http://www.w3.org/2000/svg"> 
		<text x="35" y="65" class="text-white fill-white font-black text-[60px]">Vincent Fortier</text>
	</svg>

	<EmptySeparator/>

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
					<ExperienceComponent />
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

					<EmptySeparator/>
			
					<IntersectionObserver element={svelteElem} bind:intersecting={$ConnaissancesStore.svelte} threshold={0.5}>
						<div bind:this={svelteElem} class="connaissance-container {svelteVis} {transitionString}" >
							<ConnaissancesElement {...svelteOptions}/>
						</div>
					</IntersectionObserver>

					<EmptySeparator/>

					<IntersectionObserver element={blazorElem} bind:intersecting={$ConnaissancesStore.blazor} threshold={0.5}>
						<div bind:this={blazorElem} class="connaissance-container {blazorVis} {transitionString}" >
							<ConnaissancesElement {...blazorOptions}/>
						</div>
					</IntersectionObserver>

					<EmptySeparator/>

					<IntersectionObserver element={htmlElem} bind:intersecting={$ConnaissancesStore.html} threshold={0.5}>
						<div bind:this={htmlElem} class="connaissance-container {htmlVis} {transitionString}" >
							<ConnaissancesElement {...htmlOptions} />
						</div>
					</IntersectionObserver>

					<EmptySeparator bordered={true} size="30"/>

					<IntersectionObserver element={cssElem} bind:intersecting={$ConnaissancesStore.css} threshold={0.5}>
						<div bind:this={cssElem} class="connaissance-container {cssVis} {transitionString}" >
							<ConnaissancesElement {...cssOptions}/>
						</div>
					</IntersectionObserver>

					<EmptySeparator/>

					<IntersectionObserver element={tsElem} bind:intersecting={$ConnaissancesStore.ts} threshold={0.5}>
						<div bind:this={tsElem} class="connaissance-container {tsVis} {transitionString}" >
							<ConnaissancesElement {...tsOptions}/>
						</div>
					</IntersectionObserver>

					<EmptySeparator/>
					
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

