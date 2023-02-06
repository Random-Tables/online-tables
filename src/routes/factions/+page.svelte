<script>
	import Btn from '../../app/styled/button.svelte';
	import Title from '../../app/styled/title.svelte';
	import TableGen from '@random-tables/generator-logic';
	import FactionTables from '@random-tables/factions';

	let outputName;
	let outputMembers;

	let outputAge;
	let outputRanks;
	let outputJoining;

	let outputGoals;
	let outputOperations;
	let outputResources;

	TableGen.buildIndex([FactionTables]);

	async function triggerCall(call, button) {
		button.disabled = true;
		const factionData = await TableGen.getCall(call);
		console.log('factionData', factionData);

		outputName.textContent = factionData[0].value;
		outputMembers.textContent = factionData[1].value;
		outputRanks.textContent = factionData[2].value;
		outputGoals.textContent = factionData[3].value;
		outputOperations.textContent = factionData[4].value;
		outputJoining.textContent = factionData[5].value;
		outputAge.textContent = factionData[6].value;
		outputResources.textContent = factionData[7].value;

		button.disabled = false;
	}

	function factionsMilitaryClick(evt) {
		triggerCall(FactionTables.calls.factionsMilitary, evt.srcElement);
	}
	function factionsProfessionalClick(evt) {
		triggerCall(FactionTables.calls.factionsProfessional, evt.srcElement);
	}
	function factionsReligiousClick(evt) {
		triggerCall(FactionTables.calls.factionsReligious, evt.srcElement);
	}

	const outputCSS = 'border border-neutral-100 rounded p-2 mb-2';
</script>

<Title>Faction Generator</Title>

<p class="mb-2">Select one of the below NPC buttons to generate a character</p>

<div class="flex flex-wrap gap-4 mb-6">
	<Btn onClick={factionsMilitaryClick}>Faction - Military</Btn>
	<Btn onClick={factionsProfessionalClick}>Faction - Professional</Btn>
	<Btn onClick={factionsReligiousClick}>Faction - Religious</Btn>
</div>

<div class="flex mb-6 space-x-4 items-center">
	<span class="font-bold">Name</span>
	<span bind:this={outputName} class={outputCSS + ' w-72'}>-</span>
	<span class="font-bold">Members #:</span>
	<span bind:this={outputMembers} class={outputCSS + ' w-32'}>-</span>
</div>

<div class="grid grid-cols-2 gap-4">
	<div>
		<span class="font-bold">Age</span>
		<div bind:this={outputAge} class={outputCSS}>-</div>
		<span class="font-bold">Ranks: [Top, High, apprentice, rookie]</span>
		<div bind:this={outputRanks} class={outputCSS}>-</div>
		<span class="font-bold">Joining</span>
		<div bind:this={outputJoining} class={outputCSS} style="min-height: 2rem;">-</div>
	</div>
	<div>
		<div>
			<span class="font-bold">Goals</span>
			<div bind:this={outputGoals} class={outputCSS} style="min-height: 2rem;">-</div>
		</div>
		<div>
			<span class="font-bold">Operations</span>
			<div bind:this={outputOperations} class={outputCSS} style="min-height: 2rem;">-</div>
		</div>
		<div>
			<span class="font-bold">Resources</span>
			<div bind:this={outputResources} class={outputCSS} style="min-height: 2rem;">-</div>
		</div>
	</div>
</div>
