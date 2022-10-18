var moving = false
var direction = 1
var left = 15
var table = document.getElementById('table');
var button = document.getElementById('button')
var spaceShip = document.querySelector('.spaceShip')
var timerId;
var shoot = document.getElementsByClassName('shoot')

var space = {
    x: 10,
    y: 16,
    direction: 'left',
}
var shootSpace = {
    x: 10,
    y: 15,
    direction: 'up',
}
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
    if (space.direction === 'rigth' && space.x < 19) {
        space.x++
        //shootSpace.x++
        console.log('right')
    }
}
function drawShoot() {
    var shootCell = document.querySelector(`.row${shootSpace.y} .col${shootSpace.x}`)
    console.log(shootCell)
    shootCell.classList.add('shoot')
}
    var moveShoot = function() {
    if (shootSpace.direction === 'up' && shootSpace.y > 1) {
        drawShoot()
        removeShoot()
        shootSpace.y--
        drawShoot()
    }
}

function removeShoot (){
    var shootCell2 = document.querySelector('.shoot')
    shootCell2.classList.remove('shoot')
}

window.addEventListener('keydown', function (e) {
    switch (e.code) {
        case 'ArrowLeft':
            space.direction = 'left'
            removeShip()
            moveSpaceShip()
            drawShip()
            break
        case 'ArrowRight':
            space.direction = 'rigth'
            removeShip()
            moveSpaceShip()
            drawShip()
            break
        case 'ArrowUp':
            shootSpace.direction = 'up'
            
            timerId = setInterval(moveShoot ,500)
            //removeShoot()
           // drawShoot()
            break
        case 'keyup':
            space.direction = 0
            shootSpace.direction = 0
            break

    }

})



var moveAliens = function () {
    if (left >= 125 || left < 15) { direction *= -1 }
    left += 10 * direction
    table.style.left = left + 'px'
}


button.addEventListener('click', function (e) {
    if (!moving) {
        timerId = setInterval(moveAliens, 500)
    } else {
        clearInterval(timerId)
    }
})


