
world = {
    room: "floor3",
}

story = {
    openingText: "You are standing outside your apartment.# What do you want to do?",
    iDoNotUnderstand: 'I do not understand "%".'
}

genericVerbMessages = {
    fly: `You flap your arms, but nothing happens.`,,
    jump: `You jump on the spot.`,
    look: "Nothing special to see.",
}

multiNope(`There's nothing to % here, I'm afraid.`, `open, close, push, press, use, take, uproot`)

alias("grab, pick", "take")

loc("floor3", `

    open: You try to open the elevator door, but of course you are too weak for that.
    look: You are standing in front of your apartment.

`)


function handlePlayerCommand(c) {
    if (world.room === "floor3") {
 
        if (c === "take" || c === "pull" || c === "uproot") {
            renderImage("floor-no-tree")
            return `You pull the tree out of the vase, uprooting it. Brutal!`
        }

        if (c === "push" || c === "press") {
            renderImage("elevator")
            world.room = "elevator"
            return "You push the button. # The elevator arrives and you enter."
        }

    }

    return null
}