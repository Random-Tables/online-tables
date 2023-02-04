<script>
	import '../app/root.css';
	import Sidebar from '../app/sidebar.svelte';

	export const prerender = true;
</script>

<div class="bg w-full font-serif text-stone-800 relative">
	<header class="sidebar"><Sidebar /></header>
	<main class="min-h-screen">
		<div class="container pt-36 lg:px-16 lg:px-32">
			<slot />
		</div>
	</main>
</div>

<style>
	.bg {
		background: url(/tess-bg/parchment-bg.png);
	}
</style>
