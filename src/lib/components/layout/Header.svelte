<script>
	import { PUBLIC_API_URL } from '$env/static/public';
	import { title } from '$lib/components/store';
	import naver from 'naver-id-login';

	let showSideBar = false;
	const closeSide = () => {
		showSideBar = !showSideBar;
	};
	let headTitle = '';

	title.subscribe((value) => {
		headTitle = value;
	});
	const loginNaver = async () => {
		const clientId = 'bRFlrYzGADivQSF_uTpM';
		const callbackUrl = 'https://www.rushrumble.com/nlogin';
		const auth = await naver.login(clientId, callbackUrl);
		console.log('auth', auth);
	};
</script>

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
	<div>
		<button class="btn btn-secondary active" on:click={loginNaver}>Naver Login</button>
	</div>
</header>
