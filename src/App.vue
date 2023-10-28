<template>
  <div class="title font-big">hello world!!!</div>
  <img :src="url" />
  <img :src="pubUrl" />
  <div>{{ longText }}</div>
</template>
<script>
import {ref} from 'vue'
import testImg from './assets/test.png'
import otherImg from './assets/other.jpg'
import longText from './longtext.txt'
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
      pubUrl,
      longText
    }
  }
}
</script>
<style lang="scss">
.font-big {
  font-size: 60px;
}
</style>
