<script>
	import { onMount } from 'svelte';
	import { Calendar } from 'fullcalendar';
	let calendarEl;
	onMount(async () => {
		const currentMonth = ('0' + (new Date().getMonth() + 1)).slice(-2);
		const currentYear = new Date().getFullYear();

		let calendar = new Calendar(calendarEl, {
			headerToolbar: {
				left: 'prev,next today',
				center: 'title',
				right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
			},
			// themeSystem: 'bootstrap',
			bootstrapFontAwesome: false,
			buttonText: {
				today: 'Today',
				month: 'Month',
				week: 'Week',
				day: 'Day',
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
			events: [
				{
					title: 'Call with Dave',
					start: '2023-10-18',
					end: '2023-10-18',
					className: 'bg-gradient-to-tl from-red-600 to-rose-400'
				},

				{
					title: 'Lunch meeting',
					start: '2023-10-21',
					end: '2023-10-22',
					className: 'bg-gradient-to-tl from-red-500 to-yellow-400'
				},

				{
					title: 'All day conference',
					start: '2023-10-29',
					end: '2023-10-29',
					className: 'bg-gradient-to-tl from-green-600 to-lime-400'
				},

				{
					title: 'Meeting with Mary',
					start: '2020-12-01',
					end: '2020-12-01',
					className: 'bg-gradient-to-tl from-blue-600 to-cyan-400'
				},

				{
					title: 'Winter Hackaton',
					start: '2020-12-03',
					end: '2020-12-03',
					className: 'bg-gradient-to-tl from-red-600 to-rose-400'
				},

				{
					title: 'Digital event',
					start: '2020-12-07',
					end: '2020-12-09',
					className: 'bg-gradient-to-tl from-red-500 to-yellow-400'
				},

				{
					title: 'Marketing event',
					start: '2020-12-10',
					end: '2020-12-10',
					className: 'bg-gradient-to-tl from-purple-700 to-pink-500'
				},

				{
					title: 'Dinner with Family',
					start: '2020-12-19',
					end: '2020-12-19',
					className: 'bg-gradient-to-tl from-red-600 to-rose-400'
				},

				{
					title: 'Black Friday',
					start: '2020-12-23',
					end: '2020-12-23',
					className: 'bg-gradient-to-tl from-blue-600 to-cyan-400'
				},

				{
					title: 'Cyber Week',
					start: '2020-12-02',
					end: '2020-12-02',
					className: 'bg-gradient-to-tl from-red-500 to-yellow-400'
				}
			]
		});
		calendar.render();
	});
</script>

<div class="w-full max-w-full px-3 shrink-0 xl:flex-0 xl:w-9/12">
	<div
		class="relative flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border"
	>
		<!-- <div class="flex-auto p-4">
			<div data-toggle="calendar" id="calendar" />
		</div> -->
		<div class="flex-auto p-4">
			<div data-toggle="calendar" bind:this={calendarEl} />
		</div>
	</div>
</div>
