<div>
	<input id="sidebar-open" name="sidebar-open" class="hidden" type="checkbox" />
	<label
		id="sidebar-label"
		for="sidebar-open"
		class="absolute z-50 h-20 left-0 top-16 pr-4 flex justify-end items-center cursor-pointer"
		><img
			src="/art/arrow.png"
			alt="arrow"
			aria-hidden="true"
			class="arrow h-12 w-12 transition relative right-20 rotate-180"
		/></label
	>
	<nav class="fixed z-30 h-screen top-0 left-0 w-96 transition-width">
		<div class="relative h-full pt-24 px-8 pb-6">
			<!-- decorations -->
			<img
				src="/art/corner2.webp"
				aria-hidden
				alt="decoration"
				class="corner-top absolute top-0 -right-1 z-40 h-52 -rotate-90"
			/>
			<div class="gradient absolute top-0 right-0 z-[35] h-full w-4" />
			<img
				src="/art/corner2.webp"
				aria-hidden
				alt="decoration"
				class="corner-bottom absolute bottom-0 -right-1 z-40 h-52"
			/>
			<!-- END decorations -->
			<div class="pt-12 pb-8 px-16">
				<h3 class="text-5xl font-semibold text-center block leading-loose">Book of</h3>
				<h3 class="text-5xl font-semibold text-center block">Tables</h3>
				<ul class="pt-4 flex flex-col"><a href="/about">About</a><a href="/">Home</a></ul>
			</div>
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
		background: url(/art/bookmark.webp);
		background-position: right;
		background-size: cover;
		width: calc(100px + 22vw);
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
