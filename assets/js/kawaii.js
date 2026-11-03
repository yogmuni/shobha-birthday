/**
 * Experience 3: Kawaii Arcade & Starlight Celebration Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Playful Runaway NO Button ---
  const noBtn = document.getElementById('btn-quiz-no');
  const yesBtn = document.getElementById('btn-quiz-yes');
  const quizCard = document.getElementById('quiz-card');
  const celebrationArea = document.getElementById('celebration-content');

  if (noBtn) {
    const moveNoBtn = () => {
      const maxX = 120;
      const maxY = 60;
      const randX = (Math.random() - 0.5) * maxX * 2;
      const randY = (Math.random() - 0.5) * maxY * 2;
      noBtn.style.transform = `translate(${randX}px, ${randY}px)`;
      if (window.soundFx) window.soundFx.pop();
    };

    noBtn.addEventListener('mouseenter', moveNoBtn);
    noBtn.addEventListener('touchstart', (e) => {
      e.preventDefault();
      moveNoBtn();
    });
  }

  if (yesBtn) {
    yesBtn.addEventListener('click', () => {
      if (window.soundFx) window.soundFx.chime();
      if (window.surpriseFx) {
        surpriseFx.confetti(window.innerWidth / 2, window.innerHeight * 0.4, 120);
        surpriseFx.heartsBurst(window.innerWidth / 2, window.innerHeight * 0.4, 50);
      }
      if (window.romanticMusic && !window.romanticMusic.isPlaying) {
        window.romanticMusic.play();
      }

      quizCard.innerHTML = `
        <div style="padding: 10px 0;">
          <h2 style="font-family: 'Sacramento', cursive; font-size: 42px; color: #ff4071;">I Knew It, Shobha! 💖</h2>
          <p style="font-family: 'Caveat', cursive; font-size: 24px; color: #382c31; margin-top: 6px;">
            The universe only made one girl as pure, beautiful, and cute as you — and you are my wife! ❤️
          </p>
        </div>
      `;

      if (celebrationArea) {
        celebrationArea.style.display = 'block';
        celebrationArea.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // --- 3D Card Parallax Tilt Effect ---
  const tiltCards = document.querySelectorAll('.tilt-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -12;
      const rotateY = ((x - centerX) / centerX) * 12;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });

    card.addEventListener('click', (e) => {
      if (window.soundFx) window.soundFx.heartbeat();
      if (window.surpriseFx) {
        surpriseFx.heartsBurst(e.clientX, e.clientY, 20);
      }
    });
  });

  // --- Starlight Wish Jar ---
  const wishInput = document.getElementById('wish-input');
  const sendWishBtn = document.getElementById('btn-send-wish');
  const wishesList = document.getElementById('wishes-saved-list');

  if (sendWishBtn && wishInput) {
    const handleSendWish = () => {
      const text = wishInput.value.trim();
      if (!text) return;

      if (window.soundFx) window.soundFx.chime();
      if (window.surpriseFx) {
        // Create shooting stars / sparkles burst
        for (let i = 0; i < 3; i++) {
          setTimeout(() => {
            surpriseFx.sparkles(
              Math.random() * window.innerWidth,
              Math.random() * (window.innerHeight * 0.5),
              25
            );
          }, i * 200);
        }
        surpriseFx.heartsBurst(window.innerWidth / 2, window.innerHeight * 0.6, 25);
      }

      // Add to saved wishes container
      const pill = document.createElement('div');
      pill.className = 'saved-wish-pill';
      pill.innerHTML = `<span>🌟</span> "${text}" — <em>Carried to the stars by Himanshu's love for Shobha ❤️</em>`;
      wishesList.prepend(pill);

      wishInput.value = '';
    };

    sendWishBtn.addEventListener('click', handleSendWish);
    wishInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleSendWish();
    });
  }

  // --- Fireworks Cannon Button ---
  const fwBtn = document.getElementById('btn-trigger-fireworks');
  if (fwBtn) {
    fwBtn.addEventListener('click', () => {
      if (window.soundFx) window.soundFx.pop();
      if (window.surpriseFx) {
        for (let i = 0; i < 5; i++) {
          setTimeout(() => {
            surpriseFx.firework();
          }, i * 250);
        }
      }
    });
  }
});

