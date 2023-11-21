<script lang="ts">
	import '$lib/assets/vendor/css/dropzone.min.css';
	import Editor from '$lib/components/tinymce-svelte/src/main';

	let title: string;
	let content: string;

	let files = {
		accepted: [],
		rejected: []
	};

	function handleFilesSelect(e) {
		const { acceptedFiles, fileRejections } = e.detail;
		files.accepted = [...files.accepted, ...acceptedFiles];
		files.rejected = [...files.rejected, ...fileRejections];
	}
</script>

<div class="content py-3 px-3 px-lg-6 d-flex flex-column-fluid">
	<div class="container-fluid px-0">
		<div class="row">
			<form>
				<h1>게시판 글쓰기</h1>
				<div class="form-floating mb-3">
					<input type="text" class="form-control" id="floatingInput" />
					<label for="floatingInput">제목</label>
				</div>
				<Editor
					cssClass="bg-black"
					apiKey="kudiltnf8y15o77xqowpy2fp0cuel4q66blzl4byrnzf5bgu"
					bind:value={content}
				/>
				<ol>
					{#each files.accepted as item}
						<li>{item.name}</li>
					{/each}
				</ol>
				<button class="btn btn-primary" type="submit">글쓰기</button>
			</form>
		</div>
	</div>
</div>
