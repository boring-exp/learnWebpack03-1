<template>
  <div class="title font-big">hello world!!!</div>
  <img :src="url" />
  <img :src="pubUrl" />
</template>
<script>
import {ref} from 'vue'
import testImg from './assets/test.png'
import otherImg from './assets/other.jpg'
// const http = axios.create({
//   baseURL: 'http://localhost:3000'
// })
export default {
  setup() {

    const url = ref(testImg)
    console.log(url)
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
