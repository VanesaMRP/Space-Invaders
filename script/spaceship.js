function Spaceship() {
    this.x = 11
    this.y = 16
    this.draw =  function () {
      var shipCell = document.querySelector(`.row${space.y} > .col${space.x}`)
      shipCell.classList.add('spaceShip')
    }
    this.remove = function () {
      var shipCell2 = document.querySelector('.spaceShip')
      shipCell2.classList.remove('spaceShip')
    }
  }
  