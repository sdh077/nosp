<script>
	import Fullcalendar from '$lib/components/layout/Fullcalendar.svelte';
	export let data;
</script>

<Fullcalendar matches={data.matches} />
