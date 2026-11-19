# MSI Games - Battle Arena (Team Red vs Team Blue)

A dual-team smartboard learning game designed for ESL students based on the **Princess Diana** reading passage.

## Features
- **Visual Duel Arena**: Neon red and blue glassmorphism layout with crowns, laurel ribbons, live score badges, and a flashing central lightning bolt.
- **Background Soundtrack**: High-energy game audio with real-time **Music ON / OFF** toggle button and Web Audio synthesized sound effects.
- **Live Running Stopwatch**: Precision timer tracking duel duration down to tenths of a second (`00:00.0`).
- **12 Unique Questions per Team**:
  - **Catch Grammar Mistake**: Students click the error word in the sentence (which pulses with a glowing neon border), type the correct form in the answer blank, and press Submit.
  - **Instant Feedback & Auto-Progression**: Immediate evaluation banner with animated progress bar that transitions to the next question automatically—no Next/Previous buttons required.
  - **Odd One Out**: 2x2 interactive cards based on vocabulary, parts of speech, and passage themes.
  - **Reading Test**: Multiple-choice comprehension questions with immediate scoring.
- **Passage Reference Modal**: One-click slide-over displaying the full Princess Diana text and vocabulary glossary.
- **Smart Winner Calculation**:
  - Most correct answers is superior.
  - In the event of a tie, the fastest team wins.
  - Comprehensive results modal with scores, accuracy %, and time taken.

## Running Locally
Simply open `index.html` in any modern web browser or serve via:
```bash
python3 -m http.server 8089
```
Then navigate to `http://localhost:8089`.
