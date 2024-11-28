
state = {
    room: "floor3",
}

story = {
    openingText: "You are standing outside your apartment.# What do you want to do?",
    iDoNotUnderstand: 'I do not understand "%".'
}

genericVerbMessages = {
    fly: [`You flap your arms, but nothing happens.`, `You try, but it won't work.`],
    jump: `You jump on the spot.`,
}

multiNope(`There's nothing to % here, I'm afraid.`, `open, close, push, press, use`)



function handlePlayerCommand(c) {
    return null
}