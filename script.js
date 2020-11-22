const playerChoice=document.getElementById("playerChoice");
const playerScore=document.getElementById("playerScore");
const computerChoice=document.getElementById("computerChoice");
const computerScore=document.getElementById("computerScore");
const [playerRock,playerPaper,playerScissors,playerLizard,playerSpock]=Array.from(document.getElementById("player").children).slice(1);
const computerIcons=Array.from(document.getElementById("computer").children).slice(1);
const resultText=document.getElementById("resultText");

const choices = [
  { name: 'rock', defeats: ['scissors', 'lizard'] },
  { name: 'paper', defeats: ['rock', 'spock'] },
  { name: 'scissors', defeats: ['paper', 'lizard'] },
  { name: 'lizard', defeats: ['paper', 'spock'] },
  { name: 'spock', defeats: ['scissors', 'rock'] },
];

function select(choice){
  if(document.getElementsByClassName("selected").length>0){
    document.getElementsByClassName("selected")[1].classList.remove("selected");
    document.getElementsByClassName("selected")[0].classList.remove("selected");
  }
  const randomSelect=Math.floor(Math.random()*5);
  computerIcons[randomSelect].classList.add('selected');
  this.classList.add("selected");
  playerChoice.textContent=`---${choice}`;
  computerChoice.textContent=`---${choices[randomSelect].name}`;
  checkResult(randomSelect,choice);
}
function checkResult(selectedIndex,choice){
  if(choice===choices[selectedIndex].name)
      resultText.textContent="it's a tie!"
  else if(choices[selectedIndex].defeats.includes(choice)){
    resultText.textContent="you lost!";
    computerScore.textContent=Number(computerScore.textContent)+1;
  }else{
    resultText.textContent="you won!";
    party.screen({ 
      count: 500 * (window.innerWidth / 1980),
      countVariation: 0.5,
      angleSpan: 0,
      yVelocity: -100,
      yVelocityVariation: 2,
      rotationVelocityLimit: 6,
      scaleVariation: 10.8
    });
    playerScore.textContent=Number(playerScore.textContent)+1;
  }
}
function resetAll(){
  location.reload();
}



