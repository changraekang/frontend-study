class MathQuiz {
  constructor() {
    this.question = document.getElementById("question");
    this.optionsContainer = document.getElementById("options");
    this.nextBtn = document.getElementById("nextBtn");
    this.currentAnswer = null;

    this.nextBtn.addEventListener("click", () => this.generateQuestion());
    this.generateQuestion();
  }

  generateQuestion() {
    // 두 개의 랜덤 숫자 생성 (1-50)
    const num1 = Math.floor(Math.random() * 50) + 1;
    const num2 = Math.floor(Math.random() * 50) + 1;
    this.currentAnswer = num1 + num2;

    // 문제 표시
    this.question.textContent = `문제: ${num1} + ${num2} = ?`;

    // 보기 생성
    const wrongAnswer1 =
      this.currentAnswer + Math.floor(Math.random() * 10) + 1;
    const wrongAnswer2 =
      this.currentAnswer - Math.floor(Math.random() * 10) - 1;
    const options = [
      this.currentAnswer,
      wrongAnswer1,
      wrongAnswer2,
      "정답 없음",
    ];

    // 보기 섞기
    this.shuffleArray(options);

    // 옵션 버튼 생성
    this.optionsContainer.innerHTML = "";
    options.forEach((option) => {
      const button = document.createElement("button");
      button.className = "option";
      button.textContent = option;
      button.addEventListener("click", () => this.checkAnswer(option, button));
      this.optionsContainer.appendChild(button);
    });

    // 다음 문제 버튼 숨기기
    this.nextBtn.style.display = "none";
  }

  checkAnswer(selectedAnswer, button) {
    const options = document.querySelectorAll(".option");
    options.forEach((opt) => (opt.disabled = true));

    if (selectedAnswer === this.currentAnswer) {
      button.classList.add("correct");
    } else {
      button.classList.add("wrong");
      options.forEach((opt) => {
        if (opt.textContent == this.currentAnswer) {
          opt.classList.add("correct");
        }
      });
    }

    this.nextBtn.style.display = "inline-block";
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}

// 퀴즈 시작
window.onload = () => new MathQuiz();
