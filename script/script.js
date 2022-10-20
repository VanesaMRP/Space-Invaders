
var spaceShip = document.querySelector('.spaceShip')
var shoot = document.getElementsByClassName('shoot')
var space = new Spaceship()
var aliens = new Aliens()
let explosion = new Audio('audio/xplosion.mp3')
let shooter = new Audio('audio/shooter.mp3')
let music = new Audio('audio/Music.mp3')
music.volume = 0.05
music.loop = true
music.play()
explosion.volume = 0.2
shooter.volume = 0.1

var shootSpace = {
  x: 0,
  y: 0
}

// disparar
function drawShoot() {
  var shootCell = document.querySelector(`.row${shootSpace.y} .col${shootSpace.x}`)
  shootCell.classList.add('shoot')
}

function removeShoot() {
  var shootCell = document.querySelector('.shoot')
  shootCell.classList.remove('shoot')
}

function moveShoot() {
  if (shootSpace.y === 0) {
    shootSpace.y = null
    shootSpace.x = null
  } else {
    drawShoot()
    removeShoot()
    shootSpace.y--
    drawShoot()
  }
}

// collision and explode
function removeAliens() {
  aliens.naves = aliens.naves.filter(function (alien) {
    return (alien.x !== shootSpace.x || alien.x === shootSpace.x && alien.y !== shootSpace.y)
  })
}


function checkHit() {
  var shootCell = document.querySelector('.shoot')
  var counter = document.getElementById('score')
  shooter.play()
  if (shootCell.classList.contains('aliens')) {
    counter.innerText++
    parseInt(counter)
    shootCell.classList.remove('aliens')
    shootCell.classList.remove('shoot')
    removeAliens()
    shootSpace.y = null
    shootSpace.x = null
    shootCell.classList.add('boom')
    setTimeout(() => shootCell.classList.remove('boom'), 100)
    explosion.play()
  }
  if (counter.innerText === '24') {
    clearInterval(aliensTimer)
    clearInterval(gameTimer)
    clearInterval(gameShoot)
    document.querySelector('.space')
      .classList.add('winner')
  }
}


window.addEventListener('keydown', function (e) {
  switch (e.code) {
    case 'ArrowLeft':
      if (space.x > 1) { space.x-- }
      break;

    case 'ArrowRight':
      if (space.x < 21) { space.x++ }
      break;

    case 'ArrowUp':
      if (shootSpace.x === null && shootSpace.y === null) {
        shootSpace.x = space.x
        shootSpace.y = space.y - 1
      }
      break
  }
})

// que comience el juego

function startGame() {

  // inicio juego

  var inicio = document.querySelector('.inicio')
  inicio.classList.remove('inicio')
  var button = document.querySelector('.start')
  button.classList.remove('start')
  button.classList.add('restart')
  button.innerText = 'restart'
  button.addEventListener('click', () => reStart())

  //añadimos el marcador

  var points = document.querySelector('.points')
  var div = document.createElement('div')
  div.innerHTML = ` <div class="top"> score <span id="score">0</span></div> `
  points.appendChild(div)

  //se crean los elementos del juego 

  space.draw()
  aliens.draw()
  music.play()

  // Move SpaceShip
  var gameTimer = setInterval(function () {
    space.remove()
    space.draw()
  }.bind(this), 50)

  // Move Aliens
  var aliensTimer = setInterval(function () {
    aliens.remove()
    aliens.move()
    aliens.draw()

  }.bind(this), 200)

  // Move SpaceShip Shoot
  var gameShoot = setInterval(function () {
    moveShoot()
    checkHit()
  }.bind(this), 10)

  //condicion de partida perdida

  var gameLose = setInterval(function () {
    if (aliens.checkLose()) {
      clearInterval(aliensTimer)
      clearInterval(gameTimer)
      clearInterval(gameShoot)
      document.querySelector('.space')
        .classList.add('gameOver')
    }
  }, 100)
}

const TABLE_WIDTH = 21
const TABLE_HEIGHT = 16

function createTable() {
  const table = document.getElementById('table')

  for (let i = 0; i < TABLE_HEIGHT; i++) {
    const tr = document.createElement('tr')
    tr.classList.add(`row${i + 1}`)
    for (let j = 0; j < TABLE_WIDTH; j++) {
      const td = document.createElement('td')
      td.classList.add(`col${j + 1}`)
      tr.appendChild(td)
    }
    table.appendChild(tr)
  }

}

function reStart() {
  document.location.reload()
}


function init() {
  createTable()

  document
    .querySelector('.start')
    .addEventListener('click', () => startGame())

}

init()