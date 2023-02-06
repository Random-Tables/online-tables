<script>
	import Btn from '../../app/styled/button.svelte';
	import Title from '../../app/styled/title.svelte';
	import TableGen from '@random-tables/generator-logic';
	import Biome from '@random-tables/biome';

	let outputTerrain;
	let outputGround;
	let outputClimate;
	let outputWeather;
	let outputFlora;
	let outputBugs;
	let outputCreatures;

	TableGen.buildIndex([Biome]);

	async function triggerCall(call, button) {
		button.disabled = true;
		const biomeData = await TableGen.getCall(call);

		outputTerrain.textContent = biomeData[0].value;
		outputGround.textContent = biomeData[1].value;
		outputClimate.textContent = biomeData[2].value;
		outputWeather.textContent = biomeData[3].value;
		outputFlora.textContent = biomeData[4].value;
		outputBugs.textContent = biomeData[5].value;
		outputCreatures.textContent = biomeData[6].value;

		button.disabled = false;
	}
	function biomeClick(evt) {
		triggerCall(Biome.calls.biomeBiome, evt.srcElement);
	}
	const outputCSS = 'border border-neutral-100 rounded p-2 mb-2';
</script>

<Title>Biome Generator</Title>
<p class="mb-2">Click below to generate a Biome</p>

<div class="flex flex-wrap gap-4 mb-6">
	<Btn onClick={biomeClick}>Biome</Btn>
</div>

<span class="font-bold">Terrain</span>
<div bind:this={outputTerrain} class={outputCSS}>-</div>

<div class="grid grid-cols-2 gap-4">
	<div>
		<span class="font-bold">Ground</span>
		<div bind:this={outputGround} class={outputCSS} style="min-height: 2rem;">-</div>
		<span class="font-bold">Climate</span>
		<div bind:this={outputClimate} class={outputCSS} style="min-height: 2rem;">-</div>
		<span class="font-bold">Weather</span>
		<div bind:this={outputWeather} class={outputCSS} style="min-height: 2rem;">-</div>
	</div>
	<div>
		<span class="font-bold">Flora</span>
		<div bind:this={outputFlora} class={outputCSS} style="min-height: 2rem;">-</div>
		<span class="font-bold">Insect Life</span>
		<div bind:this={outputBugs} class={outputCSS} style="min-height: 2rem;">-</div>
		<span class="font-bold">Creatures</span>
		<div bind:this={outputCreatures} class={outputCSS} style="min-height: 2rem;">-</div>
	</div>
</div>
