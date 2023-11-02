<script>
	import { onMount } from 'svelte';
	import { Calendar } from 'fullcalendar';
	import { goto } from '$app/navigation';
	export let matches;
	let calendarEl;
	onMount(async () => {
		let calendar = new Calendar(calendarEl, {
			headerToolbar: {},
			// themeSystem: 'bootstrap',
			bootstrapFontAwesome: false,
			buttonText: {
				list: 'List',
				prev: '❮',
				next: '❯'
			},
			dayMaxEvents: true, // allow "more" link when too many events
			editable: false,
			droppable: false,
			contentHeight: 'auto',
			initialView: 'dayGridMonth',
			selectable: true,
			events: matches.map((match) => ({
				id: match.matchId,
				title: match.title,
				start: match.playDate.slice(0, 10),
				end: match.playDate.slice(0, 10),
				className: 'bg-white'
			})),
			eventClick: (arg) => goto(`/match/${arg.event.id}`)
		});
		calendar.render();
	});
</script>

<div class="w-full max-w-full px-3 shrink-0 xl:flex-0 xl:w-9/12">
	<div
		class="relative flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border"
	>
		<div class="flex-auto p-4">
			<div data-toggle="calendar" bind:this={calendarEl} />
		</div>
	</div>
</div>
