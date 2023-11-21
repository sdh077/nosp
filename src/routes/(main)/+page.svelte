<script>
	import Fullcalendar from '$lib/components/layout/Fullcalendar.svelte';
	export let data;
	$: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />
{#if innerWidth < 1032}
	<div class="p-4 space-y-4">
		{#each data.matches.sort((m1, m2) => (m1.playDate < m2.playDate ? 1 : -1)).slice(0, 5) as match}
			<div class="border rounded-lg p-4 space-y-2">
				<h2 class="text-2xl font-semibold">{match.title}</h2>
				<p class="text-gray-600 dark:text-gray-300">{match.playDate.slice(0, 10)}</p>
				<a href="/match/{match.matchId}">
					<button
						class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
						>경기 보러가기</button
					>
				</a>
			</div>
		{/each}
	</div>
{:else}
	<Fullcalendar matches={data.matches} />
{/if}
