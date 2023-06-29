<div class="card">
  {#if isLoading}
    <Skeleton widthRatio={ 32 } heightRatio= { 32 } />
    <Skeleton widthRatio={ 32 } heightRatio={ 2.5 } />
    <Skeleton widthRatio={ 32 } heightRatio={ 2.5 } />
    <Skeleton widthRatio={ 32 } heightRatio={ 2.5 } />
    <Skeleton widthRatio={ 32 } heightRatio={ 6 } />
  {:else}
    <div class="card__image-container">
      <div class="card__intensifier">{ intensifier }</div>
      <CoffeeImage alt={ blendName } src={ imageURL } />
    </div>
    <h3 class="card__origin">{ origin }</h3>
    <h2 class="card__blend-name">{ blendName }</h2>
    <h3 class="card__variety">{ variety }</h3>

    <TagsList tags={ notes } />

    <LikeButton likes={ likes } on:like={ onCoffeeLike } />
  {/if}
</div>

<script lang="ts">
import { createEventDispatcher } from 'svelte';
import TagsList from "./TagsList.svelte";
import CoffeeImage from './CoffeeImage.svelte'
import Skeleton from "./Skeleton.svelte";
import LikeButton from "./LikeButton.svelte";

export let origin = ''
export let blendName = ''
export let variety = ''
export let intensifier = ''
export let imageURL = ''
export let notes: string[] = []
export let isLoading = false
export let likes = 0
export let _id = ''

const dispatch = createEventDispatcher<{ like: string }>();

const onCoffeeLike = () => {
  dispatch('like', _id)
}
</script>

<style lang="scss">
.card {
  width: $cardBaseSize + $baseSizeStep*2;
  min-height: $cardBaseSize;
  background-color: var(--darkwhite-1);
  padding: $baseSizeStep;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: calc($baseSizeStep / 4);

  max-width: calc(100vw - $baseSizeStep*4);

  margin: $baseSizeStep 0;


  &__image-container {
    position: relative;
  }

  &__origin {
    margin: calc($baseSizeStep / 2) 0;
    color: var(--text-color-secondary);
    font-weight: 400;
    font-size: 1.15rem;
  }

  &__blend-name {
    margin: calc($baseSizeStep / 2) 0;
    font-size: 1.5rem;
    font-weight: 600;
  }

  &__intensifier {
    padding: $baseSizeStep;
    position: absolute;
    top: $baseSizeStep + $baseSizeStep;
    right: $baseSizeStep + $baseSizeStep;
    color: var(--grey-1);
    font-weight: 500;
    font-size: 1.5rem;
    background-color: var(--label-bg-1);
    border-radius: $baseSizeStep;
  }
}
</style>
