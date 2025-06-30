<script>
	import Mail from '$lib/icons/Mail.svelte'
	import Linkedin from '$lib/icons/Linkedin.svelte'
	import Github from '$lib/icons/Github.svelte'
	import Facebook from '$lib/icons/Facebook.svelte'
	import Telegram from '$lib/icons/Telegram.svelte'

	let title = "ADN KSHARP",
		description = "Estudiante de ingeniería mecatrónica apasionado por la creación de soluciones tecnológicas que integran hardware y software para resolver problemas."
</script>

<section id="header">
	<style>
		#header {
			height: 100vh;
			text-align: center;
			margin: 0;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}

		#header p {
			font-size: 1.2em;
			width: 47%;
			text-align: center;
		}

		#h1 {
			font-size: 8em;
			-webkit-text-stroke: 1px var(--fg-color);
			color: transparent;
			animation: glitch 3s linear infinite;
		}

		@keyframes glitch{
			2%, 91%{
				transform: translate(20px,0) skew(-5deg);
			}
			1%, 92%{
				transform: translate(-20px,0) skew(5deg);
			}
			0%, 3%, 90%, 93%{
				transform: translate(0,0) skew(0deg); 
			}
		}

		#h1:before,
		#h1:after{
			content: attr(title);
			position: absolute;
			left: 0;
		}

		#h1:before{
			animation: glitchTop 3s linear infinite;
			clip-path: polygon(0 0, 100% 0, 100% 40%, 0 40%);
			-webkit-clip-path: polygon(0 0, 100% 0, 100% 40%, 0 40%);
		}

		@keyframes glitchTop{
			2%, 91%{
				transform: translate(25px, -5px);
				-webkit-text-stroke: 1px #00ffff;
			}
			1%, 92%{
				transform: translate(-15px, 5px);
				-webkit-text-stroke: 1px #ff00ff;
			}
			0%, 3%, 90%, 93%{
				transform: translate(0, 0) skew(0);
				-webkit-text-stroke: 0;
			}
		}

		#h1:after{
			animation: glitchBotom 3s linear infinite;
			clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
			-webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
		}

		@keyframes glitchBotom{
			2%, 91%{
				transform: translate(15px, 5px);
				-webkit-text-stroke: 1px #ff00ff;
			}
			1%, 92%{
				transform: translate(-25px, -5px);
				-webkit-text-stroke: 1px #00ffff;
			}
			0%, 3%, 90%, 93%{
				transform: translate(0, 0) skew(0); 
				-webkit-text-stroke: 0;
			}
		}

		#header div {
			display: flex;
			flex-direction: row;
		}

		#header div a {
			margin: 0 10px;
			text-decoration: none;
		}
	</style>
	<div id="h1" title={title}>{title}</div>
	<p>
		{description}
	</p>
	<div>
		<a href="mailto:adnksharp@gmail.com">
			<Mail />
		</a>
		<a href="https://www.linkedin.com/in/adanksharp/" target="_blank">
			<Linkedin />
		</a>
		<a href="https://github.com/adnksharp" target="_blank">
			<Github />
		</a>
		<a href="https://www.facebook.com/adnksharp" target="_blank">
			<Facebook />
		</a>
		<a href="https://t.me/adnksharp" target="_blank">
			<Telegram />
		</a>
	</div>
</section>
