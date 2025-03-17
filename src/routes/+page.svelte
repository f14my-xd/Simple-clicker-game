<script>
	import Level from '../components/index/Level.svelte';
	import Counter from '../components/index/Counter.svelte';
	import Header from '../components/index/Header.svelte';
	import Menu from '../components/index/Menu.svelte';
	import LevelUpAlert from '../components/index/LevelUpAlert.svelte';
</script>

<Header header="Simple clicker game"/>
<LevelUpAlert />
<div class="main">
	<Counter />
	<Level />
	<Menu />
</div>

<style>
	.main {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			align-content: center;
	}
</style>