<script>
	export let width = 200;
	export let height = 200;
</script>

<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<clipPath id="shape">
			<path
				fill="none"
				d="M50.8,-35.4C65.4,-22.3,76.3,-1.2,71.3,14.5C66.3,30.1,45.3,40.3,26.3,46.2C7.3,52.1,-9.7,53.7,-22.2,47.3C-34.7,40.8,-42.8,26.2,-43.6,12.8C-44.4,-0.6,-37.9,-12.8,-29.4,-24.5C-20.9,-36.1,-10.5,-47.2,3.8,-50.3C18.1,-53.4,36.3,-48.4,50.8,-35.4Z"
				transform="translate(100 100)"
			/>
		</clipPath>
	</defs>
	<image
		{width}
		{height}
		clip-path="url(#shape)"
		xlink:href="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822_960_720.jpg"
	/>
</svg>
