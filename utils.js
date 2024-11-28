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

locationBasedStandardResponses = {}

function loc(location, str) {
    locationBasedStandardResponses[location] = {}
    for (const line of str.split("\n").map(n => n.trim()).filter(n => n)) {
        let [verb, text] = line.split(":")
        verb = verb.trim()
        text = text.trim()
        locationBasedStandardResponses[location][verb] = text
    }
}

aliases = {}

function alias(wordStr, resolvesTo) {
    const words = wordStr.split(",").map(n => n.trim()).filter(n => n)
    for (const word of words) {
        aliases[word] = resolvesTo
    }
}

function isAny(txt, wordStr) {
    const words = wordStr.split(",").map(n => n.trim()).filter(n => n)
    return words.includes(txt)
}
