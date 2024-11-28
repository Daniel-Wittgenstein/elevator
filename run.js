
let messageBox
let canvas
let ctx
let inputBox

window.onload = startApp

async function startApp() {
    messageBox = document.getElementById("message")
    canvas = document.getElementById('mainCanvas')
    inputBox = document.getElementById("inputBox")
    inputBox.value = ""
    blockInput()

    ctx = canvas.getContext('2d')
    renderImage("floor")
    inputBox.focus()
    inputBox.addEventListener('blur', () => {
        setTimeout (() => inputBox.focus(), 100)
    })

    inputBox.addEventListener('keydown', async (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            tempVariable = inputBox.value
            blockInput()
            await submitPlayerCommand(tempVariable)
            inputBox.value = ''
            unblockInput()
          }
    })

    await say (story.openingText)
    unblockInput()
}


async function submitPlayerCommand(str) {
    str = str.trim()
    str = str.replace(/[^a-z0-9]/gi, '');
    str = str.toLowerCase()
    cls()
    await say("> " + str)
    await doCommand(str)
}

function renderImage(imageId) {
    const image = document.getElementById(imageId)
    if (image) {
      ctx.drawImage(image, 0, 0)
    } else {
      console.error(`Image with id "${imageId}" not found.`)
    }
}

async function say(text) {
    text = text.toUpperCase()
    for (let i = 0; i < text.length; i++) {
        let delay = 0
        if (text[i] === "#") {
            messageBox.innerHTML += "<br>"
            continue
        } else {
            messageBox.innerHTML += text[i];
        }
        await new Promise(resolve => setTimeout(resolve, delay));
    }
    messageBox.innerHTML += "<br>"
}

function cls() {
    messageBox.innerHTML = ""
}

function blockInput() {
    inputBox.disabled = true
    document.getElementById("whole-prompt").style.visibility = "hidden"
}

function unblockInput() {
    inputBox.disabled = false
    document.getElementById("whole-prompt").style.visibility = "visible"
    inputBox.focus()
}

window.renderImage = renderImage
window.say = say