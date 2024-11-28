
let messageBox
let canvas
let ctx

window.onload = startApp

function startApp() {
    messageBox = document.getElementById("message")
    canvas = document.getElementById('mainCanvas')
    ctx = canvas.getContext('2d')
    renderImage("floor")
}

function renderImage(imageId) {
    const image = document.getElementById(imageId)
    if (image) {
      ctx.drawImage(image, 0, 0)
    } else {
      console.error(`Image with id "${imageId}" not found.`)
    }
}