var moving = false
var direction = 1
var button = document.getElementById('button')
var spaceShip = document.querySelector('.spaceShip')
var timerId;
var timerId3;
var shoot = document.getElementsByClassName('shoot')

var alien = {
    x: 1,
    y: 1,
    direction: 1
}

var space = {
    x: 10,
    y: 16,
    direction: null,
}

var shootSpace = {
    x: 0,
    y: 0
}
// mover la nave

function drawShip() {
    var shipCell = document.querySelector(`.row${space.y} .col${space.x}`)
    shipCell.classList.add('spaceShip')
}

function removeShip() {
    var shipCell2 = document.querySelector('.spaceShip')
    shipCell2.classList.remove('spaceShip')
}

function moveSpaceShip() {
    if (space.direction === 'left' && space.x > 1) {
        space.x--
    }
    if (space.direction === 'right' && space.x < 19) {
        space.x++
    }
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
            space.direction = 'left'
            break
        case 'ArrowRight':
            space.direction = 'right'
            break
        case 'ArrowUp':
            if (shootSpace.x === null && shootSpace.y === null) {
                shootSpace.x = space.x
                shootSpace.y = space.y - 1
            }
            break
    }

})

window.addEventListener('keyup', function (e) {
    if (e.code === 'ArrowLeft' || e.code === 'ArrowRight') {
        space.direction = null
    }
})


// mover aliens

function alienMovement() {
    timerId = setInterval(function () {
        //devuelve array
        var alienCell = document.querySelectorAll(`.aliens`)
        console.log(alienCell)
        alienCell.forEach(function (et) {
            et.classList.remove('aliens')
            var row = et.parentNode.getAttribute('class')
            var col = et.getAttribute('class')
            var cel = document.querySelector(`.row${parseInt(row[row.length-1]+1)} .${col}`)
            cel.classList.add('aliens')
            console.log(row, col, cel, row.length)
        })


    }, 1000)
}


// que comience el juego

function startGame() {

    var gameTimer = setInterval(function () {
        removeShip()
        moveSpaceShip()
        drawShip()
    }, 200)
    var gameShoot = setInterval(function () {
        moveShoot()
        checkHit()
    }, 200)

}

button.addEventListener('click', function (e) {
    startGame()
    alienMovement()
})


