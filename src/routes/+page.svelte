<script>
	import ATF from '$lib/components/ATF.svelte'
	import Projects from '$lib/components/Projects.svelte'
	import About from '$lib/components/About.svelte'
</script>
<div id="home">
	<style>
		#home {
			scroll-snap-type: y mandatory;
			height: 100vh;
			overflow-y: scroll;
			scrollbar-width: none; 
			-ms-overflow-style: none; 
			::-webkit-scrollbar {
				display: none;
			}
		}

		#header,
		#projects,
		#about {
			scroll-snap-align: start;
			scroll-snap-stop: always;
		}
	</style>
	<ATF />
	<Projects />
	<About />

	<div id="scroll-points">
		<a href="#header" class="scroll-point">&#9679;</a>
		<a href="#projects" class="scroll-point">&#9675;</a>
		<a href="#about" class="scroll-point">&#9675;</a>
	</div>
</div>
