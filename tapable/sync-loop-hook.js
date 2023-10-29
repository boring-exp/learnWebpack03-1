import { SyncLoopHook } from 'tapable'

const loopHook = new SyncLoopHook()
let count = 0;
loopHook.tap('fisrt', () => {
  count++;
  console.log('first')
})

loopHook.tap('second', () => {
  console.log('second')
  if (count === 3) {
    return;
  }
  return true
})

loopHook.tap('third', () => {
  console.log('third')
})

loopHook.call()