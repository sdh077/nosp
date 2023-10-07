<script>
	import Youtube from '$lib/svelte-youtube-embed';

	export let data;
	let match = data.match;
	let games = data.games ?? [];
	let game = games.length ? games[0] : {};
</script>

<header
	class="navbar mb-3 px-3 px-lg-6 px-5 px-lg-8 align-items-center page-header navbar-expand navbar-light"
>
	<ul class="navbar-nav ms-auto d-flex align-items-center h-100">
		<li
			class="nav-item dropdown ms-3 d-flex align-items-center justify-content-center flex-column h-100"
		>
			{match.title}
		</li>
	</ul>
</header>
<div class="content d-flex flex-column-fluid">
	<div class="container-fluid px-5">
		<div class="pt-md-3">
			하이라이트
			<ul class="nav mb-3 nav-tabs nav-overflow">
				{#each games
					.filter((game) => game.type === '1')
					.sort((a, b) => (a.order < b.order ? -1 : 1)) as item, index}
					<li class="nav-item">
						<button
							on:click={() => (game = item)}
							class="nav-link {game.game_id === item.game_id ? 'active' : ''} "
						>
							{item.order}경기
						</button>
					</li>
				{/each}
			</ul>
			풀영상
			<ul class="nav mb-3 nav-tabs nav-overflow">
				{#each games
					.filter((game) => game.type === '2')
					.sort((a, b) => (a.order < b.order ? -1 : 1)) as item, index}
					<li class="nav-item">
						<button
							on:click={() => (game = item)}
							class="nav-link {game.game_id === item.game_id ? 'active' : ''} "
						>
							{item.order}경기
						</button>
					</li>
				{/each}
			</ul>

			<div class="row w-100">
				<div class="col-lg-12">
					<div class="card">
						<div class="card-body">
							{#if game.type === '1'}
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
