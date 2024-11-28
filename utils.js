function rnd(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
  }
  
  function pick(arr) {
    return arr[rnd(0, arr.length - 1)]
  }

  function multiNope(text, verbsText) {
    const verbs = verbsText.split(",").map(n => n.trim()).filter(n => n)
    for (const verb of verbs) {
        genericVerbMessages[verb] = text.replaceAll("%", verb)
    }
}
