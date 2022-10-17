var moving = false
var direction = 1
var left = 15
var table = document.getElementById('table');
var button = document.getElementById('button')
var spaceShip = document.getQueryselector('.spaceShip')
var timerId;

spaceShip = {
    x:10,
    y:16,
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





