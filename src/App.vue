<template>
  <div class="title font-big">hello</div>
  <img :src="url" />
  <img :src="pubUrl" />
</template>
<script>
import {ref} from 'vue'
import testImg from './assets/test.png'
import otherImg from './assets/other.jpg'
export default {
  setup() {
    const url = ref(testImg)
    setTimeout(() => {
      url.value = otherImg
    }, 3000)
    const pubUrl = ref('/vite.svg')
    return {
      url,
      pubUrl
    }
  }
}
</script>
<style lang="scss">
.font-big {
  font-size: 60px;
}
</style>
