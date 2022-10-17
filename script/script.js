var moving = false
var direction = 1
var left = 15
var table = document.getElementById('table');
var button = document.getElementById('button')
var timerId;

var moveAliens = function (){
    if(left >= 125 || left < 15) { direction *= -1}
    left += 10 * direction
    table.style.left = left + 'px'

}

function moveSpaceShip () {


}


button.addEventListener('click', function (e){
    if (!moving){
        timerId = setInterval(moveAliens, 500)
    } else {
        clearInterval(timerId)
    }
})





