
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
      
}

function renderImage(imageId) {
    const image = document.getElementById(imageId)
    if (image) {
      ctx.drawImage(image, 0, 0)
    } else {
      console.error(`Image with id "${imageId}" not found.`)
    }
}