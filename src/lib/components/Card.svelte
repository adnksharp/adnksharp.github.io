<script>
	let {preview, title, description, tecnologies, uri} = $props();
	
	import arduino from '$lib/icons/arduino.webp'
	import cpp from '$lib/icons/cpp.webp'
	import gazebo from '$lib/icons/gazebo.webp'
	import electron from '$lib/icons/electron.webp'
	import express from '$lib/icons/express.webp'
	import js from '$lib/icons/js.webp'
	import html from '$lib/icons/html.webp'
	import neutralino from '$lib/icons/neutralino.webp'
	import python from '$lib/icons/python.webp'
	import ros from '$lib/icons/ros.webp'
	import sdf from '$lib/icons/sdf.webp'
	import kicad from '$lib/icons/kicad.webp'
	import sw from '$lib/icons/sw.webp'
</script>

<div class="project">
	<style>
		.project ul {
			list-style: none;
			margin: 0;
			padding: 10px 0;
			align-items: center;
			width: 100%;
		}

		.project li {
			background-color: var(--C1);
			padding: 15px;
			display: inline-flex;
			width: calc(27% - 20px);
			margin: 10px;
			height: 20px;
			align-items: center;
		}

		.project {
			border: solid 1px var(--C2);
			height: 80vh;
			width: 30vw;
			max-width: 800px;
			max-height: 1200px;
			margin: 30px;
			position: relative;
			overflow: hidden;
			transition: width 0.3s ease;
		}

		.project:hover,
		.project:focus {
			width: 100%;
		}
			
		.project h3 {
			font-size: 1.5rem;
			height: 4.8rem;
			position: relative;
			margin: 0;
			width: 100%;
			align-items: center;
			justify-content: center;
			text-align: center;
			display: flex;
			transition: height 0.5s ease;
		}

		.project:hover h3 {
			font-size: 2rem;
			height: 30%;
			position: absolute;
			top: 0;
		}

		.project h4 {
			margin: 10px 0 0 20px;
		}

		.project p {
			margin: 20px;
			text-align: left;
		}

		.project .img {
			width: 100%;
			height: calc(100% - 4.8rem);
			object-fit: cover;
			transition: height 0.5s ease;
		}

		.project:hover .img {
			opacity: 0.5;
			height: 30%;
		}

		#P02:hover .img,
		#P03:hover .img {
			opacity: 0.5;
			height: 43%;
		}
	</style>
	<a href="{uri}" target="_blank">
	{#if preview}
		<img src="{preview}" alt="project preview" class="img" />
	{/if}
	<h3>{title}</h3>
	<p class="description">{description}</p>
	<h4>Technologías</h4>
	<ul>
		{#each tecnologies as technology}
			<li>
				<img src={
					technology === 'Arduino' ? arduino :
					technology === 'C++' ? cpp :
					technology === 'Gazebo & RViz' ? gazebo :
					technology === 'ElectronJS' ? electron :
					technology === 'ExpressJS' ? express :
					technology === 'JavaScript' ? js :
					technology === 'HTML & CSS' ? html :
					technology === 'NeutralinoJS' ? neutralino :
					technology === 'Python' ? python :
					technology === 'ROS2' ? ros :
					technology === 'SDF' ? sdf :
					technology === 'EDA' ? kicad :
					sw
				} alt="{technology} icon" class="icon" />
				{technology}
			</li>
		{/each}
	</ul>
	</a>
</div>
