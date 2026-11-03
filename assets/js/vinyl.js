/**
 * Experience 2: Vintage Vinyl & Fairy Light Aesthetic Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Turntable Controls ---
  const turntableDeck = document.getElementById('turntable-deck');
  const vinylRecord = document.getElementById('vinyl-record');
  const tonearm = document.getElementById('tonearm');
  const playBtn = document.getElementById('btn-vinyl-play');
  const vBars = document.querySelectorAll('.v-bar');

  function updateVinylUI(isPlaying) {
    if (isPlaying) {
      if (vinylRecord) vinylRecord.classList.add('spinning');
      if (tonearm) tonearm.classList.add('playing');
      vBars.forEach(b => b.classList.add('active'));
      if (playBtn) playBtn.innerHTML = 'Pause The Record ⏸️';
    } else {
      if (vinylRecord) vinylRecord.classList.remove('spinning');
      if (tonearm) tonearm.classList.remove('playing');
      vBars.forEach(b => b.classList.remove('active'));
      if (playBtn) playBtn.innerHTML = 'Spin Our Song 🎵';
    }
  }

  function toggleMusic() {
    if (window.romanticMusic) {
      window.romanticMusic.toggle();
      updateVinylUI(window.romanticMusic.isPlaying);
      if (window.surpriseFx && window.romanticMusic.isPlaying) {
        surpriseFx.sparkles(window.innerWidth / 2, window.innerHeight * 0.6, 20);
      }
    }
  }

  if (playBtn) playBtn.addEventListener('click', toggleMusic);
  if (turntableDeck) turntableDeck.addEventListener('click', toggleMusic);

  // Sync with global music player events
  setTimeout(() => {
    if (window.romanticMusic) {
      window.romanticMusic.audio.addEventListener('play', () => updateVinylUI(true));
      window.romanticMusic.audio.addEventListener('pause', () => updateVinylUI(false));
      updateVinylUI(window.romanticMusic.isPlaying);
    }
  }, 300);

  // --- Interactive Scratch Card ---
  const canvas = document.getElementById('scratch-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    const width = (canvas.width = canvas.offsetWidth || 320);
    const height = (canvas.height = canvas.offsetHeight || 160);

    // Fill with metallic silver-pink scratch layer
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#c4b5c7');
    gradient.addColorStop(0.5, '#e4d3e7');
    gradient.addColorStop(1, '#a695aa');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Text on scratch surface
    ctx.font = 'bold 16px Outfit, sans-serif';
    ctx.fillStyle = '#4a384f';
    ctx.textAlign = 'center';
    ctx.fillText('✨ Scratch Here With Love ✨', width / 2, height / 2 - 5);
    ctx.font = '12px Outfit, sans-serif';
    ctx.fillStyle = '#6b5871';
    ctx.fillText('(Use finger or mouse)', width / 2, height / 2 + 18);

    let isScratching = false;
    let scratchedEnough = false;

    function scratch(x, y) {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(x, y, 18, 0, Math.PI * 2);
      ctx.fill();

      if (!scratchedEnough) {
        checkScratchPercentage();
      }
    }

    function checkScratchPercentage() {
      // Sample pixels
      const imageData = ctx.getImageData(0, 0, width, height);
      const pixels = imageData.data;
      let transparentPixels = 0;
      for (let i = 3; i < pixels.length; i += 16) {
        if (pixels[i] === 0) transparentPixels++;
      }
      const totalSampled = pixels.length / 16;
      if (transparentPixels / totalSampled > 0.45) {
        scratchedEnough = true;
        canvas.style.transition = 'opacity 0.6s ease';
        canvas.style.opacity = '0';
        setTimeout(() => { canvas.style.display = 'none'; }, 600);

        if (window.soundFx) window.soundFx.chime();
        if (window.surpriseFx) {
          surpriseFx.confetti(window.innerWidth / 2, window.innerHeight * 0.7, 70);
          surpriseFx.heartsBurst(window.innerWidth / 2, window.innerHeight * 0.7, 35);
        }
      }
    }

    function getCoords(e) {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return {
        x: clientX - rect.left,
        y: clientY - rect.top
      };
    }

    canvas.addEventListener('mousedown', (e) => {
      isScratching = true;
      const pos = getCoords(e);
      scratch(pos.x, pos.y);
    });

    window.addEventListener('mouseup', () => { isScratching = false; });

    canvas.addEventListener('mousemove', (e) => {
      if (!isScratching) return;
      const pos = getCoords(e);
      scratch(pos.x, pos.y);
    });

    // Touch events for mobile
    canvas.addEventListener('touchstart', (e) => {
      isScratching = true;
      const pos = getCoords(e);
      scratch(pos.x, pos.y);
    }, { passive: true });

    canvas.addEventListener('touchmove', (e) => {
      if (!isScratching) return;
      const pos = getCoords(e);
      scratch(pos.x, pos.y);
    }, { passive: true });

    window.addEventListener('touchend', () => { isScratching = false; });
  }

  // --- Photo Spotlight on Click ---
  const hangingPhotos = document.querySelectorAll('.hanging-photo-item');
  hangingPhotos.forEach(item => {
    item.addEventListener('click', (e) => {
      if (window.soundFx) window.soundFx.heartbeat();
      if (window.surpriseFx) {
        const rect = item.getBoundingClientRect();
        surpriseFx.sparkles(rect.left + rect.width / 2, rect.top + rect.height / 2, 25);
      }
    });
  });
});

