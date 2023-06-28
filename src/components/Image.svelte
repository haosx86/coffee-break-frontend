{#if isLoaded}
	<img {src} width={ size } height="auto" alt={ alt } />
{:else if isError}
	<img width={ size } height="auto" src={ ImgNotFound } alt="Coffee Not Found" />
{:else if isLoading}
	<img src={ ImgLoading } width={ size } height="auto" alt="Loading" />
{/if}

<script lang="ts">
	import { onMount } from 'svelte'
  import ImgNotFound from '../assets/img-not-found.png'
  import ImgLoading from '../assets/coffee-loading.gif'
	export let src = '';
  export let alt = ''
  export let size = 500

	let isLoaded = false;
	let isError = false;
	let isLoading = false;

	onMount(() => {
			const img = new Image();
			img.src = src;
			isLoading = true;

			img.onload = () => {
        isLoading = false;
        isLoaded = true;
			};
			img.onerror = () => {
        isLoading = false;
        isError = true;
			};
	})
</script>
