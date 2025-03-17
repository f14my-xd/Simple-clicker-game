import ScgMod from './scg-mod.js'

const mod = ScgMod();

mod.EventHandler("SetSave", (event) => {
	event.cansel()
});

mod.InjectUI("/settings", "./test.svelte", 1);

mod.InjectPage("/")