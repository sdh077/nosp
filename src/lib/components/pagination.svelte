<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import classnames from 'classnames';

	export let pageTotal = 1;
	export let link = '';

	let pageNo = 1;
	let pages = [
		{ name: 1, href: `${link}?page=${1}` },
		{ name: 2, href: `${link}?page=${2}` },
		{ name: 3, href: `${link}?page=${3}` },
		{ name: 4, href: `${link}?page=${4}` },
		{ name: 5, href: `${link}?page=${5}` }
	];
	$: if ($page.url.searchParams.get('page')) {
		pageNo = Number($page.url.searchParams.get('page')) || 1;
		let pageCount = Math.floor((pageNo - 1) / 5);
		pages = [
			{ name: pageCount * 5 + 1, href: `${link}?page=${pageCount * 5 + 1}` },
			{ name: pageCount * 5 + 2, href: `${link}?page=${pageCount * 5 + 2}` },
			{ name: pageCount * 5 + 3, href: `${link}?page=${pageCount * 5 + 3}` },
			{ name: pageCount * 5 + 4, href: `${link}?page=${pageCount * 5 + 4}` },
			{ name: pageCount * 5 + 5, href: `${link}?page=${pageCount * 5 + 5}` }
		];
	}

	const previous = () => {
		if (pageNo < 1) return;
		move((pageNo - 1).toString());
	};
	const next = () => {
		if (pageNo >= pageTotal) return;
		move((pageNo + 1).toString());
	};
	const move = (pageNo: string) => {
		const queryString = $page.url.search.replace('?', '');
		const hrefParams = new URLSearchParams(queryString);
		hrefParams.set('page', pageNo);
		goto(`${link}?${hrefParams.toString()}`);
	};
</script>

<nav aria-label="Page navigation example" class="d-flex justify-content-end">
	<ul class="pagination mb-0 mb-lg-5">
		<li class={classnames('page-item', pageNo <= 1 ? 'disabled' : '')}>
			<button class="page-link" on:click={previous}>Previous</button>
		</li>
		{#each pages as page}
			{#if page.name <= pageTotal}
				<li class={classnames('page-item', page.name === pageNo ? 'active' : '')}>
					<button
						class={classnames('page-link', page.name === pageNo ? 'active' : '')}
						on:click={() => move(page.name.toString())}>{page.name}</button
					>
				</li>
			{/if}
		{/each}
		<li class={classnames('page-item', pageNo >= pageTotal ? 'disabled' : '')}>
			<button class="page-link" on:click={next}>Next</button>
		</li>
	</ul>
</nav>
