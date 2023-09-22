<script>
	import Footer from '$lib/components/layout/footer.svelte';
	import Side from '$lib/components/layout/side.svelte';
	let showSideBar = false;
	const closeSide = () => {
		showSideBar = !showSideBar;
	};
	export let data;
</script>

<body>
	<div class="d-flex flex-column flex-root">
		<div class="page d-flex flex-row flex-column-fluid">
			<Side on:close={closeSide} {showSideBar} navs={data.leagues} />
			<main class="page-content d-flex flex-column flex-row-fluid">
				<slot />
				<Footer />
			</main>
		</div>
	</div>
</body>
