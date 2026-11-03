/**
 * Background Music Controller with Floating Player Widget
 * Handles "Love Me Thoda Aur" (Yaariyan - Arijit Singh)
 */
class RomanticMusicPlayer {
  constructor() {
    this.audio = new Audio();
    this.audio.loop = true;
    this.isPlaying = false;

    this.track = {
      src: 'assets/music/love_me_thoda_aur.mp3',
      fallback: 'assets/music/love_me_thoda_aur.m4a',
      title: 'Love Me Thoda Aur ❤️',
      artist: 'Arijit Singh • Yaariyan'
    };

    this.setupAudio();
    this.injectWidget();
    this.setupGlobalClickToPlay();
  }

  setupAudio() {
    this.audio.src = this.track.src;
    this.audio.volume = 0.85;

    this.audio.addEventListener('error', (e) => {
      console.warn('Audio fallback triggered to m4a', e);
      if (this.track.fallback && this.audio.src !== this.track.fallback) {
        this.audio.src = this.track.fallback;
        if (this.isPlaying) this.audio.play().catch(() => {});
      }
    });

    this.audio.addEventListener('play', () => {
      this.isPlaying = true;
      this.updateWidgetState();
    });

    this.audio.addEventListener('pause', () => {
      this.isPlaying = false;
      this.updateWidgetState();
    });
  }

  setupGlobalClickToPlay() {
    const startAudioOnce = () => {
      if (!this.isPlaying) {
        this.play();
      }
      if (window.soundFx) {
        window.soundFx.init();
      }
      document.removeEventListener('click', startAudioOnce);
      document.removeEventListener('touchstart', startAudioOnce);
    };

    document.addEventListener('click', startAudioOnce, { once: true });
    document.addEventListener('touchstart', startAudioOnce, { once: true });
  }

  play() {
    this.audio.play().then(() => {
      this.isPlaying = true;
      this.updateWidgetState();
    }).catch(err => {
      console.log('Autoplay deferred until user interaction:', err);
    });
  }

  pause() {
    this.audio.pause();
    this.isPlaying = false;
    this.updateWidgetState();
  }

  toggle() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  injectWidget() {
    const widget = document.createElement('div');
    widget.id = 'floating-music-widget';
    widget.innerHTML = `
      <div class="music-disc-wrapper" id="music-toggle-btn" title="Click to Play/Pause">
        <div class="music-disc ${this.isPlaying ? 'spinning' : ''}">
          <div class="disc-grooves"></div>
          <div class="disc-label">🎵</div>
        </div>
        <div class="music-note-float">♪</div>
      </div>
      <div class="music-info-panel" id="music-panel">
        <div class="track-title" id="widget-track-title">${this.track.title}</div>
        <div class="track-artist">${this.track.artist}</div>
      </div>
    `;

    document.body.appendChild(widget);

    document.getElementById('music-toggle-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggle();
    });
  }

  updateWidgetState() {
    const disc = document.querySelector('.music-disc');
    const note = document.querySelector('.music-note-float');
    if (disc) {
      if (this.isPlaying) {
        disc.classList.add('spinning');
        if (note) note.classList.add('floating');
      } else {
        disc.classList.remove('spinning');
        if (note) note.classList.remove('floating');
      }
    }
  }
}

// Auto instantiate on DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
  window.romanticMusic = new RomanticMusicPlayer();
});
