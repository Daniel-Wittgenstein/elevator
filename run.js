// Placeholder for canvas logic
const canvas = document.getElementById('mainCanvas')
const ctx = canvas.getContext('2d')

ctx.fillStyle = 'white'
ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx.fillStyle = 'black'
ctx.font = '20px Arial'
ctx.fillText('Canvas Loaded', 10, 50)
