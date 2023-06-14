<script lang="ts">
	import { InteractiveObject, Object3DInstance, OrbitControls, T} from '@threlte/core';
    import { useGltf, Grid, GLTF } from '@threlte/extras';
	import { degToRad } from "three/src/math/MathUtils";
    import { spring } from 'svelte/motion'
	import { Camera, PerspectiveCamera } from 'three';

    const scale = spring(1)
    let svelteMesh


    

    const { gltf } = useGltf('src/lib/models/scene.glb')
    if(gltf){
        console.log("gltf ok")
    }

    let svelte = {
        position: {x:0, y:0, z:0},
        scale: 0.4,
    }

</script>


    <!--<Grid cellColor="white"/>-->
    <T.PerspectiveCamera makeDefault position={[3, 10, 3]} fov={30}>
        <OrbitControls enabled={false} target={{ y:5, x:3 }} />
    </T.PerspectiveCamera>

    <T.DirectionalLight castShadow position={[-5, 10, 10]} />
	<T.DirectionalLight position={[-10, 10, -10]} intensity={0.1} />
	<T.AmbientLight intensity={0.2} />
    
    <GLTF url="src/lib/models/scene.glb" {...svelte}>

    </GLTF>
