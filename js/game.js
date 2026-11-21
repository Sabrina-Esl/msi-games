// Game Controller for MSI Games - Team Red vs Team Blue Battle Arena
import { PASSAGE_DATA, TEAM_RED_QUESTIONS, TEAM_BLUE_QUESTIONS } from './data.js';
import { sound } from './audio.js';

class BattleGame {
  constructor() {
    this.timerInterval = null;
    this.startTime = null;
    this.elapsedSeconds = 0;
    this.gameRunning = false;

    this.teams = {
      red: {
        name: "Team Red",
        score: 0,
        currentIndex: 0,
        questions: [...TEAM_RED_QUESTIONS],
        history: [],
        isFinished: false,
        finishTime: null,
        selectedWord: null,
        selectedOption: null
      },
      blue: {
        name: "Team Blue",
        score: 0,
        currentIndex: 0,
        questions: [...TEAM_BLUE_QUESTIONS],
        history: [],
        isFinished: false,
        finishTime: null,
        selectedWord: null,
        selectedOption: null
      }
    };

    this.initDOM();
    this.initEvents();
  }

  initDOM() {
    // Generate ambient sparkles in background
    const sparklesContainer = document.getElementById("ambient-sparkles");
    if (sparklesContainer) {
      sparklesContainer.innerHTML = "";
      for (let i = 0; i < 30; i++) {
        const sp = document.createElement("div");
        sp.className = "sparkle";
        sp.style.left = `${Math.random() * 100}%`;
        sp.style.top = `${Math.random() * 100}%`;
        sp.style.animationDelay = `${(Math.random() * 3).toFixed(2)}s`;
        sp.style.animationDuration = `${(2 + Math.random() * 2).toFixed(2)}s`;
        sparklesContainer.appendChild(sp);
      }
    }
  }

  initEvents() {
    // Music Button
    const musicBtn = document.getElementById("music-toggle-btn");
    if (musicBtn) {
      musicBtn.addEventListener("click", () => {
        sound.playClick();
        sound.toggleMusic();
      });
    }

    // Passage Modal Triggers
    const passageBtn = document.getElementById("open-passage-btn");
    const passageModal = document.getElementById("passage-modal");
    const closePassageBtn = document.getElementById("close-passage-btn");

    if (passageBtn && passageModal) {
      passageBtn.addEventListener("click", () => {
        sound.playClick();
        this.renderPassageModal();
        passageModal.classList.remove("hidden");
      });
    }

    if (closePassageBtn && passageModal) {
      closePassageBtn.addEventListener("click", () => {
        sound.playClick();
        passageModal.classList.add("hidden");
      });
    }

    // Lightning Zap sound when user clicks lightning bolt
    const lightningBtn = document.getElementById("lightning-clash-btn");
    if (lightningBtn) {
      lightningBtn.addEventListener("click", () => {
        sound.playLightning();
      });
    }

    // Results Modal Restart Button
    const restartBtn = document.getElementById("restart-game-btn");
    if (restartBtn) {
      restartBtn.addEventListener("click", () => {
        sound.playClick();
        this.restartGame();
      });
    }

    // Start prompt overlay / audio unlock
    const startOverlay = document.getElementById("start-battle-overlay");
    const startBtn = document.getElementById("start-battle-btn");
    if (startBtn && startOverlay) {
      startBtn.addEventListener("click", () => {
        startOverlay.classList.add("hidden");
        sound.playLightning();
        sound.playMusic();
        this.startGame();
      });
    } else {
      this.startGame();
    }

    // Initialize Virtual Keyboards for Red and Blue teams
    this.initVirtualKeyboards();
  }

