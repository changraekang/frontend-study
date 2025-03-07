class RockPaperScissors {
  constructor() {
    this.choices = ["rock", "paper", "scissors"];
    this.emojis = {
      rock: "✊",
      paper: "✋",
      scissors: "✌️",
    };
    this.scores = {
      player: 0,
      computer: 0,
    };
    this.initializeElements();
    this.addEventListeners();
  }

  initializeElements() {
    this.playerScore = document.getElementById("playerScore");
    this.computerScore = document.getElementById("computerScore");
    this.gameResult = document.getElementById("gameResult");
    this.playerHand = document.getElementById("playerHand");
    this.computerHand = document.getElementById("computerHand");
    this.gameHistory = document.getElementById("gameHistory");
  }

  addEventListeners() {
    document
      .getElementById("rockBtn")
      .addEventListener("click", () => this.play("rock"));
    document
      .getElementById("paperBtn")
      .addEventListener("click", () => this.play("paper"));
    document
      .getElementById("scissorsBtn")
      .addEventListener("click", () => this.play("scissors"));
  }

  getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return this.choices[randomIndex];
  }

  updateHands(playerChoice, computerChoice) {
    this.playerHand.textContent = this.emojis[playerChoice];
    this.computerHand.textContent = this.emojis[computerChoice];

    this.playerHand.style.transform = "rotate(-30deg)";
    this.computerHand.style.transform = "rotate(30deg)";

    setTimeout(() => {
      this.playerHand.style.transform = "rotate(0deg)";
      this.computerHand.style.transform = "rotate(0deg)";
    }, 500);
  }

  determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) return "무승부!";

    const winConditions = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };

    return winConditions[playerChoice] === computerChoice ? "승리!" : "패배!";
  }

  updateScore(result) {
    if (result === "승리!") {
      this.scores.player++;
      this.playerScore.textContent = this.scores.player;
    } else if (result === "패배!") {
      this.scores.computer++;
      this.computerScore.textContent = this.scores.computer;
    }
  }

  updateHistory(playerChoice, computerChoice, result) {
    const li = document.createElement("li");
    const koreanChoices = {
      rock: "바위",
      paper: "보",
      scissors: "가위",
    };

    li.textContent = `플레이어: ${koreanChoices[playerChoice]} vs 컴퓨터: ${koreanChoices[computerChoice]} - ${result}`;
    this.gameHistory.insertBefore(li, this.gameHistory.firstChild);
  }

  play(playerChoice) {
    const computerChoice = this.getComputerChoice();
    this.updateHands(playerChoice, computerChoice);

    const result = this.determineWinner(playerChoice, computerChoice);
    this.gameResult.textContent = result;

    this.updateScore(result);
    this.updateHistory(playerChoice, computerChoice, result);
  }
}

// 게임 인스턴스 생성
window.addEventListener("DOMContentLoaded", () => {
  new RockPaperScissors();
});
