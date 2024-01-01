<script>
	import List from '$lib/components/List.svelte';

	export let data;
</script>

<List {data} link={'/mypage/board'} />
