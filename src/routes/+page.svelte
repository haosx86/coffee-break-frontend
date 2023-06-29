<div class="container">
  <h1 class="app-name">Coffee Break App</h1>
  {#each coffeeRecords as coffeeRecord}
    <CoffeeCard {...coffeeRecord} on:like={ onCoffeLike } />
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
import { likeCoffee } from "../service/likeCoffee";

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
    resetCardRequestInterval()
  }
}

const onCoffeLike = async (event: CustomEvent<string>) => {
  const id = event.detail

  try {
    const updatedCoffeeRecord = await likeCoffee(id)

    if (!updatedCoffeeRecord) throw Error('Cannot like this coffee')

    coffeeRecords = coffeeRecords.map((coffeeRecord) => {
      if (coffeeRecord._id === id) {
        return updatedCoffeeRecord
      }
      return coffeeRecord
    })
  } catch (error) {
    showError((error as Error).message)
  } finally {
    resetCardRequestInterval()
  }
}

onMount(async () => {
  isLoading = true

  requestAnimationFrame(() => scrollEnd())

  try {
    coffeeRecords = [await loadFirstCoffee()]
  } catch (error) {
    showError((error as Error).message)
  } finally {
    isLoading = false
    resetCardRequestInterval()
  }
})

let autoCardTimer: ReturnType<typeof setInterval> | null = null

const CARD_AUTOREFRESH_INTERVAL = 30000

const resetCardRequestInterval = () => {
  if (autoCardTimer) {
    clearInterval(autoCardTimer)
  }

  autoCardTimer = setInterval(() => {
    if (isLoading) return

    onPlusClick()
  }, CARD_AUTOREFRESH_INTERVAL)
}

</script>

<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.app-name {
  color: var(--grey-1);
}
</style>
