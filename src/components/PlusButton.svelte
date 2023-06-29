<div class="plus-button" on:click={() => dispatch('click')} role="button">+</div>

<script lang="ts">
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();
</script>

<style lang="scss">
$buttonSize: 96px;

.plus-button {
  font-size: calc($buttonSize / 2);
  font-weight: 500;
  width: $buttonSize;
  height: $buttonSize;
  border-radius: calc($buttonSize / 2);
  background-color: var(--orange-1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
