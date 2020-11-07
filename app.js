// On va créer une fonction contenant l'ensemble du jeu
const game = () => {
  let pScore = 0;
  let cScore = 0;

  //Commencer le jeu
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  //Play Match
  const playMatch = () => {
    const optionsBtn = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");
    //Cette boucle permet de recommencer l'animation aprés chaque partie de jeu
    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    //Les options de jeu de l'ordinateur
    const computerOptions = ["rock", "paper", "scissors"];

    // Avant tout il faut que l'on accéde d'abord aux boutons
    optionsBtn.forEach((option) => {
      option.addEventListener("click", function () {
        // Choix de l'ordinateur
        const computerNumber = Math.floor(Math.random() * 3); // la fonction native "floor" permet dd'arrondir un nombre décimal en entier
        const computerChoice = computerOptions[computerNumber];
        //On définit le temps avant l'arrêt de l'éxécution
        setTimeout(() => {
          //Ici on appelle la comparaison des mains
          compareHands(this.textContent, computerChoice);
          //Mettre à jour les images de mains
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);
        //Ici on ajoute le temps et le type d'animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  //Mettre à jour le score
  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  //Comparons les 2 mains
  const compareHands = (playerChoice, computerChoice) => {
    //Mettre à jour le texte
    const winner = document.querySelector(".winner");
    //Vérifier en cas d'égalité
    if (playerChoice === computerChoice) {
      winner.textContent = "It's a tie";
      return;
    }
    //Vérifier pour le "rock"
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }
    //Vérifier pour le "paper"
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
    //Vérifier pour le "scissors"
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore;
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  // Appelons la fonction imbriquée "startGAme" et "playMatch"
  startGame();
  playMatch();
};

// On commence le jeu avec la fonction "game"
game();
