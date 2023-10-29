import { SyncBailHook } from 'tapable'

const bail = new SyncBailHook(['arg1'])

bail.tap('fisrt', () => {
  console.log('first')
})

bail.tap('second', () => {
  console.log('second')
  return true
})

bail.tap('third', () => {
  console.log('third')
})

bail.call()