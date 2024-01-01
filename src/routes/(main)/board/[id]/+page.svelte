<script>
	export let data;
	let board = data.board.data;
</script>

<div class="row">
	<div class="col-12 mb-3 m-lg-2">
		<div class=" h-100">
			<div class="card-header d-flex align-items-center justify-content-between">
				<h5 class="pe-3 mb-0">
					<span class="material-symbols-rounded me-2 align-middle text-primary">
						workspace_premium
					</span> Featured Project
				</h5>
			</div>
			<div class="card-body py-0">
				<div class="row mx-md-0">
					<div class="col-md-7 col-xl-8 py-4">
						<div class="card h-100 rounded-0 border-0 shadow-none">
							<div class="d-flex mb-4">
								<div class="me-3 flex-grow-1 overflow-hidden">
									<h3 class="mb-1 mt-3">{board.title}</h3>
									<p class="mb-0 text-truncate">
										#1 Tool to get started with Web Apps any Kind &amp; size
									</p>
								</div>
								<div class="flex-shrink-0">
									Write. {board.createdDt.slice(0, 10)}
									<!-- <span class="badge rounded-pill bg-success small flex-shrink-0">Active</span> -->
								</div>
							</div>

							<!--Description text-->
							<p class="mb-0">
								{@html board.content}
							</p>
						</div>
					</div>
					<div class="col-md-5 col-xl-4 ps-md-6 border-start-md">
						<div class="card border-0 shadow-none rounded-0 bg-transparent h-100">
							<div class="row flex-column">
								<div class="col-md-12 border-bottom py-md-5 py-3">
									<div class="d-flex justify-content-between align-items-center">
										<div
											class="flex-shrink-0 size-50 bg-danger-subtle text-danger d-flex align-items-center justify-content-center rounded me-4"
										>
											<span class="align-middle material-symbols-rounded fs-3">attach_money</span>
										</div>
										<div class="flex-grow-1">
											<span class="d-block mb-1 text-body-secondary">Budget Spent</span>
											<h4 class="mb-0">9125</h4>
										</div>
									</div>
								</div>
								<div class="col-md-12 border-bottom py-md-5 py-3">
									<div class="d-flex justify-content-between align-items-center">
										<div
											class="flex-shrink-0 size-50 bg-primary-subtle text-primary d-flex align-items-center justify-content-center rounded me-4"
										>
											<span class="align-middle material-symbols-rounded fs-3">schedule_send</span>
										</div>
										<div class="flex-grow-1">
											<span class="d-block mb-1 text-body-secondary">Hours Spent</span>
											<h4 class="mb-0">275</h4>
										</div>
									</div>
								</div>
								<div class="col-md-12 py-3 py-md-5">
									<div class="d-flex justify-content-between align-items-center">
										<div
											class="flex-shrink-0 size-50 bg-success-subtle text-success d-flex align-items-center justify-content-center rounded me-4"
										>
											<span class="material-symbols-rounded fs-3"> stacked_bar_chart </span>
										</div>
										<div class="flex-grow-1">
											<span class="d-block mb-1 text-body-secondary">Progress</span>
											<h4 class="mb-0">84%</h4>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
