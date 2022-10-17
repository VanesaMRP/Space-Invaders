var moving = false
var direction = 1
var left = 15
var table = document.getElementById('table');
var button = document.getElementById('button')
var spaceShip = document.getElementById('spaceShip')
var timerId;

spaceShip = {
    x:285,
    y:560,
    dir: 'left'
}



var moveAliens = function (){

}

function moveSpaceShip () {
    if(spaceShip.dir === 'left'){
        spaceShip.x--
    }
    if(spaceShip.dir === 'rigth'){
        spaceShip.x++
    }
}


button.addEventListener('click', function (e){
    if (!moving){
    }
})





