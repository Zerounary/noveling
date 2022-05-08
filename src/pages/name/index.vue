<template>
  <div>
    <h1 class="text-3xl">生成姓名</h1>
    <button @click="clickGen" class="border px-3 py-1 rounded">生成</button>
    <input class="border" v-model="nameNum" />
    <ul>
      <li v-for="name in nameList" :key="name">{{ name }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import randomName from '@/utils/random-name';
import { ref } from 'vue';
const nameList = ref([]);
const nameNum = ref(10);

let clickGen = () => {
  nameList.value = [];
  while (nameList.value.length < nameNum.value) {
    nameList.value.push(randomName.getMaleName(true));
  }
  nameList.value = nameList.value.sort((a,b) => a.length - b.length);
  nameList.value = nameList.value.sort((a,b) => a[0] - b[0]);
};
</script>

<style scoped></style>
