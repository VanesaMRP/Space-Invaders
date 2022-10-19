var spaceShip = document.querySelector('.spaceShip')
var timerId;
var timerId3;
var shoot = document.getElementsByClassName('shoot')
var space = new Spaceship()
var aliens = new Aliens()



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
    //clearInterval(timerId3)
  } else {
    drawShoot()
    removeShoot()
    shootSpace.y--
    drawShoot()
  }
}

// collision and explode
function removeAliens(){
  aliens.naves = aliens.naves.filter(function(alien){
  return (alien.x !== shootSpace.x)
  })
  console.log(aliens.naves)
}


function checkHit() {
  var shootCell = document.querySelector('.shoot')
  if (shootCell.classList.contains('aliens')) {
    shootCell.classList.remove('aliens')
    shootCell.classList.remove('shoot')
    removeAliens()
    shootSpace.y = null
    shootSpace.x = null
    shootCell.classList.add('boom')
    setTimeout(()=> shootCell.classList.remove('boom'), 100)
  } 
}


window.addEventListener('keydown', function (e) {
  switch (e.code) {
    case 'ArrowLeft':
      if (space.x > 1) { space.x-- }
      break;

    case 'ArrowRight':
      if (space.x < 21) { space.x++  }
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
  }.bind(this), 50) 

  // Move Aliens
  var aliensTimer = setInterval(function () {
    aliens.remove()
    aliens.move()
    aliens.draw()
   

  }.bind(this), 500)

  // Move SpaceShip Shoot
  var gameShoot = setInterval(function () {
    moveShoot()
    checkHit()
    
    
    

  }.bind(this), 20)
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

function init() { 
  createTable()
  document
    .getElementById('start')
    .addEventListener('click', () => startGame() )
}

init()




