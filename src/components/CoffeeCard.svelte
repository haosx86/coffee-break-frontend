<div class="card">
  <div class="card__image-container">
    <span class="card__intensifier">{ intensifier }</span>
  </div>
  <Image alt={ blendName } src={ imageURL } />
  <h3 class="card__origin">{ origin }</h3>
  <h2 class="card__blend-name">{ blendName }</h2>
  <h3 class="card__variety">{ variety }</h3>

  <TagsList bind:tags={ tags } />
</div>

<script lang="ts">
import TagsList from "./TagsList.svelte";
import Image from './Image.svelte'

export let origin = ''
export let blendName = ''
export let variety = ''
export let intensifier = ''
export let imageURL = ''
export let tags: string[] = []
</script>
