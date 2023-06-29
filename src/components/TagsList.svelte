<ul class="tags-list">
  {#each tagsWithColorsDoubled as tag}
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
  'e5a0ff',
  '66cc00',
  'ffff99',
  'ccccff',
]

let tagsWithColors: TagDescription[] = []
let tagsWithColorsDoubled: TagDescription[] = []

$: {
  tagsWithColors = tags.map((label) => ({
    label,
    color: tagsColors[strHash(label) % tagsColors.length]
  }))
}

$: {
  tagsWithColorsDoubled = [
    ...tagsWithColors,
    ...tagsWithColors
  ].sort(() => Math.random() - 0.5)
}
</script>

<style lang="scss">
.tags-list {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  width: 100%;
  user-select: none;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;

  &__tag {
    font-weight: 300;
    font-size: 1rem;
    padding: calc($baseSizeStep / 2);
    border-radius: calc($baseSizeStep / 2);
    margin: calc($baseSizeStep / 2);
    cursor: pointer;
  }
}
</style>
