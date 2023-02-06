<script>
	import Btn from '../../app/styled/button.svelte';
	import Title from '../../app/styled/title.svelte';
	import { breakUpCamelCase, capitalize } from '../../app/utils';
	import { outputBox } from '../../app/style-strings';
	import TableGen from '@random-tables/generator-logic';
	import NamesTable from '@random-tables/utility-names';
	import NamesFantasyTable from '@random-tables/utility-names-fantasy';
	import NamesHistoricTable from '@random-tables/utility-names-historic';

	let outputName;
	let outputSurName;

	TableGen.buildIndex([NamesTable, NamesFantasyTable, NamesHistoricTable]);

	async function triggerCall(call, target) {
		const nameData = await TableGen.getCall(call);
		target.textContent = capitalize(nameData);
	}
	function setName(callFirstname, callSurname, evt) {
		evt.target.disabled = true;
		triggerCall(callFirstname, outputName);
		triggerCall(callSurname, outputSurName);
		evt.target.disabled = false;
	}

	const subtitleClass = 'text-lg font-bold mb-2';

	// Modern Names
	const MNC = NamesTable.calls;
	const engMale = (e) => setName(MNC.englishMale, MNC.englishSurnameGen, e);
	const engFemale = (e) => setName(MNC.englishFemale, MNC.englishSurnameGen, e);
	const frenchMale = (e) => setName(MNC.frenchMale, MNC.frenchSurname, e);
	const frenchFemale = (e) => setName(MNC.frenchFemale, MNC.frenchSurname, e);
	const tibetanMale = (e) => setName(MNC.tibetanMale, MNC.tibetanSurname, e);
	const tibetanFemale = (e) => setName(MNC.tibetanFemale, MNC.tibetanSurname, e);

	// names fantasy
	const FNC = NamesFantasyTable.calls;
	const dwarfMale = (e) => setName(FNC.dwarvenMale, FNC.dwarvenSurnameGen, e);
	const dwarfFemale = (e) => setName(FNC.dwarvenFemale, FNC.dwarvenSurnameGen, e);
	const middleElfMale = (e) => setName(FNC.elvenMaleMiddle, FNC.elvenSurnameGen, e);
	const middleElfFemale = (e) => setName(FNC.elvenFemaleMiddle, FNC.elvenSurnameGen, e);
	const highElfMale = (e) => setName(FNC.elvenMaleHigh, FNC.elvenSurnameGen, e);
	const highElfFemale = (e) => setName(FNC.elvenFemaleHigh, FNC.elvenSurnameGen, e);

	// names fantasy
	const HNC = NamesHistoricTable.calls;
	const angloSaxonMale = (e) => setName(HNC.angloSaxonMale, HNC.angloSaxonSurname, e);
	const angloSaxonFemale = (e) => setName(HNC.angloSaxonFemale, HNC.angloSaxonSurname, e);
</script>

<Title>Names Generator</Title>
<p class="mb-2">Select one of the below buttons to generate a character name</p>

<span class="font-bold">Name</span>
<div class={outputBox + ' w-72'}>
	<span bind:this={outputName} class="mr-1">-</span>
	<span bind:this={outputSurName}>-</span>
</div>

<h3 class={subtitleClass}>Modern Names</h3>

<div class="flex flex-wrap gap-4 mb-6">
	<Btn onClick={engMale}>English - Male</Btn>
	<Btn onClick={engFemale}>English - Female</Btn>
	<Btn onClick={frenchMale}>French - Male</Btn>
	<Btn onClick={frenchFemale}>French - Female</Btn>
	<Btn onClick={tibetanMale}>Tibetan - Male</Btn>
	<Btn onClick={tibetanFemale}>Tibetan - Female</Btn>
</div>

<h3 class={subtitleClass}>Fantasy Names</h3>

<div class="flex flex-wrap gap-4 mb-6">
	<Btn onClick={dwarfMale}>Dwarf - Male</Btn>
	<Btn onClick={dwarfFemale}>Dwarf - Female</Btn>
	<Btn onClick={middleElfMale}>Elf - Middle - Male</Btn>
	<Btn onClick={middleElfFemale}>Elf - Middle - Female</Btn>
	<Btn onClick={highElfMale}>Elf - High - Male</Btn>
	<Btn onClick={highElfFemale}>Elf - High - Female</Btn>
</div>

<h3 class={subtitleClass}>Historic Names</h3>

<div class="flex flex-wrap gap-4 mb-6">
	<Btn onClick={angloSaxonMale}>Anglo Saxon - Male</Btn>
	<Btn onClick={angloSaxonFemale}>Anglo Saxon - Female</Btn>
</div>
