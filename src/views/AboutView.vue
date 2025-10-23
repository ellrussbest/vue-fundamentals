<script setup lang="ts">
import { onMounted, ref } from 'vue';

const count = ref(0);
const songs: { title: string; singer: string }[] = [
  {
    title: 'End of time',
    singer: 'NWYR',
  },
  {
    title: 'Broken Arrows',
    singer: 'Avicii',
  },
  {
    title: 'Helicopter',
    singer: 'Martin Garrix',
  },
];

/**
 * Computed & Watch
 *
 * --- Computed === Pure function ---
 * Returns a derived value or Data properties that depend on other data
 *
 * const doubled = computed(() => count.value * 2)
 * const favorites = computed(() => songs.filter(({singer}) => singer === "MJ"))
 *
 * --- Watch === Side effects ---
 *
 * Api calls
 * Updating DOM
 * Updating State / Global variable
 * Writing to local storage
 * Triggering timeout or interval
 * Emmiting an event
 *
 * watch(count => async(newCount) => {
 *  await fetch(`api/items?pate=${newCount}`)
 * })
 *
 */

function increase() {
  ++count.value;
}

function decrease() {
  --count.value;
}

function eventHandler(e: MouseEvent, arg: unknown) {
  console.log({ e, arg });
}

const spanRef = ref<HTMLSpanElement | null>(null);

onMounted(() => {
  if (spanRef.value) {
    spanRef.value.style.color = 'blue';
  }
});
</script>

<template>
  <div class="about flex h-full min-h-screen flex-col justify-center gap-2">
    <div class="flex flex-col gap-4">
      <div class="flex w-full flex-col text-center text-3xl">
        <span ref="spanRef">
          {{ count }}
        </span>

        <span v-show="count > 10" class="text-sm"
          >Value is greater than 10</span
        >
      </div>
      <div class="flex w-full justify-between gap-4">
        <div class="cursor-pointer rounded-md border p-2" @click="decrease">
          Decrement
        </div>
        <div class="cursor-pointer rounded-md border p-2" @click="increase">
          Increment
        </div>
      </div>
    </div>

    <!-- Events -->
    <div @mouseover="eventHandler($event, 5)"></div>
    <div @mouseleave="() => {}"></div>
    <div
      @dblclick="
        () => {
          console.log('double click!');
        }
      "
    ></div>

    <!-- Rendering array of object -->
    <div class="w-full rounded-md border p-2 text-center">
      <div v-for="(song, i) in songs">
        <p :class="{ 'text-yellow-800': i % 2 === 1 }">
          {{ song.title }}: {{ song.singer }}
        </p>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
