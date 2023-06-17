<script lang="ts">
    import type {MousePosition} from "$lib/Utils"
	import { InteractiveObject, Object3DInstance, OrbitControls, Pass, T, Three} from '@threlte/core';
    import { useGltf, Grid, GLTF,useCursor, useGltfAnimations  } from '@threlte/extras';
	import { degToRad } from "three/src/math/MathUtils";
    import { spring } from 'svelte/motion'
	import { Camera, PerspectiveCamera, Vector2 } from 'three';
    import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'

    export let mousePosition:MousePosition;
    export let modelName:string;
    export let logoScale:number;
    export let cameraHeight:number;

    const modelPath:string = 'src/lib/models/' + modelName + '.glb'

    const { gltf } = useGltf(modelPath)

    $: xLookAt = mousePosition.x 
    let svelteScale = 10

    console.log(mousePosition.x)
    let svelte = {
        position: {x:0, y:0, z:0},
        scale: logoScale
        
    }

    useGltfAnimations<'CurveAction'>(gltf, ({ actions }) => {
        actions['CurveAction']?.play()
    })
    

    console.log("lookat: ", xLookAt)

</script>


    <!--<Grid cellColor="white"/>-->
    <!--<T.PerspectiveCamera makeDefault position={[-0.674, 43.837, -28.545]} rotation={[-124.08, -0.69, -178.98 ]} fov={10}>
        <OrbitControls enabled={false} target={{ y:8, x:0, z:0 }} />
    </T.PerspectiveCamera>-->

    <T.PerspectiveCamera makeDefault position={[0, cameraHeight, 0]} fov={20}>
        <OrbitControls enabled={true} target={{ y:0, x:0, z:0 }} enableDamping={true}/>
    </T.PerspectiveCamera>

    <!--<Pass pass={new UnrealBloomPass(new Vector2(10,10), 10, 109, 2)}/>-->

    <!----><T.DirectionalLight castShadow position={[7.801, 13.229, 9.433]} intensity={1}/>
	<T.DirectionalLight position={[7.134, 18.212, -23.749]} intensity={1} />
	<T.AmbientLight intensity={0.2} />
 
    
    
   <!-- <GLTF url="src/lib/models/svelte-4.glb"  {...svelte}>

    </GLTF>-->

    

    {#if $gltf}
        <Object3DInstance object={$gltf.nodes['Curve']} {...svelte}/>
    {/if}
