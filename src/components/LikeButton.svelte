<div class="like-button" on:click|once={ likeCoffee }>
  { likes } Likes
</div>

<script lang="ts">
import { createEventDispatcher } from 'svelte';

export let likes = 0

const dispatch = createEventDispatcher();

const likeCoffee = () => {
  dispatch('like')
}
</script>

<style lang="scss">
.like-button {
  border: 1px solid var(--darkblue-1);
  background-color: var(--label-bg-1);
  font-weight: 300;
  font-size: 1rem;
  padding: calc($baseSizeStep / 2);
  border-radius: calc($baseSizeStep / 2);
  margin: calc($baseSizeStep / 2);
  cursor: pointer;
}
</style>
