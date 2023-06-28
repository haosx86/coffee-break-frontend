<ul class="tags-list">
  {#each tagsWithColors as tag}
    <li
      class="tags-list__tag"
      style="
        background-color: #{tag.color};
      "
    >{ tag.label }</li>
  {/each}
</ul>

<script lang="ts">
export let tags: string[] = [];

import { strHash } from "../utils/strHash";

type TagDescription = {
  label: string;
  color: string;
}

const tagsColors = [
  '99ff99',
  'ff9999',
  'ffcce5',
  'e0e0e0',
  'ffcccc',
  '66cc00',
  'ffff99',
  'ccccff',
]

let tagsWithColors: TagDescription[] = []

$: {
  tagsWithColors = tags.map((label) => ({
    label,
    color: tagsColors[strHash(label) % tagsColors.length]
  }))
}
</script>

<style lang="scss">
  .tags-list {
    list-style-type: none;
    display: flex;
    flex-direction: row;

    // white-space: nowrap;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
  }
</style>
