//scoping everything//
const game = () =>{
  let pScore= 0;
  let cScore= 0;

  const startGame = () =>{
    const playButton = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector('.match');

    playButton.addEventListener('click', () => {
      introScreen.classList.add('fadeOut');
      match.classList.add('fadeIn');
  });
};
startGame();
console.log('yeah');
};

game();
console.log('ready');
