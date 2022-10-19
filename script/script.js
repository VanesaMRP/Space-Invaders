var spaceShip = document.querySelector('.spaceShip')
var timerId;
var timerId3;
var shoot = document.getElementsByClassName('shoot')

var aliens =  {
  direction: 1, // 1:derecha, -1:izquierda
  naves: [
    { x: 4, y: 1 },
    { x: 8, y: 1 },
    { x: 12, y: 1 },
    { x: 16, y: 1 },
  ],
  remove: function() {
    document
      .querySelectorAll('.aliens')
      .forEach(alien => {
        alien.classList.remove('aliens')
      })
  },
  draw: function() {
    this.naves.forEach(nave => {
      var alienCell = document.querySelector(`.row${nave.y} > .col${nave.x}`)
      alienCell.classList.add('aliens')
    })
  },
  move: function() {
    this.naves.forEach(nave => {
      nave.x = nave.x + (1 * this.direction)
    })
  }
}

var space = {
  x: 11,
  y: 16,
  draw: function () {
    var shipCell = document.querySelector(`.row${space.y} > .col${space.x}`)
    shipCell.classList.add('spaceShip')
  },
  remove: function () {
    var shipCell2 = document.querySelector('.spaceShip')
    shipCell2.classList.remove('spaceShip')
  }
}

var shootSpace = {
  x: 0,
  y: 0
}
// mover la nave

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
    //clearInterval(timerId3)
  } else {
    drawShoot()
    removeShoot()
    shootSpace.y--
    drawShoot()
  }
}

// collision and explode

function checkHit() {
  var shootCell = document.querySelector('.shoot')
  if (shootCell.classList.contains('aliens')) {
    shootCell.classList.remove('aliens')
    shootCell.classList.remove('shoot')
    shootSpace.y = null
    shootSpace.x = null
  }
}

window.addEventListener('keydown', function (e) {
  switch (e.code) {
    case 'ArrowLeft':
      if (space.x > 1) { space.x-- }
      break;

    case 'ArrowRight':
      if (space.x < 20) { space.x++  }
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

  space.draw()
  aliens.draw()

  // Move SpaceShip
  var gameTimer = setInterval(function () {
    space.remove()
    space.draw()
  }, 50)

  // Move Aliens
  var aliensTimer = setInterval(function () {
    aliens.remove()
    aliens.move()
    aliens.draw()
  }, 200)

  // Move SpaceShip Shoot
  var gameShoot = setInterval(function () {
    moveShoot()
    checkHit()
  }, 200)

}


const TABLE_WIDTH = 20
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

function init() {
  createTable()
  document
    .getElementById('start')
    .addEventListener('click', () => startGame() )
}

init()




