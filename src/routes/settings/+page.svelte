<script>
	import Header from '../../components/index/Header.svelte';
	import Menu from '../../components/index/Menu.svelte';
	import MainSettings from '../../components/settings/MainSettings.svelte';
</script>

<Header header="Simple clicker game | Настройки"/>
<div class="main">
	<Menu />
</div>
<MainSettings />

<style>
    .main {
        display: flex;
        flex-direction: column;
				align-items: center;
				align-content: center;
    }
</style>