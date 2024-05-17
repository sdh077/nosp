<script>
	import { PUBLIC_NCLIENT_ID, PUBLIC_NCLIENT_CALLBACK, PUBLIC_API_URL } from '$env/static/public';
	import { title } from '$lib/components/store';
	import naver from 'naver-id-login';
	import Cookies from 'js-cookie';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let showSideBar;
	const RRToken = Cookies.get('RRToken');
	const toggleSide = () => {
		dispatch('toggle');
	};
	let headTitle = '';

	title.subscribe((value) => {
		headTitle = value;
	});

	const loginNaver = async () => {
		const clientId = PUBLIC_NCLIENT_ID;
		const callbackUrl = PUBLIC_NCLIENT_CALLBACK;
		const auth = await naver.login(clientId, callbackUrl);
		const mainAuth = await fetch(`/api/auth/`, {
			headers: {
				'Content-Type': 'application/json',
				'X-Auth-Token': auth.access_token
			}
		})
			.then(async (data) => await data.json())
			.then((data) => data.data)
			.catch((e) => console.log('e1', e));
		Cookies.set('RRToken', mainAuth.naverToken);
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
				on:click={toggleSide}
				class="btn nav-link sidebar-trigger-lg-down size-40 p-0 d-flex align-items-center justify-content-center"
			>
				<span class="material-symbols-rounded align-middle">menu</span>
			</button>
		</li>
	</ul>
	<div>
		{#if !RRToken}
			<button class="btn btn-secondary active" on:click={loginNaver}>Naver Login</button>
		{:else}로그인{/if}
	</div>
</header>
