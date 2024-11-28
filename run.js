
let messageBox
let canvas
let ctx
let inputBox

window.onload = startApp

function startApp() {
    messageBox = document.getElementById("message")
    canvas = document.getElementById('mainCanvas')
    inputBox = document.getElementById("inputBox")
    ctx = canvas.getContext('2d')
    renderImage("floor")
    inputBox.focus()
    inputBox.addEventListener('blur', () => {
        setTimeout (() => inputBox.focus(), 100)
    })

    inputBox.addEventListener('keydown', (event) => {
        if (event.key === ' ') {
          event.preventDefault()
        }
        if (event.key === 'Enter') {
            tempVariable = inputBox.value
            submitPlayerCommand(tempVariable)
            inputBox.value = ''
          }
    })
}


async function submitPlayerCommand(str) {
    str = str.trim()
    str = str.replace(/[^a-z0-9]/gi, '');
    str = str.toLowerCase()
    console.log(str)
    await say(str)
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
        let delay = 50
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

  
