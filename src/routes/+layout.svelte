<script>
  import "../app.postcss";
  import "../app.scss";

  import Notifications from 'svelte-notifications';
</script>

<Notifications>
  <slot />
</Notifications>
