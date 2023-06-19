<script lang="ts">
	import ExperienceElement from "./ExperienceElement.svelte";
    import type { ExperienceProps } from "$lib/Utils";

    let mceProps:ExperienceProps = {
        title: "Technicien en informatique (étudiant)",
        description: "placeholder",
        imageH: "h-3/5",
        imageAlt: "logo du MCE",
        imageSRC: "images/Logo_MCE.svg",
        compagnie: "Ministère du Conseil Exécutif, Gouvernement du Québec"
    }

    let simonsProps:ExperienceProps = {
        title: "Commis d'entrpôt",
        description: "placeholder",
        imageH: "h-full",
        imageAlt: "logo Simons",
        imageSRC: "images/Logo_Simons.jpg",
        compagnie: "Entrepôt Simons, La Maison Simons"
    }

    let tommyProps:ExperienceProps = {
        title: "Associé aux ventes",
        description: "placeholder",
        imageH: "w-4/5",
        imageAlt: "logo du Tommy Hilfigher",
        imageSRC: "https://upload.wikimedia.org/wikipedia/commons/2/26/Tommy_hilfig_vectorlogo.svg",
        compagnie: "Tommy Hilfiger, PVH"
    }

    let propsList:Array<ExperienceProps> = [mceProps, simonsProps, tommyProps]


</script>


<div class="h-[100vh]">

    <div class="grid grid-cols-1 w-full h-full place-items-center">
        <div class="flex flex-row w-full h-1/2 gap-10 justify-center">
            
                 <ExperienceElement props={mceProps}/>
                 <ExperienceElement props={simonsProps} useAsBG={true}/>
                 <ExperienceElement props={tommyProps}/>
            
        </div>
    </div>


</div>