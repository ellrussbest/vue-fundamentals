<script setup lang="ts">
defineProps<{ data: string[] }>();
</script>

<template>
  <div class="">First Slot</div>
  <slot name="first" />

  <div class="">Second Slot</div>
  <slot name="second" />

  <div class="">Third Slot</div>
  <slot name="third">
    <div class="" v-for="(d, i) in data">{{ i }}. {{ d }}</div>
  </slot>
</template>
