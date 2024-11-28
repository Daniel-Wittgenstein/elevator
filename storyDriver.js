

window.doCommand = async(c) => {
    const res0 = handlePlayerCommand(c)
    if (res0) {
        const text = handleResult(res0)
        await say(text)
        return
    }
    
    const resB = getLocationBasedStandardResponse(c)
    if (resB) {
        await say(resB)
        return
    }

    const res = getGenericVerbMessage(c)
    if (res) {
        await say(res)
        return
    }

    await displayDefaultMessage(c)
}

function getLocationBasedStandardResponse(c) {
    if (!locationBasedStandardResponses[world.room]) return null
    return locationBasedStandardResponses[world.room][c]
}

async function displayDefaultMessage(c) {
    await say(story.iDoNotUnderstand.replaceAll("%", c))
}

function getGenericVerbMessage(c) {
    const res = genericVerbMessages[c]
    if (res) {
        return handleResult(res)
    }
    return false
}

function handleResult(res) {
    if (typeof res === 'function') {
        return res(c)
    } else if (Array.isArray(res)) {
        return pick(res)
    } else {
        return res
    }
}
