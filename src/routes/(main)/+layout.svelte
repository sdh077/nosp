<script>
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/footer.svelte';
	import Side from '$lib/components/layout/side.svelte';
	import { title } from '$lib/components/store';

	let showSideBar = false;
	const toggleide = () => {
		showSideBar = !showSideBar;
	};
	export let data;
	let headTitle = '';

	title.subscribe((value) => {
		headTitle = value;
	});
</script>

<body>
	<div class="d-flex flex-column flex-root">
		<div class="page d-flex flex-row flex-column-fluid">
			<Side on:close={toggleide} {showSideBar} navs={data.leagues ?? []} />
			<main class="page-content d-flex flex-column flex-row-fluid">
				<Header on:toggle={toggleide} {showSideBar} />
				<slot />
				<Footer />
			</main>
		</div>
	</div>
</body>
