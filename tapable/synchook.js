import { SyncHook } from 'tapable'

const dataEvent = new SyncHook(['arg1'])
const mountedEvent = new SyncHook()

dataEvent.tap('first', (d) => console.log(d))
mountedEvent.tap('second', () => console.log('second'))

dataEvent.call('这是数据')
mountedEvent.call()