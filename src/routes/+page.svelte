<div class="container">
  {#each coffeeRecords as coffeeRecord}
    <CoffeeCard {...coffeeRecord} />
  {/each}

  {#if isLoading}
    <CoffeeCard isLoading={ true } />
  {:else}
    <PlusButton on:click={ onPlusClick } />
  {/if}
</div>

<script lang="ts">
import { onMount } from "svelte";
import CoffeeCard from "../components/CoffeeCard.svelte";
import PlusButton from "../components/PlusButton.svelte";
import type { Coffee } from '../types/Coffee'
import { loadFirstCoffee } from "../service/loadFirstCoffee";
import { getNotificationsContext } from 'svelte-notifications';
import { loadNextCoffee } from "../service/loadNextCoffee";
import { scrollEnd } from "../utils/scrollEnd";

const { addNotification } = getNotificationsContext();

let coffeeRecords: Coffee[] = []
let isLoading = true

const showError = (message: string) => {
  addNotification({
    text: `Error loading coffee: ${message}`,
    position: 'top-center'
  })
}

const onPlusClick = async () => {
  const lastCoffeeID = coffeeRecords[coffeeRecords.length - 1]._id

  isLoading = true

  requestAnimationFrame(() => scrollEnd())

  // Dummy delay to enjoy Card skeleton
  await new Promise((resolve) => setTimeout(resolve, 1500))

  try {
    if (lastCoffeeID) {
      coffeeRecords = [...coffeeRecords, await loadNextCoffee(lastCoffeeID)]
    } else {
      coffeeRecords = [await loadFirstCoffee()]
    }
  } catch (error) {
    showError((error as Error).message)
  } finally {
    isLoading = false
  }
}

onMount(async () => {
  isLoading = true

  requestAnimationFrame(() => scrollEnd())

  try {
    coffeeRecords = [await loadFirstCoffee()]
    console.log(coffeeRecords)
  } catch (error) {
    showError((error as Error).message)
  } finally {
    isLoading = false
  }
})
</script>

<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
