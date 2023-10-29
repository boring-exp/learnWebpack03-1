import { AsyncSeriesHook } from 'tapable'

const asyncHook = new AsyncSeriesHook()

asyncHook.tapAsync('first', (callback) => {
  console.log('first')
  setTimeout(() => {
    callback()
  }, 3000)
})

asyncHook.tapPromise('second', () => {
  return new Promise(resolve => {
    console.log('second')
    setTimeout(() => {
      resolve()
    }, 3000)
  })
})

asyncHook.tapAsync('third', () => {
  console.log('third')
})

asyncHook.callAsync()