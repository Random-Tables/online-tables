<script>
	import '../app/root.css';
	import Sidebar from '../app/sidebar.svelte';

	export const prerender = true;
</script>

<div class="bg py-12 px-8 w-full font-serif text-stone-800 relative">
	<header class="sidebar"><Sidebar /></header>
	<main>
		<slot />
	</main>
</div>

<style>
	.bg {
		min-height: 100vh;
		background: url(/tess-bg/parchment-bg.png);
	}
</style>
