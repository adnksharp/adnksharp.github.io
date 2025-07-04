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
			max-width: calc(16.0 / 9.0 * 100vh);
			margin-inline: auto;
			height: 100vh;
			text-align: center;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}

		#header h2,
		#projects h2,
		#about h2 {
			text-align: center;
			font-size: 2.5em;
			width: 100%;
			margin: 40px 0 0 0;
		}
	</style>
	<ATF />
	<Projects />
	<About />
</div>
