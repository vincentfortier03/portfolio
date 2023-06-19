export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/Archivo-VariableFont_wdth,wght.ttf","fonts/GasoekOne-Regular.ttf","images/Logo_MCE.svg","images/Logo_Simons.jpg","models/blazor-anim-1.glb","models/css-anim-6.glb","models/html-anim-4.glb","models/old/blazor-1.glb","models/old/css-anim-1.glb","models/old/css-anim-2.glb","models/old/css-anim-3.glb","models/old/css-anim-4.glb","models/old/css-anim-5.glb","models/old/html-anim-1.glb","models/old/html-anim-2.glb","models/old/html-anim-3.glb","models/old/porsche.glb","models/old/scene.glb","models/old/svelte-2.glb","models/old/svelte-3.glb","models/old/svelte-4.glb","models/old/svelte-5.glb","models/old/svelte-6.glb","models/old/svelte-anim-1.glb","models/old/svelte-anim-2.glb","models/old/svelte-anim-3.glb","models/old/svelte.glb","models/old/ts-anim-1.glb","models/old/ts-anim-2.glb","models/svelte-anim-4.glb","models/ts-anim-3.glb"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".svg":"image/svg+xml",".jpg":"image/jpeg",".glb":"model/gltf-binary"},
	_: {
		client: {"start":"_app/immutable/entry/start.b4587a91.js","app":"_app/immutable/entry/app.b89c6ece.js","imports":["_app/immutable/entry/start.b4587a91.js","_app/immutable/chunks/index.58e20e8d.js","_app/immutable/chunks/singletons.a45e929f.js","_app/immutable/chunks/index.32a8c1e1.js","_app/immutable/entry/app.b89c6ece.js","_app/immutable/chunks/index.58e20e8d.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
