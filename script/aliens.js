function Aliens(){
  this.direction = 1 ,
  this.position = 1, // 1:derecha, -1:izquierda
  this.naves = [
    { x: 4, y: 1 },
    { x: 6, y: 1 },
    { x: 8, y: 1 },
    { x: 10, y: 1 },
    { x: 12, y: 1 },
    { x: 14, y: 1 },
    { x: 16, y: 1 },
    { x: 18, y: 1 },
    { x: 4, y: 3 },
    { x: 6, y: 3 },
    { x: 8, y: 3 },
    { x: 10, y: 3 },
    { x: 12, y: 3 },
    { x: 14, y: 3 },
    { x: 16, y: 3 },
    { x: 18, y: 3 },
    { x: 4, y: 5 },
    { x: 6, y: 5 },
    { x: 8, y: 5 },
    { x: 10, y: 5 },
    { x: 12, y: 5 },
    { x: 14, y: 5 },
    { x: 16, y: 5 },
    { x: 18, y: 5 },
  ]
  this.remove = function() {
    document
      .querySelectorAll('.aliens')
      .forEach(alien => {
        alien.classList.remove('aliens')
      })
  }
  this.draw = function() {
    this.naves.forEach(nave => {
      var alienCell = document.querySelector(`.row${nave.y} > .col${nave.x}`)
      alienCell.classList.add('aliens')
    })
  }
  this.move = function () {
    this.naves.forEach(nave => {
      nave.x += 1 * this.direction
    }) 
    if (this.naves[this.naves.length-1].x === 21 || this.naves[0].x === 1) {
      this.direction *= -1
      if (this.naves[0].x === 1){
          this.naves.forEach(nave =>{
              nave.y += 1
          } )
      }
     } 
  } 
}