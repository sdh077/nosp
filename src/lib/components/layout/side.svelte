<script lang="ts">
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	import { clickOutside } from '$lib/utils/clickOutside';
	import { title } from '$lib/components/store';
	let ow: number;
	export let showSideBar = false;
	const dispatch = createEventDispatcher();

	export let navs = [];
</script>

<svelte:window bind:outerWidth={ow} />
<div class={showSideBar ? 'page-sidebar-in z-fixed' : ''}>
	<aside
		class="page-sidebar"
		use:clickOutside={() => {
			if (showSideBar) {
				dispatch('close');
				showSideBar = !showSideBar;
			}
		}}
	>
		<div class="h-100 flex-column d-flex justify-content-start">
			<!--Aside-logo-->
			<div
				class="aside-logo d-flex align-items-center flex-shrink-0 justify-content-start px-5 position-relative"
			>
				<a href="/" class="d-block">
					<div class="d-flex align-items-center flex-no-wrap text-truncate">
						<span class="sidebar-text">
							<!--Sidebar-text-->
							<span class="sidebar-text text-truncate fs-3 fw-bold">
								RushRumble<i class="fa-solid fa-circle-dot" />
							</span>
						</span>
					</div>
				</a>
			</div>
			<!--Sidebar-Menu-->
			<div class="aside-menu px-3 my-auto" data-simplebar>
				<nav class="flex-grow-1 h-100" id="page-navbar">
					<ul class="nav flex-column collapse-group collapse d-flex">
						<li class="nav-item sidebar-title text-truncate opacity-50 small">
							<i class="bi bi-three-dots" />
							<span>2024</span>
						</li>
						{#each navs.filter((nav) => nav.year === 2024 && nav.useYn) as nav, index}
							<li class="nav-item">
								<a
									href="/league/{nav.leagueId}"
									class="nav-link d-flex align-items-center text-truncate"
								>
									<span class="sidebar-text p-2">{nav.title}</span>
								</a>
							</li>
						{/each}
					</ul>
					<ul class="nav flex-column collapse-group collapse d-flex">
						<li class="nav-item sidebar-title text-truncate opacity-50 small">
							<i class="bi bi-three-dots" />
							<span>2023</span>
						</li>
						{#each navs.filter((nav) => nav.year === 2023 && nav.useYn) as nav, index}
							<li class="nav-item">
								<a
									href="/league/{nav.leagueId}"
									class="nav-link d-flex align-items-center text-truncate"
								>
									<span class="sidebar-text p-2">{nav.title}</span>
								</a>
							</li>
						{/each}
					</ul>
					<iframe
						src="https://ads-partners.coupang.com/widgets.html?id=779275&template=carousel&trackingCode=AF4926100&subId=&width=220&height=300&tsource="
						width="220"
						height="300"
						frameborder="0"
						scrolling="no"
						referrerpolicy="unsafe-url"
					/>
				</nav>
			</div>
		</div>
	</aside>
</div>
<div class="sidebar-close d-lg-none">
	<a href="#" on:click={() => dispatch('close')} />
</div>
