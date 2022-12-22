<div>
	<input id="sidebar-open" name="sidebar-open" class="hidden" type="checkbox" />
	<label
		id="sidebar-label"
		for="sidebar-open"
		class="absolute z-50 h-20 bg-stone-600 left-0 top-4 pr-4 flex justify-end items-center"
		><img
			src="/art/arrow.png"
			alt="arrow"
			aria-hidden="true"
			class="arrow h-12 w-12 transition"
		/></label
	>
	<nav class="absolute z-30 h-screen top-0 left-0 w-96 transition-width">
		<div class="relative h-full pt-24 px-8 pb-6">
			<!-- decorations -->
			<img
				src="/art/corner-art-2.png"
				aria-hidden
				alt="decoration"
				class="corner-top absolute top-0 -right-1 z-40"
			/>
			<div class="gradient absolute top-0 right-0 z-[35] h-full w-4" />
			<img
				src="/art/corner-art-2.png"
				aria-hidden
				alt="decoration"
				class="corner-bottom absolute bottom-0 -right-1 z-40 rotate-90"
			/>
			<!-- END decorations -->
			<ul><a href="/about">About</a><a href="/">Home</a></ul>
		</div>
	</nav>
</div>
<div />

<style>
	nav {
		max-width: 80vw;
		background: url(/tess-bg/sidebar-bg.png);
		transition: left 0.25s ease-in-out;
	}
	#sidebar-label {
		width: calc(100px + 8vw);
	}
	#sidebar-label .arrow {
		transform: rotate(180deg);
	}
	#sidebar-open:checked ~ nav {
		left: -21rem;
	}
	#sidebar-open:checked ~ label .arrow {
		transform: rotate(0);
	}

	.gradient {
		background: linear-gradient(to right, rgba(102, 131, 144, 0.33), #203640);
	}
</style>
