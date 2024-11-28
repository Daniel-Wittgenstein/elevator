
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


function submitPlayerCommand(str) {
    str = str.trim()
    str = str.replace(/[^a-z0-9]/gi, '');
    str = str.toLowerCase()
    console.log(str)
}

function renderImage(imageId) {
    const image = document.getElementById(imageId)
    if (image) {
      ctx.drawImage(image, 0, 0)
    } else {
      console.error(`Image with id "${imageId}" not found.`)
    }
}