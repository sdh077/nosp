<script lang="ts">
	import { goto } from '$app/navigation';
	import moment from 'moment-timezone';
	export let data;
	const imgs = {
		'4489e30a-f493-49f0-9ab7-2c31fe4703db': '/imgs/lolcup1.png',
		'47b5300c-f2b9-4287-b4e2-bdfe55aec085': '/imgs/lolcup2.png',
		'e03dee23-9ab1-4923-bbcf-8b2a87155169': '/imgs/lolcup3.png'
	};
</script>

{#if imgs[data.id]}
	<div class="pt-3 px-3 px-lg-6">
		<img src={imgs[data.id]} class="w-100" alt="" />
	</div>
{/if}
{#if data.matches.length}
	<div class="content pt-3 px-3 px-lg-6 d-flex flex-column-fluid">
		<div class="container-fluid px-0">
			<div class="row">
				<div class="col-12">
					<div class="card mb-3 mb-lg-5 card-body" id="invoicePrint">
						<div class="row">
							<div class="col-12">
								<div class="table-responsive mb-4">
									<table class="table mb-4">
										<tbody>
											{#each data.matches as match}
												<tr class="align-middle">
													<td class="text-reset">
														{moment.tz(match.playDate, 'Asia/Seoul').format('YYYY-MM-DD')}
													</td>
													<td>
														<h5 class="mb-1">{match.title}</h5>
													</td>
													<td class="text-reset" on:click={() => goto(`/match/${match.matchId}`)}>
														<button class="btn btn-primary">입장</button>
													</td>
												</tr>
											{/each}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
