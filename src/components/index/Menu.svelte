<div class="main">
	<div class="menu-buttons">
		<a href="/"><button class="menu-button">Главная</button></a>
		<button class="menu-button">Поддержать</button>
		<a href="/settings"><button class="menu-button">Настройки</button></a>
	</div>
	<div class="menu-line"></div>
</div>

<style>
 	.main {
			display: flex;
			position: absolute;
			bottom: 0;
			margin-bottom: 10px;
			flex-direction: column;
	}

	.menu-line {
			display: flex;
			height: 3px;
			background-color: black;
			margin-top: 5px;
			border-radius: 10px;
	}

	.menu-buttons {
			display: flex;
			flex-direction: row;
	}

	.menu-button {
			border: none;
			font-family: "Inter", sans-serif;
			font-size: 18px;
			background-color: transparent;
			transition: 0.2s;
      &:hover {
          transform: scale(1.08);
      }
      &:active {
          transform: scale(0.98);
      }
	}
</style>