  initVirtualKeyboards() {
    ["red", "blue"].forEach(teamKey => {
      const keyboard = document.getElementById(`team-${teamKey}-keyboard`);
      if (!keyboard) return;

      const keys = keyboard.querySelectorAll(".key-btn");
      keys.forEach(btn => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          sound.playClick();

          // Tactile visual feedback
          btn.classList.add("pressed");
          setTimeout(() => btn.classList.remove("pressed"), 120);

          this.handleVirtualKeyPress(teamKey, btn.getAttribute("data-key"));
        });
      });
    });
  }

  handleVirtualKeyPress(teamKey, key) {
    const team = this.teams[teamKey];
    const q = team.questions[team.currentIndex];
    if (!q || q.type !== "grammar") return;

    const inputField = document.getElementById(`${teamKey}-correction-input`);
    const hintElem = document.getElementById(`${teamKey}-selected-hint`);
    const submitBtn = document.getElementById(`${teamKey}-submit-btn`);

    if (!inputField) return;

    if (key === "backspace") {
      inputField.value = inputField.value.slice(0, -1);
      inputField.dispatchEvent(new Event("input", { bubbles: true }));
    } else if (key === "clear") {
      inputField.value = "";
      inputField.dispatchEvent(new Event("input", { bubbles: true }));
    } else if (key === "space") {
      if (!team.selectedWord) {
        if (hintElem) hintElem.innerHTML = "⚠️ <strong style='color:#ffd859;'>Please tap the mistaken word above first!</strong>";
        return;
      }
      inputField.value += " ";
      inputField.dispatchEvent(new Event("input", { bubbles: true }));
    } else if (key === "submit") {
      if (submitBtn && !submitBtn.disabled) {
        submitBtn.click();
      } else if (!team.selectedWord && hintElem) {
        hintElem.innerHTML = "⚠️ <strong style='color:#ffd859;'>Please tap the mistaken word above first!</strong>";
      }
    } else {
      // Alphabetical characters
      if (!team.selectedWord) {
        if (hintElem) {
          hintElem.innerHTML = "⚠️ <strong style='color:#ffd859;'>Please tap the mistaken word in the sentence first!</strong>";
        }
        return;
      }
      inputField.value += key;
      inputField.dispatchEvent(new Event("input", { bubbles: true }));
    }
  }

  startGame() {
    this.gameRunning = true;
    this.startTime = Date.now();
    this.startTimer();
    this.renderQuestion("red");
    this.renderQuestion("blue");
  }

  restartGame() {
    clearInterval(this.timerInterval);
    this.elapsedSeconds = 0;
    this.gameRunning = true;

    // Reset Red
    this.teams.red.score = 0;
    this.teams.red.currentIndex = 0;
    this.teams.red.history = [];
    this.teams.red.isFinished = false;
    this.teams.red.finishTime = null;
    this.teams.red.selectedWord = null;
    this.teams.red.selectedOption = null;

    // Reset Blue
    this.teams.blue.score = 0;
    this.teams.blue.currentIndex = 0;
    this.teams.blue.history = [];
    this.teams.blue.isFinished = false;
    this.teams.blue.finishTime = null;
    this.teams.blue.selectedWord = null;
    this.teams.blue.selectedOption = null;

    // Update Scores
    document.getElementById("team-red-score").textContent = "0";
    document.getElementById("team-blue-score").textContent = "0";

    // Hide Results Modal
    const resultsModal = document.getElementById("results-modal");
    if (resultsModal) resultsModal.classList.add("hidden");

    this.startTime = Date.now();
    this.startTimer();
    this.renderQuestion("red");
    this.renderQuestion("blue");
  }

  startTimer() {
    clearInterval(this.timerInterval);
    const timerElem = document.getElementById("timer-display");
    this.timerInterval = setInterval(() => {
      if (!this.gameRunning) return;
      const now = Date.now();
      this.elapsedSeconds = (now - this.startTime) / 1000;
      if (timerElem) {
        timerElem.textContent = this.formatTime(this.elapsedSeconds);
      }
    }, 100);
  }

  formatTime(totalSec) {
    const mins = Math.floor(totalSec / 60);
    const secs = Math.floor(totalSec % 60);
    const tenths = Math.floor((totalSec % 1) * 10);
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}.${tenths}`;
  }

  renderQuestion(teamKey) {
    const team = this.teams[teamKey];
    const container = document.getElementById(`team-${teamKey}-panel`);
    if (!container) return;

    if (team.currentIndex >= team.questions.length) {
      this.handleTeamFinished(teamKey);
      return;
    }

    const q = team.questions[team.currentIndex];
    team.selectedWord = null;
    team.selectedOption = null;

    let questionHTML = `
      <div class="q-meta-bar">
        <span class="q-progress-pill">Question ${team.currentIndex + 1} / ${team.questions.length}</span>
        <span class="q-type-badge">${q.typeName}</span>
      </div>
      <div class="q-instruction">${q.instruction}</div>
    `;

    // Render based on question type
    if (q.type === "grammar") {
      questionHTML += this.getGrammarTemplate(teamKey, q);
    } else if (q.type === "odd_one_out") {
      questionHTML += this.getOddOneOutTemplate(teamKey, q);
    } else if (q.type === "test") {
      questionHTML += this.getTestTemplate(teamKey, q);
    }

    container.innerHTML = questionHTML;
    this.attachQuestionEvents(teamKey, q);

    // Update Virtual Keyboard state for this team
    const keyboard = document.getElementById(`team-${teamKey}-keyboard`);
    if (keyboard) {
      if (q.type === "grammar") {
        keyboard.classList.add("keyboard-active");
        keyboard.classList.remove("keyboard-dimmed");
      } else {
        keyboard.classList.add("keyboard-dimmed");
        keyboard.classList.remove("keyboard-active");
      }
    }
  }

  getGrammarTemplate(teamKey, q) {
    // Split sentence into words
    const words = q.sentence.split(/\s+/);
    const wordsHTML = words.map((w, idx) => {
      return `<button type="button" class="word-token-btn" data-word="${w}" data-idx="${idx}">${w}</button>`;
    }).join("");

    return `
      <div class="sentence-interactive-box" id="${teamKey}-sentence-box">
        ${wordsHTML}
      </div>
      <div class="grammar-correction-area">
        <div class="mistake-preview-line" id="${teamKey}-selected-hint">
          Click on the mistaken word in the sentence above.
        </div>
        <div class="correction-input-group">
          <input type="text" 
                 class="correction-input-field" 
                 id="${teamKey}-correction-input" 
                 placeholder="Type correct word..." 
                 autocomplete="off" 
                 disabled />
          <button type="button" 
                  class="submit-ans-btn" 
                  id="${teamKey}-submit-btn" 
                  disabled>
            Submit
          </button>
        </div>
      </div>
    `;
  }

  getOddOneOutTemplate(teamKey, q) {
    const optionsHTML = q.options.map(opt => {
      return `<div class="odd-option-card" data-val="${opt}">${opt}</div>`;
    }).join("");

    return `
      <div class="odd-options-grid" id="${teamKey}-odd-grid">
        ${optionsHTML}
      </div>
      <div class="grammar-correction-area">
        <button type="button" 
                class="submit-ans-btn" 
                id="${teamKey}-submit-btn" 
                style="width: 100%;" 
                disabled>
          Submit Selection
        </button>
      </div>
    `;
  }

  getTestTemplate(teamKey, q) {
    const optionsHTML = q.options.map(opt => {
      const letter = opt.trim().charAt(0);
      return `
        <button type="button" class="test-option-btn" data-val="${letter}">
          <span>${opt}</span>
        </button>
      `;
    }).join("");

    return `
      <div class="test-question-prompt">${q.question}</div>
      <div class="test-options-list" id="${teamKey}-test-list">
        ${optionsHTML}
      </div>
      <div class="grammar-correction-area">
        <button type="button" 
                class="submit-ans-btn" 
                id="${teamKey}-submit-btn" 
                style="width: 100%;" 
                disabled>
          Submit Answer
        </button>
      </div>
    `;
  }

  attachQuestionEvents(teamKey, q) {
    const team = this.teams[teamKey];
    const submitBtn = document.getElementById(`${teamKey}-submit-btn`);

    if (q.type === "grammar") {
      const wordBtns = document.querySelectorAll(`#${teamKey}-sentence-box .word-token-btn`);
      const inputField = document.getElementById(`${teamKey}-correction-input`);
      const hintElem = document.getElementById(`${teamKey}-selected-hint`);

      wordBtns.forEach(btn => {
        btn.addEventListener("click", () => {
          sound.playClick();
          wordBtns.forEach(b => b.classList.remove("selected"));
          btn.classList.add("selected");
          team.selectedWord = btn.getAttribute("data-word");

          // Clean word of punctuation for display
          const cleanWord = team.selectedWord.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "");
          hintElem.innerHTML = `Selected Mistake: <strong>"${cleanWord}"</strong>. Now write the correct word below:`;

          inputField.disabled = false;
          inputField.focus();
          submitBtn.disabled = inputField.value.trim().length === 0;
        });
      });

      inputField.addEventListener("input", () => {
        submitBtn.disabled = !team.selectedWord || inputField.value.trim().length === 0;
      });

      inputField.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !submitBtn.disabled) {
          e.preventDefault();
          this.submitAnswer(teamKey, q);
        }
      });

      submitBtn.addEventListener("click", () => {
        this.submitAnswer(teamKey, q);
      });

    } else if (q.type === "odd_one_out") {
      const cards = document.querySelectorAll(`#${teamKey}-odd-grid .odd-option-card`);
      cards.forEach(card => {
        card.addEventListener("click", () => {
          sound.playClick();
          cards.forEach(c => c.classList.remove("selected"));
          card.classList.add("selected");
          team.selectedOption = card.getAttribute("data-val");
          submitBtn.disabled = false;
        });
      });

      submitBtn.addEventListener("click", () => {
        this.submitAnswer(teamKey, q);
      });

    } else if (q.type === "test") {
      const opts = document.querySelectorAll(`#${teamKey}-test-list .test-option-btn`);
      opts.forEach(opt => {
        opt.addEventListener("click", () => {
          sound.playClick();
          opts.forEach(o => o.classList.remove("selected"));
          opt.classList.add("selected");
          team.selectedOption = opt.getAttribute("data-val");
          submitBtn.disabled = false;
        });
      });

      submitBtn.addEventListener("click", () => {
        this.submitAnswer(teamKey, q);
      });
    }
  }

  submitAnswer(teamKey, q) {
    const team = this.teams[teamKey];
    let isCorrect = false;
    let detailMsg = "";

    if (q.type === "grammar") {
      const inputField = document.getElementById(`${teamKey}-correction-input`);
      const typed = inputField ? inputField.value.trim() : "";
      
      // Clean selected word of punctuation
      const cleanSelected = (team.selectedWord || "").replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "").toLowerCase();
      const cleanMistake = q.mistakeWord.toLowerCase();
      const cleanTyped = typed.toLowerCase();
      const cleanExpected = q.correctAnswer.toLowerCase();

      const wordMatch = cleanSelected === cleanMistake;
      const correctionMatch = cleanTyped === cleanExpected;

      if (wordMatch && correctionMatch) {
        isCorrect = true;
        detailMsg = `Great catch! <strong>"${q.mistakeWord}"</strong> was wrong and corrected to <strong>"${q.correctAnswer}"</strong>.`;
      } else if (!wordMatch) {
        isCorrect = false;
        detailMsg = `Wrong word selected! The mistake was <strong>"${q.mistakeWord}"</strong> (should be <strong>"${q.correctAnswer}"</strong>).`;
      } else {
        isCorrect = false;
        detailMsg = `You spotted <strong>"${q.mistakeWord}"</strong>, but the correct form is <strong>"${q.correctAnswer}"</strong>.`;
      }

    } else if (q.type === "odd_one_out") {
      isCorrect = (team.selectedOption || "").toLowerCase() === q.correctAnswer.toLowerCase();
      if (isCorrect) {
        detailMsg = `Correct! <strong>${q.correctAnswer}</strong> was the odd one out. ${q.explanation}`;
      } else {
        detailMsg = `Wrong! The odd one out was <strong>${q.correctAnswer}</strong>. ${q.explanation}`;
      }

    } else if (q.type === "test") {
      isCorrect = (team.selectedOption || "").toUpperCase() === q.correctAnswer.toUpperCase();
      if (isCorrect) {
        detailMsg = `Correct! Choice <strong>${q.correctAnswer}</strong> is right. ${q.explanation}`;
      } else {
        detailMsg = `Wrong! The correct answer was <strong>${q.correctAnswer}</strong>. ${q.explanation}`;
      }
    }

    // Update Score & Sound
    if (isCorrect) {
      team.score += 1;
      sound.playCorrect();
      this.flashScore(teamKey);
    } else {
      sound.playWrong();
    }

    team.history.push({
      questionId: q.id,
      isCorrect,
      explanation: q.explanation
    });

    // Show Instant Feedback and Auto-Advance WITHOUT Next/Previous buttons
    this.showFeedbackOverlay(teamKey, isCorrect, detailMsg, () => {
      team.currentIndex += 1;
      this.renderQuestion(teamKey);
    });
  }

  flashScore(teamKey) {
    const scoreElem = document.getElementById(`team-${teamKey}-score`);
    const cardElem = document.querySelector(`.team-${teamKey}-card`);
    if (scoreElem) {
      scoreElem.textContent = this.teams[teamKey].score;
    }
    if (cardElem) {
      cardElem.classList.remove("scored-flash");
      void cardElem.offsetWidth; // force reflow
      cardElem.classList.add("scored-flash");
    }
  }

  showFeedbackOverlay(teamKey, isCorrect, detailMsg, onDone) {
    const container = document.getElementById(`team-${teamKey}-panel`);
    if (!container) {
      onDone();
      return;
    }

    const overlay = document.createElement("div");
    overlay.className = "feedback-overlay";

    overlay.innerHTML = `
      <div class="feedback-icon">${isCorrect ? "✨" : "❌"}</div>
      <div class="feedback-title ${isCorrect ? "correct" : "wrong"}">
        ${isCorrect ? "CORRECT! (+1)" : "WRONG!"}
      </div>
      <div class="feedback-detail">${detailMsg}</div>
      <div class="auto-advance-indicator">
        <span class="auto-advance-label">Loading next question...</span>
        <div class="auto-advance-bar-bg">
          <div class="auto-advance-bar-fill"></div>
        </div>
      </div>
    `;

    container.appendChild(overlay);

    // Auto Advance after 1.6 seconds without next button
    setTimeout(() => {
      if (overlay.parentNode) {
        overlay.parentNode.removeChild(overlay);
      }
      onDone();
    }, 1600);
  }

  handleTeamFinished(teamKey) {
    const team = this.teams[teamKey];
    team.isFinished = true;
    if (team.finishTime === null) {
      team.finishTime = this.elapsedSeconds;
    }

    const container = document.getElementById(`team-${teamKey}-panel`);
    const keyboard = document.getElementById(`team-${teamKey}-keyboard`);
    if (keyboard) {
      keyboard.classList.add("keyboard-dimmed");
      keyboard.classList.remove("keyboard-active");
    }

    if (container) {
      container.innerHTML = `
        <div class="team-complete-box">
          <div class="team-complete-trophy">🏆</div>
          <h3>${team.name} Completed!</h3>
          <p>Score: <strong>${team.score} / ${team.questions.length}</strong></p>
          <p style="margin-top: 6px;">Finished in ${this.formatTime(team.finishTime)}</p>
          <div style="margin-top: 18px; font-size: 0.85rem; color: #a5b4fc;">
            ${this.bothTeamsFinished() ? "Calculating final duel results..." : "Waiting for the other team to finish..."}
          </div>
        </div>
      `;
    }

    if (this.bothTeamsFinished()) {
      this.gameRunning = false;
      clearInterval(this.timerInterval);
      sound.playVictory();
      setTimeout(() => {
        this.showFinalResults();
      }, 1200);
    }
  }

  bothTeamsFinished() {
    return this.teams.red.isFinished && this.teams.blue.isFinished;
  }

  showFinalResults() {
    const red = this.teams.red;
    const blue = this.teams.blue;

    let winnerHeadline = "";
    let winnerClass = "";
    let winnerReason = "";

    // "the team who has more correct answers and fastest done is the winner, more correct answers are superior"
    if (red.score > blue.score) {
      winnerHeadline = "👑 TEAM RED WINS!";
      winnerClass = "red-win";
      winnerReason = `Team Red achieved more correct answers (${red.score} vs ${blue.score}).`;
    } else if (blue.score > red.score) {
      winnerHeadline = "👑 TEAM BLUE WINS!";
      winnerClass = "blue-win";
      winnerReason = `Team Blue achieved more correct answers (${blue.score} vs ${red.score}).`;
    } else {
      // Tie on scores -> fastest time wins!
      if (red.finishTime < blue.finishTime) {
        winnerHeadline = "👑 TEAM RED WINS (SPEED)!";
        winnerClass = "red-win";
        winnerReason = `Scores were tied (${red.score} - ${blue.score}), but Team Red finished faster (${this.formatTime(red.finishTime)} vs ${this.formatTime(blue.finishTime)}).`;
      } else if (blue.finishTime < red.finishTime) {
        winnerHeadline = "👑 TEAM BLUE WINS (SPEED)!";
        winnerClass = "blue-win";
        winnerReason = `Scores were tied (${blue.score} - ${red.score}), but Team Blue finished faster (${this.formatTime(blue.finishTime)} vs ${this.formatTime(red.finishTime)}).`;
      } else {
        winnerHeadline = "🤝 EPIC TIE!";
        winnerClass = "tie-win";
        winnerReason = `Both teams finished with identical scores (${red.score}) and exact same time!`;
      }
    }

    // Populate Results Modal
    const modal = document.getElementById("results-modal");
    const headlineElem = document.getElementById("results-winner-headline");
    const reasonElem = document.getElementById("results-winner-reason");

    if (headlineElem) {
      headlineElem.textContent = winnerHeadline;
      headlineElem.className = `winner-headline ${winnerClass}`;
    }
    if (reasonElem) {
      reasonElem.textContent = winnerReason;
    }

    // Populate Red Stats
    document.getElementById("res-red-score").textContent = `${red.score} / ${red.questions.length}`;
    document.getElementById("res-red-time").textContent = this.formatTime(red.finishTime);
    document.getElementById("res-red-acc").textContent = `${Math.round((red.score / red.questions.length) * 100)}%`;

    // Populate Blue Stats
    document.getElementById("res-blue-score").textContent = `${blue.score} / ${blue.questions.length}`;
    document.getElementById("res-blue-time").textContent = this.formatTime(blue.finishTime);
    document.getElementById("res-blue-acc").textContent = `${Math.round((blue.score / blue.questions.length) * 100)}%`;

    if (modal) {
      modal.classList.remove("hidden");
    }
  }

  renderPassageModal() {
    const headTitle = document.getElementById("passage-modal-head-title");
    const subtitle = document.getElementById("passage-modal-subtitle");
    const textContainer = document.getElementById("passage-text-content");
    const vocabContainer = document.getElementById("passage-vocab-list");
    const grammarContainer = document.getElementById("passage-grammar-list");

    if (headTitle) {
      headTitle.textContent = `📖 ${PASSAGE_DATA.title}`;
    }

    if (subtitle) {
      subtitle.textContent = PASSAGE_DATA.subtitle || "";
    }

    if (textContainer) {
      textContainer.textContent = PASSAGE_DATA.text;
    }

    if (vocabContainer && PASSAGE_DATA.vocabulary) {
      vocabContainer.innerHTML = PASSAGE_DATA.vocabulary.map(v => `
        <div class="vocab-item">
          <strong>${v.word}</strong>
          <span>${v.def}</span>
        </div>
      `).join("");
    }

    if (grammarContainer && PASSAGE_DATA.grammarFocus) {
      grammarContainer.innerHTML = PASSAGE_DATA.grammarFocus.map(g => `
        <div style="margin-bottom: 8px;">
          <strong style="color: #67e8f9; display: block; font-size: 0.95rem;">${g.rule}</strong>
          <span style="color: #e2e8f0; font-size: 0.9rem; font-style: italic;">e.g., "${g.example}"</span>
        </div>
      `).join("");
    }
  }
}

// Instantiate on DOM load
window.addEventListener("DOMContentLoaded", () => {
  window.battleGame = new BattleGame();
});
