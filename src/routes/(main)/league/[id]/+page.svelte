<script lang="ts">
	import { goto } from '$app/navigation';
	import moment from 'moment-timezone';
	export let data;
</script>

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
													{moment.tz(match.play_date, 'Asia/Seoul').format('YYYY-MM-DD')}
												</td>
												<td>
													<h5 class="mb-1">{match.title}</h5>
												</td>
												<td class="text-reset">{match.teams}</td>
												<td class="text-reset" on:click={() => goto(`/match/${match.match_id}`)}>
													<button>입장</button>
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
