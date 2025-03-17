export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".gitignore",".npmrc",".prettierignore",".prettierrc","favicon.png","jsconfig.json","mods/test_mod.js","package-lock.json","package.json","README.md","static/favicon.png","svelte.config.js","vite.config.js"]),
	mimeTypes: {".png":"image/png",".json":"application/json",".js":"text/javascript",".md":"text/markdown"},
	_: {
		client: {start:"_app/immutable/entry/start.BHwsk46s.js",app:"_app/immutable/entry/app.DFE_wpU4.js",imports:["_app/immutable/entry/start.BHwsk46s.js","_app/immutable/chunks/C7dQAL8q.js","_app/immutable/chunks/CGsa1yLP.js","_app/immutable/chunks/DtjZshCJ.js","_app/immutable/entry/app.DFE_wpU4.js","_app/immutable/chunks/CGsa1yLP.js","_app/immutable/chunks/C4cqjtjP.js","_app/immutable/chunks/CF65VEqF.js","_app/immutable/chunks/BObs6yVX.js","_app/immutable/chunks/DtjZshCJ.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/settings",
				pattern: /^\/settings\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
