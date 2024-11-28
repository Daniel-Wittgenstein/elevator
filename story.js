
world = {
    room: "floor3",
    elevatorDoorIsOpen: true,
}

const anyDestructionVerb = "destroy, attack, kick, hit, smash, obliterate"

story = {
    openingText: "You are standing outside your apartment.# Type a single word! Either something you want to do or a thing you see.",
    iDoNotUnderstand: 'I do not understand "%".'
}

genericVerbMessages = {
    fly: `You flap your arms, but nothing happens.`,
    jump: `You jump on the spot.`,
    look: "Nothing special to see.",
}

multiNope(`There's nothing to % here, I'm afraid.`, `
    open, close, push, press, use, take, uproot,
    destroy, attack, kick, hit, smash, obliterate
    `)

multiNope(`The % is not important right now.`, `
    tree, floor, ceiling, sky, door, vase, wall, walls`)


multiNope(`You can't see that here.`, `
    mirror, vase, elevator, panel, button, buttons`)
        
alias("grab, pick", "take")
alias("drag", "pull")
alias("plant", "tree")

loc("floor3", `

    open: You try to open the elevator door, but of course you are too weak for that.
    look: You are standing in front of your apartment.
    panel: A panel with two buttons.
    vase: Just a  vase.
    elevator: There's an elevator door and a panel with two buttons.
    door: There's an elevator door and a panel with two buttons.

`)

loc("elevator", `

    open: You try to open the elevator door, but of course you are too weak for that.
    look: You are standing in the elevator, in front of a mirror. There is also a panel with buttons here.
    mirror: A mirror.
    
`)


function handlePlayerCommand(c) {
    if (world.room === "floor3") {

        if (isAny(c, "take, pull, uproot, tree") && !world.treeUprooted) {
            renderImage("floor-no-tree")
            world.treeUprooted = true
            return `You pull the tree out of the vase, uprooting it. Brutal!`
        }

        if (isAny(c, "push, press, button, buttons")) {
            renderImage("elevator")
            world.room = "elevator"
            return `You push a button. #
            The elevator arrives and you enter. #
            Your face looks weird in the elevator mirror. #
            Too happy. #
            You don't feel happy. #
            But there it is, a stupid little smile, stamped on your face.
            `
        }
    }




    if (world.room === "elevator") {

        if (isAny(c, "6")) {
            renderImage("terrace")
            setTimeout(() => alert("The game ended."), 3000)
            return `You press the button with the number 6. #
            The elevator starts going up. #
            Finally, you reach the roof terrace. #
            `

        }

        if (isAny(c, "1, 2, 4, 5")) {
            return `That floor depresses you. You need air!`
        }

        if (isAny(c, "3")) {
            return `That's the floor you are on already.`
        }

        if (isAny(c, anyDestructionVerb) && !world.mirrorCracked) {
            world.mirrorCracked = true
            renderImage("elevator-cracked")
            return `You hit the mirror.#
            Now your face in the mirror looks even weirder.
            Splintered. #
            Broken.
            `
        }

        if (isAny(c, "push, press, up, down, panel, button, buttons")) {
            renderImage("elevator-panel")
            return `You turn towards the panel. What button should you push?`
        }

    }

    return null
}