<script>
	export let onClick;
</script>

<button
	on:click={onClick}
	class="p-2 border-2 border-slate-800 bg-slate-700 bg-opacity-25 rounded hover:bg-opacity-30 transition-all"
	><slot /></button
>
