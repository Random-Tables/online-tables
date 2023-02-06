<script>
	import Btn from '../../app/styled/button.svelte';
	import TableGen from '@random-tables/generator-logic';
	import FantasyTable from '@random-tables/npc-fantasy';

	TableGen.buildIndex([FantasyTable]);

	let outputName;
	let outputAge;
	let outputDescription;
	let outputPersonality;
	let outputMotivation;
	let outputFamily;
	let outputPast;

	async function triggerCall(call, button) {
		button.disabled = true;
		const npcData = await TableGen.getCall(call);

		outputName.textContent = npcData[0].value;
		outputAge.textContent = npcData[1].value;
		outputDescription.textContent = npcData[2].value;
		outputPersonality.textContent = npcData[3].value;
		outputMotivation.textContent = npcData[4].value;
		outputFamily.textContent = npcData[5].value;
		outputPast.textContent = npcData[6].value;

		button.disabled = false;
	}

	function dwarfMaleClick(evt) {
		triggerCall(FantasyTable.calls.dwarfMale, evt.target);
	}
	function dwarfFemaleClick(evt) {
		triggerCall(FantasyTable.calls.dwarfFemale, evt.target);
	}
	function elfMaleClick(evt) {
		triggerCall(FantasyTable.calls.elfMaleMiddle, evt.target);
	}
	function elfFemaleClick(evt) {
		triggerCall(FantasyTable.calls.elfFemaleMiddle, evt.target);
	}
	function highelfMaleClick(evt) {
		triggerCall(FantasyTable.calls.elfMaleHigh, evt.target);
	}
	function highelfFemaleClick(evt) {
		triggerCall(FantasyTable.calls.elfFemaleHigh, evt.target);
	}

	const outputCSS = 'border border-slate-300 rounded p-2 mb-2';
</script>

<h1 class="text-4xl mb-4 flex justify-center">NPC's Generator</h1>

<h3 class="text-2xl mb-2">NPC's</h3>

<p class="mb-2">Select one of the below NPC buttons to generate a character</p>

<div class="flex flex-wrap gap-4 mb-6">
	<Btn onClick={dwarfMaleClick}>Fantasy - Dwarf - Male</Btn>
	<Btn onClick={dwarfFemaleClick}>Fantasy - Dwarf - Female</Btn>
	<Btn onClick={elfMaleClick}>Fantasy - Elf - Male</Btn>
	<Btn onClick={elfFemaleClick}>Fantasy - Elf - Female</Btn>
	<Btn onClick={highelfMaleClick}>Fantasy - High Elf - Male</Btn>
	<Btn onClick={highelfFemaleClick}>Fantasy - High Elf - Female</Btn>
</div>

<div class="flex mb-6 space-x-4 items-center">
	<span class="font-bold">Name</span>
	<span bind:this={outputName} class={outputCSS + ' w-40'}>-</span>
	<span class="font-bold">Age</span>
	<span bind:this={outputAge} class={outputCSS + ' w-12'}>-</span>
</div>

<div class="grid grid-cols-2 gap-4">
	<div>
		<span class="font-bold">Description</span>
		<div bind:this={outputDescription} class={outputCSS} style="min-height: 4rem;">-</div>
		<span class="font-bold">Personality</span>
		<div bind:this={outputPersonality} class={outputCSS} style="min-height: 2rem;">-</div>
		<span class="font-bold">Motivations</span>
		<div bind:this={outputMotivation} class={outputCSS} style="min-height: 2rem;">-</div>
	</div>
	<div>
		<span class="font-bold">Family</span>
		<div bind:this={outputFamily} class={outputCSS} style="min-height: 4rem;">-</div>
		<span class="font-bold">Past</span>
		<div bind:this={outputPast} class={outputCSS} style="min-height: 2rem;">-</div>
	</div>
</div>
