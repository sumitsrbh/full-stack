let range = {
  form: 1,
  to: 5,
}

range[Symbol.iterator] = function () {
  return {
    current: this.form,
    last: this.to,

    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ }
      } else {
        return { done: true }
      }
    },
  }
}

for (let num of range) {
  console.log(num)
}
