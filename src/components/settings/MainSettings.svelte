<script>
	import { delete_save, get_save } from '$lib/helpers/save-helper.js';

	let save = $state(get_save())
</script>

<div class="main">
	<div class="header">Основные настройки</div>
		<button class="alert-button" onclick={() => delete_save(save)}>Сбросить сохранение</button>
</div>

<style>
	.header {
			margin-top: 15px;
      font-family: "Inter", sans-serif;
      font-size: 22px;
	}

	.alert-button {
			margin-top: 5px;
      font-family: "Inter", sans-serif;
      font-size: 16px;
      border: 2px solid black;
      border-radius: 7px;
      cursor: pointer;
      width: 210px;
      height: 35px;
      background-color: #ffd4d4;
      transition: 0.2s;
      &:hover {
          transform: scale(1.04);
      }
      &:active {
          transform: scale(0.99);
      }
	}
</style>