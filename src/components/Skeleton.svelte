<div
  class="skeleton"
  style="
    width: calc(var(--base-size-step) * { widthRatio });
    height: calc(var(--base-size-step) * { heightRatio });
  "
></div>

<script lang="ts">
export let widthRatio = 4;
export let heightRatio = 4;
</script>

<style lang="scss">
.skeleton {
  background: #bbb;
  background: linear-gradient(110deg, #bcbcbc 8%, #f5f5f5 18%, #bcbcbc 33%);
  border-radius: 5px;
  background-size: 300% 300%;
  animation: 3s shine linear infinite;
  margin: var(--base-size-step) 0;
}

@keyframes shine {
  to {
    background-position-x: -300%;
  }
}
</style>
