import { EventEmitter } from 'node:events'

// 可以触发各种类型的事件
const eventBus = new EventEmitter()

// 事件注册
eventBus.on('data', (test) => { console.log('data'); console.log(test) })
eventBus.on('mounted', () => { console.log('mounted') })

eventBus.emit('data', 'hello')