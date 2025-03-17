<div class="main" id="level_up_alert" style="display: none;">
	<div class="level-up-alert">
		<div class="header" style="margin-top: 7px;">Новый уровень!</div>
		<div class="header" id="level_up_header"></div>
		<div class="content">
			<div class="left">
				<div class="header-item">Улучшенно:</div>
				<div class="item" id="left"></div>
			</div>
			<div class="right">
				<div class="header-item">Открыто:</div>
			</div>
		</div>
		<button class="button" onclick={() => document.getElementById("level_up_alert").style.display = "none"}>Хорошо</button>
	</div>
</div>

<style>

		.button {
				margin-top: 105px;
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

    .item {
        font-family: "Inter", sans-serif;
        font-size: 16px;
				margin-top: 3px;
    }

		.header-item {
        font-family: "Inter", sans-serif;
        font-size: 19px;
				margin-top: 3px;
		}

		.left {
				display: flex;
				flex-direction: column;
				align-items: center;
				align-content: center;
				margin-left: 15px;
		}

    .right {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
        margin-right: 15px;
    }

		.content {
				display: flex;
				flex-direction: row;
				width: 100%;
				justify-content: space-between;
		}

		.main {
				display: flex;
				flex-direction: column;
				align-items: center;
				align-content: center;
		}

	.level-up-alert {
			position: absolute;
			margin-top: 25vh;
      z-index: 100;
			width: 400px;
			height: 250px;
			border: 2px solid black;
			border-radius: 15px;
			background-color: rgba(2, 2, 2, 0.01);
			backdrop-filter: blur(6px);
      display: flex;
      flex-direction: column;
      align-items: center;
      align-content: center;
	}

	.header {
      font-family: "Inter", sans-serif;
      font-size: 20px;
			font-weight: 500;
	}
</style>