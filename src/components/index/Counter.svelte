<script>
	import { get_save, set_save } from '$lib/helpers/save-helper.js';
	import { increment } from '$lib/helpers/counter-helper.js';

	let save = $state(get_save())

</script>

<div class="main">
	<div class="counter">{(save.money).toFixed(0)}</div>
	<button onclick={() => increment(save)} class="button">Нажми на меня!</button>
</div>

<style>
    .main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 35vh;
				margin-bottom: 5px;
    }

		.counter {
				display: flex;
					font-family: "Inter", sans-serif;
					font-size: 20px;
				margin-bottom: 5px;
		}

		.button {
        font-family: "Inter", sans-serif;
				font-size: 16px;
				border: 2px solid black;
				border-radius: 7px;
				cursor: pointer;
				width: 210px;
				height: 35px;
				background-color: #f3f3f3;
				transition: 0.2s;
				&:hover {
						transform: scale(1.04);
				}
				&:active {
						transform: scale(0.99);
				}
		}
</style>