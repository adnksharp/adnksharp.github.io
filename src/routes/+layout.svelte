<!--my portfolio layout-->
<script> 
	import { page } from '$app/stores';    
</script>
 
<svelte:head>
	<title>{$page.data.title ?? "Mi Portafolio"}</title>
</svelte:head>

<style>
	:root {
		--bg-color: #000;
		--fg-color: #fff;
		--C1: #1c1e22;
		--C2: #65696d;
		--C3: #ffaa00;
		--C4: #8b949e;
		--accent-color: #58a6ff;
	}

	:global {
		body {
			background-color: var(--bg-color);
			color: var(--fg-color);
			font-family: 'SF Pro Text', 'Noto Sans', 'Segoe UI', sans-serif;
			margin: 0;
			padding: 0;
		}

		a {
			color: var(--fg-color);
			text-decoration: none;
		}

		span {
			color: var(--C3);
			background-color: var(--C1);
			padding: 2px 4px;
			border-radius: 6px;
		}
		
		.icon {
			width: 32px;
			height: 32px;
			margin-right: 10px;
			background-size: cover;
		}
	}
	nav {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}

	nav a {
		display: inline-block;
		padding: 10px 20px;
		text-decoration: none;
		color: var(--fg-color);
		font-weight: bold;
	}
</style>

<nav>
	<a href="/">INICIO</a>
	<a href="/robotic">ROBOTICA</a>
	<a href="/code">PROGRAMACIÓN</a>
	<a href="/electronic">ELECTRONICA</a>
	<a href="/cad">MODELADO 3D</a>
</nav>
 
<slot />
