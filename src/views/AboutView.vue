<script setup lang="ts">
import { ref } from 'vue';

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
</script>

<template>
  <div class="about flex flex-col min-h-screen h-full justify-center gap-2">
    <div class="flex flex-col gap-4">
      <div class="w-full text-center text-3xl flex flex-col">
        <span>
          {{ count }}
        </span>

        <span v-show="count > 10" class="text-sm"
          >Value is greater than 10</span
        >
      </div>
      <div class="w-full flex justify-between gap-4">
        <div class="border p-2 rounded-md cursor-pointer" @click="decrease">
          Decrement
        </div>
        <div class="border p-2 rounded-md cursor-pointer" @click="increase">
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
    <div class="w-full text-center border rounded-md p-2">
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
