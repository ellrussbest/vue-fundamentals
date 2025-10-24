<template>
  <div class="lifecycle-demo">
    <h2>Vue Lifecycle Hooks Demo</h2>

    <button @click="toggleChild">
      {{ showChild ? 'Unmount Child' : 'Mount Child' }}
    </button>

    <!-- Conditionally render the child -->
    <div v-if="showChild" class="child">
      <p>I'm a child component!</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from 'vue';

const showChild = ref(false);

function log(message: string) {
  console.log(message);
}

/*
  ---- Parent Component Lifecycle Hooks ----
*/

// Called **right before the component is mounted to the DOM**
onBeforeMount(() => log('Parent: onBeforeMount'));

// Called **after the component is mounted to the DOM**
onMounted(() => log('Parent: onMounted'));

// Called **before the DOM is updated**, after reactive data changes
onBeforeUpdate(() => log('Parent: onBeforeUpdate'));

// Called **after the DOM updates** due to reactive data changes
onUpdated(() => log('Parent: onUpdated'));

// Called **right before the component is unmounted and removed from the DOM**
onBeforeUnmount(() => log('Parent: onBeforeUnmount'));

// Called **after the component is unmounted from the DOM**
onUnmounted(() => log('Parent: onUnmounted'));

// Toggle the child div to trigger mount/unmount
function toggleChild() {
  showChild.value = !showChild.value;
}
</script>

<style scoped>
.lifecycle-demo {
  padding: 20px;
  border: 2px solid blue;
  width: 400px;
  margin-bottom: 20px;
}

button {
  margin-bottom: 20px;
}

.child {
  padding: 10px;
  border: 2px dashed orange;
}
</style>
