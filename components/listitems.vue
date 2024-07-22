<template>
  <li class="flex flec-row m-3">
    <input aria-live="polite" type="checkbox" id="{{id}}" class="mr-3"/>
    <label for="{{id}}">{{ title }}</label>
  </li>

</template>

<script setup>
const { id, title } = defineProps(["id", "title"]);
</script>