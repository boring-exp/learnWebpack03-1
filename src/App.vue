<template>{{ count }}</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const count = ref(0);

    setInterval(() => {
      count.value = count.value + 1;
    }, 1000);

    return {
      count,
    };
  },
};
</script>
