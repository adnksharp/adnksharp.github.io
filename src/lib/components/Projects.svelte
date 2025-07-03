<script>
	import Card from '$lib/components/Card.svelte'

	import cartesian from '$lib/assets/cartesian.png'
	import vant from '$lib/assets/vant.png'
	import arm from '$lib/assets/arm.png'
</script>

<style>
	#projects div {
		margin: 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: 100%;
	}

	#projects h2 {
		text-align: center;
		font-size: 2.5rem;
		width: 100%;
		margin: 40px 0 0 0;
	}
</style>

<section id="projects">
	<h2>Proyectos</h2>
	<div>
		<Card
			preview={cartesian}
			title="Robot Cartesiano de 3 DOF"
			description="Robot cartesiano de 3 grados de libertad controlado por ROS2 y simulado en Gazebo. Una interfaz gráfica multiplataforma (NeutralinoJS) permite el control del robot a través de una red local."
			tecnologies={[
				"ROS2",
				"CAD",
				"EDA",
				"NeutralinoJS",
				"JavaScript",
				"HTML & CSS",
				"Arduino",
				"C++",
				"Python",
				"Gazebo & RViz",
			]}
			uri="https://github.com/adnksharp/cartesian-ppp-ros"
		/>
		<Card
			preview={vant}
			title="VANT ciberfísico"
			description="Vehículo aéreo no tripulado (VANT) ciberfísico simulado en Gazebo, controlado con ROS2. Utiliza los paquetes de multirotores de ROS2 para el control y monitoreo del VANT usando &#x3BC;ROS."
			tecnologies={[
				"ROS2",
				"CAD",
				"SDF",
				"EDA",
				"Gazebo & RViz",
				"Python",
				"Arduino",
				"C++",
			]}
			uri="https://github.com/adnksharp/multirotor-ros"
		/>
		<Card
			preview={arm}
			title="Brazo robótico de 5 DOF"
			description="Brazo robótico de 5 grados de libertad controlado por una interfaz gráfica multiplataforma (ElectronJS) a través de un servidor local (ExpressJS)."
			tecnologies={[
				"Arduino",
				"C++",
				"ExpressJS",
				"ElectronJS",
				"JavaScript",
				"HTML & CSS",
				"CAD",
				"EDA",
			]}
			uri="https://github.com/adnksharp/Robotered"
		/>
	</div>
</section>
