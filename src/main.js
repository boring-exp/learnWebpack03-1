import {createApp, ref} from 'vue'
import App from './App.vue'
console.log(App)
import './index.css'
import msg from './wx-xml.xml'
console.log(msg)
import yaml from './rancher.yml'
console.log(yaml)

const app = createApp(App)
app.mount('#app')

