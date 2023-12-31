<script context="module">
	var _a;
	const uuid = (prefix) => {
		return prefix + '_' + Math.floor(Math.random() * 1000000000) + String(Date.now());
	};
	const createScriptLoader = () => {
		let state = {
			listeners: [],
			scriptId: uuid('tiny-script'),
			scriptLoaded: false,
			injected: false
		};
		const injectScript = (scriptId, doc, url, cb) => {
			state.injected = true;
			const script = doc.createElement('script');
			script.referrerPolicy = 'origin';
			script.type = 'application/javascript';
			script.src = url;
			script.onload = () => {
				cb();
			};
			if (doc.head) doc.head.appendChild(script);
		};
		const load = (doc, url, callback) => {
			if (state.scriptLoaded) {
				callback();
			} else {
				state.listeners.push(callback);
				// check we can access doc
				if (!state.injected) {
					injectScript(state.scriptId, doc, url, () => {
						state.listeners.forEach((fn) => fn());
						state.scriptLoaded = true;
					});
				}
			}
		};
		return {
			load
		};
	};
	let scriptLoader = createScriptLoader();
</script>

<script>
	var _a;
	import { onMount, createEventDispatcher, onDestroy } from 'svelte';
	import { bindHandlers } from './Utils';
	export let id = uuid('tinymce-svelte'); // default values
	export let inline = undefined;
	export let disabled = false;
	export let apiKey = 'no-api-key';
	export let channel = '6';
	export let scriptSrc = undefined;
	export let conf = {};
	export let modelEvents = 'change input undo redo';
	export let value = '';
	export let text = '';
	export let cssClass = 'tinymce-wrapper';
	let container;
	let element;
	let editorRef;
	let lastVal = value;
	let disablindCache = disabled;
	const dispatch = createEventDispatcher();
	$: {
		if (editorRef && lastVal !== value) {
			editorRef.setContent(value);
			text = editorRef.getContent({ format: 'text' });
		}
		if (editorRef && disabled !== disablindCache) {
			disablindCache = disabled;
			if (
				typeof ((_a = editorRef.mode) === null || _a === void 0 ? void 0 : _a.set) === 'function'
			) {
				editorRef.mode.set(disabled ? 'readonly' : 'design');
			} else {
				editorRef.setMode(disabled ? 'readonly' : 'design');
			}
		}
	}
	const getTinymce = () => {
		const getSink = () => {
			return typeof window !== 'undefined' ? window : global;
		};
		const sink = getSink();
		return sink && sink.tinymce ? sink.tinymce : null;
	};
	const init = () => {
		//
		const finalInit = Object.assign(Object.assign({}, conf), {
			target: element,
			inline: inline !== undefined ? inline : conf.inline !== undefined ? conf.inline : false,
			readonly: disabled,
			setup: (editor) => {
				editorRef = editor;
				editor.on('init', () => {
					editor.setContent(value);
					// bind model events
					editor.on(modelEvents, () => {
						lastVal = editor.getContent();
						if (lastVal !== value) {
							value = lastVal;
							text = editor.getContent({ format: 'text' });
						}
					});
				});
				bindHandlers(editor, dispatch);
				if (typeof conf.setup === 'function') {
					conf.setup(editor);
				}
			}
		});
		element.style.visibility = '';
		getTinymce().init(finalInit);
	};
	onMount(() => {
		if (getTinymce() !== null) {
			init();
		} else {
			const script = scriptSrc
				? scriptSrc
				: `https://cdn.tiny.cloud/1/${apiKey}/tinymce/${channel}/tinymce.min.js`;
			scriptLoader.load(container.ownerDocument, script, () => {
				init();
			});
		}
	});
	onDestroy(() => {
		var _a;
		if (editorRef) {
			(_a = getTinymce()) === null || _a === void 0 ? void 0 : _a.remove(editorRef);
		}
	});
</script>

<div bind:this={container} class={cssClass}>
	{#if inline}
		<div {id} bind:this={element} />
	{:else}
		<textarea {id} bind:this={element} style="visibility:hidden" />
	{/if}
</div>
