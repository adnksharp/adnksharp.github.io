<script>
</script>
<section id="about">
	<style>
		#about {
			height: calc(100vh - 40px);
			padding: 20px;
		}

		#about container {
			display: flex;
			flex-direction: row;
		}

		#about div ul {
			width: 50vw;
		}
		
		#about h2 {
			text-align: center;
			font-size: 2.5rem;
			width: 100%;
			margin: 20px 0 0 0;
		}

		.timeline {
			position: relative;
			list-style: none;
			padding: 0;
			margin: 0;
		}

		.tl-item {
			margin-bottom: 10px;
			border-left: 2px solid #ccc;
			padding-left: 20px;
			display: flex;
			flex-direction: column;
			width: 300px;
		}

		.tl-item div {
			width: calc(20vw - 20px);
			margin-right: 20px;
		}

		.tl-item h3 {
			margin: 0;
		}

		.tl-item h4 {
			margin: 0;
			color: #666;
		}

		.tl-item ul {
			display: none;
			list-style: disc;
			margin-left: 20px;
			padding-left: 0;
		}

		.tl-item:hover ul {
			display: flex;
			flex-direction: column;
			position: absolute;
			right: 0;
			top: 0;
			width: 400px;
			height: 100%;
		}

		.tl-item ul li {
			margin-bottom: 5px;
		}

		.timeline {
			width: 50vw;
			padding: 0 20px;
		}

		.extra {
			width: 30vw;
			padding: 0 20px;
		}

	</style>
	<h2>Sobre mí</h2>
	<container>
	<div class="extra">
		<h3>Filosofía</h3>
		<p>
			Mi pasión reside en descomponer problemas complejos y constryur soluciones que conectan distintas disciplinas. Adaptando una mentalidad de resolución de problemas orientada a resultados, procuro comprender las necesidades desde múltiples perspectivas –ya sea el diseño mecánico, la lógica de control, la electrónica o la interfaz de usuario. Mi enfoque se caracteriza por la adaptabilidad y el aprendizaje continuo, impulsado por la búsqueda de soluciones innovadoras para cada desafío, siempre con la visión de un sistema superior, enfocado en la escalabilidad y la fiabilidad.
		</p>
	</div>
	<ul class="timeline">
		<h3>Mi trayectoria</h3>
		<li class="tl-item">
			<h3>Bachillerato</h3>
			<h4>Centro de Bachillerato Tecnológico Industrial y de Servicios No. 128</h4>
			<h4>2016 - 2019</h4>
			<ul>
				<!-- hard skills-->
				<li>Estudios en electrónica a nivel bachillerato</li>
				<li>Desarrollo de proyectos académicos relacionados con audio (amplificadores, altavoces, filtros)</li>
				<li>Introducción a la programación de microcontroladores PIC y PLC Siemens.</li>
				<li>Desarrollo de proyectos personales con microcontroladores Arduino.</li>
				<!-- soft skills -->
				<li>Desarrollo de habilidades de trabajo en equipo y colaboración en proyectos académicos.</li>
				<li>Desarrollo de habilidades de gestión del tiempo y organización al equilibrar estudios y proyectos extracurriculares.</li>
			</ul>
		</li>
		<li class="tl-item">
			<h3>Ingeniería en Mecatrónica</h3>
			<h4>Universidad Autónoma de Ciudad Juárez</h4>
			<h4>2019 - Presente</h4>
			<ul>
				<!-- hard skills-->
				<li>Proyectos de programación y desarrollo de software (C#, .NET, Node.js)</li>
				<li>Desarrollo de interfaces gráficas y aplicaciones web</li>
				<li>Proyectos de IoT con ESP32, MQTT y Node-RED</li>
				<li>Diseño de circuitos impresos (PCB) con KiCad, Fritzing y EasyEDA</li>
				<li>Proyectos de control clásico y moderno con Arduino y Simulink</li>
				<li>Desarrollo de aplicaciones de escritorio con C#, Electron.js y Python</li>
				<li>Modelado 3D y CAD con SolidWorks</li>
				<li>Desarrollo de proyectos de automatización con PLCs MicroLogix</li>
				<li>Resolución de problemas de análisis numérico con Python y Scilab</li>
				<li>Resolución de problemas de FEM y simulación de estructuras mecánicas</li>
				<li>Desarrollo de un brazo robótico con ESP32 y Electron.js</li>
				<li>Desarrollo de proyectos con ROS2.</li>
				<!-- soft skills -->
				<li>Desarrollo de habilidades de adaptabilidad y aprendizaje continuo al explorar nuevas tecnologías y herramientas.</li>
				<li>Desarrollo de habilidades de gestión de proyectos y planificación al coordinar múltiples tareas y plazos.</li>
				<li>Desarrollo de habilidades de investigación y análisis al abordar problemas técnicos y buscar soluciones innovadoras.</li>
			</ul>
		</li>
		<li class="tl-item">
			<h3>Reparación de electrodomésticos</h3>
			<h4>2019 - Presente</h4>
			<ul>
				<!-- hard skills-->
				<li>Reparación y mantenimiento de electrodomésticos y equipos electrónicos.</li>
				<li>Diagnóstico y solución de problemas técnicos en dispositivos electrónicos.</li>
				<li>Desarrollo de habilidades prácticas en electrónica y mecánica.</li>
				<!-- soft skills -->
				<li>Desarrollo de habilidades de atención al cliente y comunicación efectiva al interactuar con clientes para resolver problemas.</li>
				<li>Desarrollo de habilidades de resolución de problemas y pensamiento crítico al diagnosticar y reparar dispositivos electrónicos.</li>
				<li>Desarrollo de habilidades de gestión del tiempo y organización al equilibrar el trabajo de reparación con otros compromisos académicos y personales.</li>
			</ul>
		</li>
		<li class="tl-item">
			<h3>Instalaciones eléctricas</h3>
			<h4>2021 - 2023</h4>
			<ul>
				<!-- hard skills-->
				<li>Instalación y mantenimiento de instalaciones eléctricas domesticas</li>
				<!-- soft skills -->
				<li>Desarrollo de habilidades de atención al cliente y comunicación efectiva al interactuar con clientes para resolver problemas eléctricos.</li>
				<li>Desarrollo de habilidades de resolución de problemas y pensamiento crítico al diagnosticar y reparar sistemas eléctricos.</li>
			</ul>
		</li>
		<li class="tl-item">
			<h3>Trabajos independientes de alta potencia</h3>
			<h4>2024</h4>
			<ul>
				<!-- hard skills-->
				<li>Reparación y mantenimiento de motores eléctricos</li>
				<!-- soft skills -->
				<li>Mejora de habilidades de atención al cliente y comunicación efectiva al interactuar con clientes para resolver problemas.</li>
				<li>Mejora de habilidades de resolución de problemas y pensamiento crítico al diagnosticar y reparar dispositivos electrónicos.</li>
			</ul>
		</li>
		<li class="tl-item">
			<h3>Trabajo en ferretería</h3>
			<h4>2024</h4>
			<ul>
				<!-- hard skills-->
				<li>Atención al cliente y ventas en el área de ferretería</li>
				<li>Gestión de inventario y almacenamiento de productos</li>
				<!-- soft skills -->
				<li>Desarrollo de habilidades de atención al cliente y comunicación efectiva al interactuar con clientes para resolver problemas.</li>
			</ul>
		</li>
		<li class="tl-item">
			<h3>Proyectos robóticos con ROS2</h3>
			<h4>2025</h4>
			<ul>
				<!-- hard skills-->
				<li>Desarrollo de proyectos robóticos con ROS2, Gazebo y micro-ROS</li>
				<li>Implementación de Hardware-in-the-Loop (HIL) para simular y probar sistemas robóticos</li>
				<!-- soft skills -->
				<li>Mejora de habilidades de programación aplicada a la robótica al trabajar con ROS2 y micro-ROS.</li>
				<li>Desarrollo de habilidades de simulación y prueba de sistemas robóticos al implementar HIL.</li>
			</ul>
		</li>
	</ul>
	</container>
</section>
