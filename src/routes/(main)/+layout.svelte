<script>
	import Footer from '$lib/components/layout/footer.svelte';
	import Side from '$lib/components/layout/side.svelte';
	import { title } from '$lib/components/store';

	let showSideBar = false;
	const closeSide = () => {
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
			<Side on:close={closeSide} {showSideBar} navs={data.leagues ?? []} />
			<main class="page-content d-flex flex-column flex-row-fluid">
				<header class="navbar mb-3 px-3 align-items-center page-header navbar-expand navbar-light">
					<div>
						<ul class="navbar-nav d-flex align-items-center h-100">
							<li
								class="nav-item dropdown d-flex align-items-center justify-content-center flex-column h-100"
							>
								{headTitle}
							</li>
						</ul>
					</div>
					<ul class="navbar-nav ms-auto d-flex align-items-center h-100">
						<li
							class="nav-item dropdown ms-3 d-flex d-lg-none align-items-center justify-content-center flex-column h-100"
						>
							<button
								on:click={closeSide}
								class="btn nav-link sidebar-trigger-lg-down size-40 p-0 d-flex align-items-center justify-content-center"
							>
								<span class="material-symbols-rounded align-middle">menu</span>
							</button>
						</li>
					</ul>
				</header>
				<slot />
				<Footer />
			</main>
		</div>
	</div>
</body>
