

window.doCommand = async(c) => {
    const res = getGenericVerbMessage(c)
    if (res) {
        await say(res)
        return
    }
    await displayDefaultMessage(c)
}


async function displayDefaultMessage(c) {
    await say(story.iDoNotUnderstand.replaceAll("%", c))
}

function getGenericVerbMessage(c) {
    const res = genericVerbMessages[c]
    if (res) {
        if (typeof res === 'function') {
            return res(c)
        } else if (Array.isArray(res)) {
            return pick(res)
        } else {
            return res
        }
    }
    return false
}