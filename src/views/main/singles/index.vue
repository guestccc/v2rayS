<template>
  <div>
    <h1>singles</h1>
    <a-input v-model="value"/>
    <router-link to="singles/add">add</router-link>
    <br>
    <router-link :to="`singles/set/${value}`">set</router-link>
    <br>
    <demo>
        <ram/>
        <cpu/>
    </demo>
  </div>
</template>

<script>
import Demo from './Demo.vue';
import Ram from './Ram.vue';
import Cpu from './Cpu.vue';

export default {
  data() {
    return {
      value: 'singles',
      res: {
        a: 'NO.a',
        b: 'No.b',
      },
    };
  },
  components: {
    Demo,
    Ram,
    Cpu,
  },
};
</script>
