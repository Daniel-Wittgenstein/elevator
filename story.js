
state = {

}

story = {
    openingText: "You are standing outside your apartment.# What do you want to do?",
    iDoNotUnderstand: 'I do not understand "%".'
}

genericVerbMessages = {
    open: `There's nothing to open here, I'm afraid.`,
    fly: [`You flap your arms, but nothing happens.`, `You try, but it won't work.`],
    jump: () => {return `You jump on the spot.`}
}

function handlePlayerCommand(c) {
    return null
}