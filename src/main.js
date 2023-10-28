import {createApp, ref} from 'vue'
import App from './App.vue'
console.log(App)
import './index.css'
import msg from './wx-xml.xml'
console.log(msg)

const app = createApp(App)
app.mount('#app')

