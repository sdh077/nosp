<script>
	import Fullcalendar from '$lib/components/layout/Fullcalendar.svelte';
	export let data;
	$: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />
{#if innerWidth < 1032}
	<div class="p-4 space-y-4">
		<div class="border rounded-lg p-4 space-y-2">
			<h2 class="text-2xl font-semibold">Game 1</h2>
			<p class="text-gray-600 dark:text-gray-300">This is a brief description for game 1.</p>
			<button
				class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
				>Toggle Spoiler</button
			>
			<div class="border-t pt-2 text-gray-500 dark:text-gray-400">
				<p>This is the spoiler content for game 1.</p>
			</div>
		</div>
		<div class="border rounded-lg p-4 space-y-2">
			<h2 class="text-2xl font-semibold">Game 2</h2>
			<p class="text-gray-600 dark:text-gray-300">This is a brief description for game 2.</p>
			<button
				class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
				>Toggle Spoiler</button
			>
			<div class="border-t pt-2 text-gray-500 dark:text-gray-400">
				<p>This is the spoiler content for game 2.</p>
			</div>
		</div>
		<div class="border rounded-lg p-4 space-y-2">
			<h2 class="text-2xl font-semibold">Game 3</h2>
			<p class="text-gray-600 dark:text-gray-300">This is a brief description for game 3.</p>
			<button
				class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
				>Toggle Spoiler</button
			>
			<div class="border-t pt-2 text-gray-500 dark:text-gray-400">
				<p>This is the spoiler content for game 3.</p>
			</div>
		</div>
	</div>
{:else}
	<Fullcalendar matches={data.matches} />
{/if}
