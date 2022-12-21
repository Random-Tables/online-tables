<script>
	import '../app/root.css';

	export const prerender = true;
</script>

<div class="bg p-4 w-full font-serif text-stone-800">
	<header class="sidebar" />
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
