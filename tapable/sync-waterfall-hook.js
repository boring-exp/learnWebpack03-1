import { SyncWaterfallHook } from 'tapable'

const waterFall = new SyncWaterfallHook(['arg1'])

waterFall.tap('fisrt', (param) => {
  console.log(param)
  return param + 1
})

waterFall.tap('second', (param) => {
  console.log(param)
  return param + 1
})

waterFall.tap('third', (param) => {
  console.log(param)
})

waterFall.call(1)