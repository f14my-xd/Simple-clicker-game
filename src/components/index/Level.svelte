<script>
	import { get_save } from '$lib/helpers/save-helper.js';
	import { onMount } from 'svelte';
	import { levels_structure } from '$lib/stuctures/levels-structure.js';

	let save = $state(get_save())

	onMount(() => {
		document.getElementById("level_progress_bar").value = (save.level_progress/levels_structure[save.level].required)
	})

</script>

<div class="main">
	<div class="info">
		<div class="level" id="level_counter">Уровень: {save.level+1}</div>
	</div>
	<progress max="100" id="level_progress_bar" class="progress"></progress>
</div>

<style>
		.main {
				display: flex;
				align-items: center;
				flex-direction: column;
        align-items: flex-start;
		}

	.info {
			display: flex;
			flex-direction: row;
	}

	.level {
			font-family: "Inter", sans-serif;
			font-size: 15px;
	}

	.progress {
			width: 210px;
			margin: 0;
			height: 15px;
	}
</style>