{#if isLoaded}
  <img {src} class="coffee-image" alt={ alt } />
{:else if isError}
  <img class="coffee-image" src={ ImgNotFound } alt="Coffee Not Found" />
{:else if isLoading}
  <img src={ ImgLoading } class="coffee-image" alt="Loading" />
{/if}

<script lang="ts">
	import { onMount } from 'svelte'
  import ImgNotFound from '../assets/img-not-found.png'
  import ImgLoading from '../assets/coffee-loading.gif'
	export let src = '';
  export let alt = ''

	let isLoaded = false;
	let isError = false;
	let isLoading = false;

	onMount(() => {
			const img = new Image();
			img.src = src;
			isLoading = true;

			img.onload = async () => {
        // Images are usually loaded too fast
        // Adding dummy delay to enjoy loader gif
        await new Promise((resolve) => setTimeout(resolve, 2000))
        isLoading = false;
        isLoaded = true;
			};
			img.onerror = () => {
        isLoading = false;
        isError = true;
			};
	})
</script>

<style lang="scss">
.coffee-image {
  width: $cardBaseSize;
  height: $cardBaseSize;

  max-width: calc(100vw - $baseSizeStep*4);
  max-height: calc(100vw - $baseSizeStep*4);
}
</style>
