(function() {
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  function game() {
    const score = {
      player: 5,
      computer: 5,
    }
    
    return function startGame() {
      const playerNum = prompt(`Введите число от 1 до ${score.player}`);
      console.log(`Число игрока: ${playerNum}`);
      
      if (playerNum === null) {
        if (confirm('Хотите завершить игру?')) {
          if (score.player === score.computer) {
            alert(`Ничья со счетом: Игрок ${score.player} Компьютер ${score.computer}`);
            return;
          }
          if (score.player > score.computer) {
            alert(`Вы выиграли со счетом: Игрок ${score.player} Компьютер ${score.computer}`);
            return;
          }
          if (score.player < score.computer) {
            alert(`Вы проиграли со счетом: Игрок ${score.player} Компьютер ${score.computer}`);
            return;
          }
        }
      }
      
      const randomNum = getRandomIntInclusive(1, 2);
      console.log(`Случайное число: ${randomNum}`);
      
      const parsedPlayerNum = parseInt(playerNum);
      
      if (!Number.isNaN(parsedPlayerNum) && typeof parsedPlayerNum === 'number' && parsedPlayerNum % randomNum === 0) {
        score.computer += parsedPlayerNum;
        score.player -= parsedPlayerNum;
        
        if (score.player === 0) {
          alert('Вы проиграли');
          
          if (confirm('Хотите начать новую игру?')) {
            score.player = 5;
            score.computer = 5;
          } else {
            return;
          }
        }
      } else if (!Number.isNaN(parsedPlayerNum) && typeof parsedPlayerNum === 'number' && parsedPlayerNum % randomNum !== 0) {
        score.player += parsedPlayerNum;
        score.computer -= parsedPlayerNum;
        
        if (score.computer === 0) {
          alert('Вы победили');
          
          if (confirm('Хотите начать новую игру?')) {
            score.player = 5;
            score.computer = 5;
          } else {
            return;
          }
        }  
      } 
      
      return startGame();
    }
  }
  
  window.MARB = game;
})();