var moving = false
var direction = 1
var table = document.getElementById('table');
var button = document.getElementById('button')
var spaceShip = document.querySelector('.spaceShip')
var timerId;
var timerId3;
var shoot = document.getElementsByClassName('shoot')

var alien = {
    x: 5,
    y: 1,
    direction: 1
}

var space = {
    x: 10,
    y: 16,
    direction: null,
}
var shootSpace = {
    x: space.x,
    y: 15
}


// mover la nave

function drawShip() {
    var shipCell = document.querySelector(`.row${space.y} .col${space.x}`)
    console.log(shipCell)
    shipCell.classList.add('spaceShip')
}

function removeShip() {
    var shipCell2 = document.querySelector('.spaceShip')
    console.log(shipCell2)
    shipCell2.classList.remove('spaceShip')
}

function moveSpaceShip() {
    if (space.direction === 'left' && space.x > 1) {
        space.x--
        //shootSpace.x--
        console.log('left')
    }
    if (space.direction === 'right' && space.x < 19) {
        space.x++
        //shootSpace.x++
        console.log('right')
    }
}

// disparar

function drawShoot() {
    var shootCell = document.querySelector(`.row${shootSpace.y} .col${shootSpace.x}`)
    console.log(shootCell)
    shootCell.classList.add('shoot')
}

function removeShoot() {
    var shootCell2 = document.querySelector('.shoot')
    shootCell2.classList.remove('shoot')
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

function reShoot() {
    if (shootSpace.y === 1) {
        clearInterval(timerId)
        var cleanShoot = setTimeout(removeShoot, 200)
    }
}

// mover aliens

var moveAliens = function () {
    var aliens = document.getElementsByClassName('aliens')
    if (alien.x >= 19 || alien.x < 1) { alien.direction *= -1 }
    aliens.classList.remove('aliens')
    alien.x += 1 * alien.direction
    aliens.classList.add('aliens')
}

// que comience el juego

function startGame() {
    var gameTimer = setInterval(function () {
        removeShip()
        moveSpaceShip()
        drawShip()
    }, 200)
    var gameShoot = setInterval(function(){
        moveShoot()
    }, 200)
/*     if (shootSpace.x !== null) {
       
    } */
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




/* button.addEventListener('click', function (e) {
    if (!moving) {
       // timerId3 = setInterval(moveAliens , 500)
       moveAliens
    } else {
        clearInterval(timerId)
    }
}) */

startGame()
