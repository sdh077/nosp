<script>
	import { onMount } from 'svelte';
	import { title } from '$lib/components/store';
	import Youtube from '$lib/svelte-youtube-embed';

	export let data;
	let match = data.match;
	let games = data.games ?? [];
	let game = games[0] ?? {};
	onMount(() => {
		title.set(match.team);
		return () => title.set('');
	});
</script>

<div class="content d-flex flex-column-fluid">
	<div class="container-fluid px-5">
		<div class="pt-md-3">
			하이라이트
			<ul class="nav mb-3 nav-tabs nav-overflow">
				{#each games
					.filter((game) => game.type === 1)
					.sort((a, b) => (a.order < b.order ? -1 : 1)) as item, index}
					<li class="nav-item">
						<button
							on:click={() => (game = item)}
							class="nav-link {game.game_id === item.game_id ? 'active' : ''} "
						>
							{item.title}
						</button>
					</li>
				{/each}
			</ul>
			풀영상
			<ul class="nav mb-3 nav-tabs nav-overflow">
				{#each games
					.filter((game) => game.type === 2)
					.sort((a, b) => (a.order < b.order ? -1 : 1)) as item, index}
					<li class="nav-item">
						<button
							on:click={() => (game = item)}
							class="nav-link {game.game_id === item.game_id ? 'active' : ''} "
						>
							{item.title}
						</button>
					</li>
				{/each}
			</ul>

			<div class="row w-100">
				<div class="col-lg-12">
					<div class="card">
						<div class="card-body">
							{#if game.type === 1}
								<Youtube id={game.link} altThumb={true}>
									<div slot="thumbnail">스포방지</div>
								</Youtube>
							{:else if game.link}
								<iframe
									id="afreecatv_player_video"
									title={game.title}
									width="640"
									height="360"
									src="{game.link}/embed?autoPlay=true&mutePlay=true"
									frameborder="0"
									allowfullscreen={true}
									allow="clipboard-write"
								/>
							{/if}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
