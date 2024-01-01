<script>
	import Pagination from '$lib/components/pagination.svelte';
	export let data;
	export let link = '';
</script>

<div class="content py-3 px-3 px-lg-6 d-flex flex-column-fluid">
	<div class="container-fluid px-0">
		<div class="row">
			<div class="col-md-10 mx-auto">
				<div class="sticky-top z-3" style="top:68px">
					<!--Search form-->
					<div class="pb-5">
						<form class="position-relative">
							<!--Icon-->
							<span
								class="d-flex size-20 rounded-circle ms-3 align-items-center justify-content-center position-absolute start-0 top-50 translate-middle-y"
							>
								<i class="material-symbols-rounded align-middle opacity-50">search</i>
							</span>
							<!--Input-->
							<input
								type="text"
								class="form-control shadow py-4 form-control-lg ps-9"
								placeholder="Analytics"
							/>
						</form>
					</div>
				</div>

				<div class="list-group mb-4">
					<div class="list-group-item p-4">
						<small class="text-body-secondary">About 54 results for analytics </small>
					</div>
					{#each data.boards.data.content as board}
						<!--Search result item-->
						<a href={`${link}/${board.boardId}`} class="list-group-item p-4 list-group-item-action">
							{#if board.imgUrl}
								<img src={board.imgUrl} class="flex-shrink-0 rounded-3 width-110" alt="" />
							{/if}
							<div class="d-flex align-items-center">
								<div class="ps-3 flex-grow-1 overflow-hidden">
									<h5 class="mb-1 text-truncate">
										{board.title}
									</h5>
									<p class="mb-0 text-truncate opacity-75">
										{@html board.content.slice(0, 20)}
									</p>
									<p class="mb-0 text-truncate opacity-75">
										{board.createdBy}
									</p>
								</div>
							</div>
						</a>
					{/each}
				</div>

				<!--Pagination-->
				<Pagination pageTotal={data.boards.data.totalPages} {link} />
			</div>
		</div>
	</div>
</div>
