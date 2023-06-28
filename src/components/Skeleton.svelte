<div
  class="skeleton"
  style="
    width: {width}px;
    height: {height}px;
  "
></div>

<script lang="ts">
export let width = 72;
export let height = 72;
</script>

<style lang="scss">
.skeleton {
  background-color: var(--loading-grey);
  background: linear-gradient(
    100deg,
    rgba(255, 255, 255, 0) 40%,
    rgba(255, 255, 255, .5) 50%,
    rgba(255, 255, 255, 0) 60%
  ) var(--loading-grey);
  background-size: 200% 100%;
  background-position-x: 180%;
  animation: 1s loading ease-in-out infinite;
}
</style>
