const game ={
Title:"guess the Numeber",
biggestNum: 100,
smallestNum:1,
secretNum:1,
guessesByplayer: null,
prevGuesses: [],
play:function(){
this.secretNum = Math.floor(Math.random()*(this.biggestNum - this.smallestNum + 1))+this.smallestNum
console.log(this.secretNum)
game.getGuesses()


},
getGuesses: function(){  
  while(this.guessesByplayer !== this.secretNum  ){
    this.guessesByplayer = (parseInt(prompt("guess a number between 1 and 100"),console.log(this.guessesByplayer)))
     
    if(this.guessesByplayer === this.secretNum){
          alert(`${this.guessesByplayer} congratulations you guess correctly`)}
            
          else if (this.guessesByplayer < this.secretNum){
            alert(`${this.guessesByplayer} your guess was too low`)
          }
            
          else if(this.guessesByplayer > this.secretNum){
                alert(`${this.guessesByplayer} your guess was too high`)
              
              }
  }
}
}
game.play()
