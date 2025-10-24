<template>
  <div>
    <h3>Single Name Input</h3>
    <input v-model="name" placeholder="Enter your name" />
    <p>Hello, {{ name }}!</p>
  </div>

  <div>
    <h3>Choose your friends</h3>
    <div>
      <input type="checkbox" value="Shaun" v-model="names" id="shaun" />
      <label for="shaun">Shaun</label>
    </div>
    <div>
      <input type="checkbox" value="Yoshi" v-model="names" id="yoshi" />
      <label for="yoshi">Yoshi</label>
    </div>
    <div>
      <input type="checkbox" value="Mario" v-model="names" id="mario" />
      <label for="mario">Mario</label>
    </div>

    <p>Selected friends: {{ names.join(', ') || 'None' }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const names = ref([]);
</script>

<style scoped>
h3 {
  margin-bottom: 5px;
}

div {
  margin-bottom: 15px;
}
</style>
