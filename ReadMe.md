<style>
    button{
        background-color: black
    }
    .conteiner{
        display: flex;
       justify-content: space-around
    }
</style>

<h1 align="center">Hi 👋, I'm Lorena</h1>
<h3 align="center">A passionate frontend developer in making</h3>

<div class="conteiner">
<div>
<h3 align="center">Connect with me:</h3>
<p align="center">
<a href="https://twitter.com/lorenamarullo" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="lorenamarullo" height="30" width="40" /></a>
<a href="https://linkedin.com/in/lorena-marullo-443072138" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="lorenamarullo" height="30" width="40" /></a>
<a href="https://instagram.com/lorenamarullo" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="lorenamarullo" height="30" width="40" /></a>
</p>
</div>
<div>
<h3 align="center">Languages and Tools:</h3>
<p align="center"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a>  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a><a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a>  </p>
</div>
</div>
<hr>
<div align="center">
<script>
let playerSelection

function computerPlay(){
let choices = ["paper", "rock", "scissors"];
return choices[Math.floor(Math.random() * 3)];
}

let computerSelection = computerPlay();

function rockFN() {
let playerSelection = "rock"
// document.getElementById("demo").innerHTML = playerSelection;
let computerSelection = computerPlay();

if (playerSelection == computerSelection){
document.getElementById("result").innerHTML = ( "Draw! 😑");
} else if (
(playerSelection=="rock" && computerSelection=="scissors")||
(playerSelection=="paper" && computerSelection=="rock")||
(playerSelection=="scissors" && computerSelection=="paper")
)
{
document.getElementById("result").innerHTML = ("Win! 🏆");

    } else if (
    (playerSelection=="rock" && computerSelection=="paper")||
    (playerSelection=="paper" && computerSelection=="scissors")||
    (playerSelection=="scissors" && computerSelection=="rock")
    )
    {
        document.getElementById("result").innerHTML =  ("Lose! 👎");

    }

}
function paperFN() {
let playerSelection = "paper"
// document.getElementById("demo").innerHTML = playerSelection;
let computerSelection = computerPlay();

if (playerSelection == computerSelection){
document.getElementById("result").innerHTML = ( "Draw! 😑");
} else if (
(playerSelection=="rock" && computerSelection=="scissors")||
(playerSelection=="paper" && computerSelection=="rock")||
(playerSelection=="scissors" && computerSelection=="paper")
)
{
document.getElementById("result").innerHTML = ("Win! 🏆");

    } else if (
    (playerSelection=="rock" && computerSelection=="paper")||
    (playerSelection=="paper" && computerSelection=="scissors")||
    (playerSelection=="scissors" && computerSelection=="rock")
    )
    {
        document.getElementById("result").innerHTML =  ("Lose! 👎");

    }

}
function scissorsFN() {
let playerSelection = "scissors"
// document.getElementById("demo").innerHTML = playerSelection;
let computerSelection = computerPlay();

if (playerSelection == computerSelection){
document.getElementById("result").innerHTML = ( "Draw! 😑");
} else if (
(playerSelection=="rock" && computerSelection=="scissors")||
(playerSelection=="paper" && computerSelection=="rock")||
(playerSelection=="scissors" && computerSelection=="paper")
)
{
document.getElementById("result").innerHTML = ("Win! 🏆");

    } else if (
    (playerSelection=="rock" && computerSelection=="paper")||
    (playerSelection=="paper" && computerSelection=="scissors")||
    (playerSelection=="scissors" && computerSelection=="rock")
    )
    {
        document.getElementById("result").innerHTML =  ("Lose! 👎");

    }

}
</script>

<h2>Play Rock-Paper-Scissors</h2>
<h4>(in memory of my first JS project [2019])</h4>

<h3>Result: </h3><h3 id="result">///</h3>

<button type="button" id="rock" onclick="rockFN()">🤘</button>
<button type="button" id="paper" onclick="paperFN()">🧻</button>
<button type="button" id="scissors" onclick="scissorsFN()">✂️</button>

</div>
<hr>
Something about me:

```javascript
const LoreMaru = {
  firstName: "Lorena",
  lastName: "Marullo",
  location: "Italy",
  apparence: "female",
  pronouns: "she/her",
  skill: ["Javascript", "CSS", "HTML"],
  tool: "React",
  hobbies: [
    "DIY",
    "Create-stuff-w/-Photoshop",
    "Calligraphy",
    "Read",
    "Watch-TV-Shows",
  ],
};
```

<hr>
