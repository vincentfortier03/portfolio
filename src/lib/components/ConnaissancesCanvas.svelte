<script lang="ts">
    import type {MousePosition} from "$lib/Utils"
	import { InteractiveObject, Object3DInstance, OrbitControls, T} from '@threlte/core';
    import { useGltf, Grid, GLTF } from '@threlte/extras';
	import { degToRad } from "three/src/math/MathUtils";
    import { spring } from 'svelte/motion'
	import { Camera, PerspectiveCamera } from 'three';

    const scale = spring(1)
    let svelteMesh

    export let mousePosition:MousePosition;

    const { gltf } = useGltf('src/lib/models/svelte-2.glb')
    $: nodes = $gltf?.nodes["node"]
    if(gltf){
        console.log(nodes)
    }

    $: xLookAt = (mousePosition.y / document.body.clientHeight)*15

    let svelte = {
        position: {x:0, y:5, z:0},
        scale: 0.4,
    }

</script>


    <Grid cellColor="white"/>
    <!--<T.PerspectiveCamera makeDefault position={[-0.674, 43.837, -28.545]} rotation={[-124.08, -0.69, -178.98 ]} fov={10}>
        <OrbitControls enabled={false} target={{ y:8, x:0, z:0 }} />
    </T.PerspectiveCamera>-->

    <T.PerspectiveCamera makeDefault position={[0, 30, 0]} fov={20}>
        <OrbitControls enabled={true} target={{ y:0, x:0, z:0 }} />
    </T.PerspectiveCamera>

    <T.DirectionalLight castShadow position={[7.801, 13.229, 9.433]} intensity={1}/>
	<T.DirectionalLight position={[7.134, 18.212, -23.749]} intensity={1} />
	<T.AmbientLight intensity={0.2} />
    
    <GLTF url="src/lib/models/svelte-2.glb" {...svelte} lookAt={{x:xLookAt, y:30, z:xLookAt}}>

    </GLTF>
