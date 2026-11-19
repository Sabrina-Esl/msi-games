// Audio Manager for MSI Games Battle Arena
// Controls background music and synthesizes real-time sound effects via Web Audio API

class SoundManager {
  constructor() {
    this.musicOn = true;
    this.sfxOn = true;
    this.audioCtx = null;
    this.bgMusic = null;
    this.musicPlaying = false;
    this.initAudio();
  }

  initAudio() {
    // Create Audio Element for Background Music
    this.bgMusic = new Audio();
    this.bgMusic.loop = true;
    this.bgMusic.volume = 0.45;

    // Support both mp3 and m4a
    const sourceMp3 = document.createElement("source");
    sourceMp3.src = "assets/audio/game-music.mp3";
    sourceMp3.type = "audio/mpeg";

    const sourceM4a = document.createElement("source");
    sourceM4a.src = "assets/audio/game-music.m4a";
    sourceM4a.type = "audio/mp4";

    this.bgMusic.appendChild(sourceMp3);
    this.bgMusic.appendChild(sourceM4a);
  }

  ensureAudioContext() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }
  }

  playMusic() {
    if (!this.musicOn) return;
    this.ensureAudioContext();
    this.bgMusic.play().then(() => {
      this.musicPlaying = true;
      this.updateMusicUI(true);
    }).catch(err => {
      console.warn("Autoplay blocked or waiting for user interaction:", err);
      this.musicPlaying = false;
      this.updateMusicUI(false);
    });
  }

  pauseMusic() {
    if (this.bgMusic) {
      this.bgMusic.pause();
      this.musicPlaying = false;
      this.updateMusicUI(false);
    }
  }

  toggleMusic() {
    this.musicOn = !this.musicOn;
    if (this.musicOn) {
      this.playMusic();
    } else {
      this.pauseMusic();
    }
    return this.musicOn;
  }

  updateMusicUI(isPlaying) {
    const musicBtn = document.getElementById("music-toggle-btn");
    if (!musicBtn) return;
    if (this.musicOn && isPlaying) {
      musicBtn.classList.add("playing");
      musicBtn.innerHTML = `
        <span class="music-icon">🎵</span>
        <span class="music-text">Music: <strong>ON</strong></span>
        <span class="sound-wave"><span></span><span></span><span></span></span>
      `;
    } else {
      musicBtn.classList.remove("playing");
      musicBtn.innerHTML = `
        <span class="music-icon">🔇</span>
        <span class="music-text">Music: <strong>OFF</strong></span>
      `;
    }
  }

  // Synthesized Sound Effects
  playCorrect() {
    if (!this.sfxOn) return;
    this.ensureAudioContext();
    if (!this.audioCtx) return;

    const ctx = this.audioCtx;
    const now = ctx.currentTime;

    // Bright ascending 3-tone arpeggio
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);

      gain.gain.setValueAtTime(0, now + idx * 0.08);
      gain.gain.linearRampToValueAtTime(0.2, now + idx * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.3);
    });
  }

  playWrong() {
    if (!this.sfxOn) return;
    this.ensureAudioContext();
    if (!this.audioCtx) return;

    const ctx = this.audioCtx;
    const now = ctx.currentTime;

    // Low buzz tone
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.linearRampToValueAtTime(120, now + 0.35);

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.42);
  }

  playClick() {
    if (!this.sfxOn) return;
    this.ensureAudioContext();
    if (!this.audioCtx) return;

    const ctx = this.audioCtx;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(400, now + 0.04);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.05);
  }

  playLightning() {
    if (!this.sfxOn) return;
    this.ensureAudioContext();
    if (!this.audioCtx) return;

    const ctx = this.audioCtx;
    const now = ctx.currentTime;

    // Noise buffer for electric zap
    const bufferSize = ctx.sampleRate * 0.25;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(1500, now);
    filter.Q.setValueAtTime(3, now);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start(now);
    noise.stop(now + 0.25);
  }

  playVictory() {
    if (!this.sfxOn) return;
    this.ensureAudioContext();
    if (!this.audioCtx) return;

    const ctx = this.audioCtx;
    const now = ctx.currentTime;
    // Fanfare chord progression
    const notes = [
      { f: 523.25, t: 0.0, d: 0.18 }, // C5
      { f: 659.25, t: 0.18, d: 0.18 }, // E5
      { f: 783.99, t: 0.36, d: 0.18 }, // G5
      { f: 1046.50, t: 0.54, d: 0.6 } // C6
    ];

    notes.forEach(n => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(n.f, now + n.t);
      gain.gain.setValueAtTime(0.25, now + n.t);
      gain.gain.exponentialRampToValueAtTime(0.001, now + n.t + n.d);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + n.t);
      osc.stop(now + n.t + n.d);
    });
  }
}

export const sound = new SoundManager();
