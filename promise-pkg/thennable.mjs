export default {
  get then() {
    console.trace('get then')
    return (callback) => {
      console.trace('call then', callback)
    }
  }
}
