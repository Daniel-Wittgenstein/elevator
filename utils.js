function rnd(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
  }
  
  function pick(arr) {
    return arr[rnd(0, arr.length - 1)]
  }

  