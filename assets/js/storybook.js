/**
 * Experience 1: The Romantic Storybook & Interactive Surprise (KoiKoi Edition)
 */

document.addEventListener('DOMContentLoaded', () => {
  let currentStage = 0;
  const stages = [
    document.getElementById('stage-0'), // Envelope
    document.getElementById('stage-1'), // Birthday Cake
    document.getElementById('stage-2'), // Balloon Popping
    document.getElementById('stage-3'), // Polaroids
    document.getElementById('stage-4')  // Love Letter
  ];

  function goToStage(index) {
    if (stages[currentStage]) {
      stages[currentStage].classList.remove('active');
    }
    currentStage = index;
    if (stages[currentStage]) {
      stages[currentStage].classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // --- STAGE 0: Envelope Opening ---
  const envelope = document.getElementById('envelope');
  if (envelope) {
    envelope.addEventListener('click', () => {
      if (window.soundFx) window.soundFx.openEnvelope();
      envelope.classList.add('open');

      if (window.surpriseFx) {
        surpriseFx.heartsBurst(window.innerWidth / 2, window.innerHeight / 2, 25);
      }

      if (window.romanticMusic && !window.romanticMusic.isPlaying) {
        window.romanticMusic.play();
      }

      setTimeout(() => {
        goToStage(1);
      }, 1100);
    });
  }

  // --- STAGE 1: Birthday Cake Candles ---
  const flames = document.querySelectorAll('.flame');
  const puffs = document.querySelectorAll('.smoke-puff');
  const blowBtn = document.getElementById('btn-blow-candles');
  const afterBlowSection = document.getElementById('after-cake-section');
  let candlesBlown = false;

  function blowOutCandles() {
    if (candlesBlown) return;
    candlesBlown = true;

    if (window.soundFx) {
      window.soundFx.blowCandle();
      setTimeout(() => {
        if (window.soundFx) window.soundFx.chime();
      }, 500);
    }

    flames.forEach(f => f.classList.add('blown-out'));
    puffs.forEach(p => p.classList.add('rise'));

    if (window.surpriseFx) {
      setTimeout(() => {
        surpriseFx.confetti(window.innerWidth / 2, window.innerHeight * 0.45, 110);
        surpriseFx.heartsBurst(window.innerWidth / 2, window.innerHeight * 0.45, 40);
      }, 300);
    }

    if (blowBtn) blowBtn.style.display = 'none';
    if (afterBlowSection) {
      setTimeout(() => {
        afterBlowSection.style.display = 'block';
        afterBlowSection.classList.add('animate__animated', 'animate__fadeIn');
      }, 800);
    }
  }

  if (blowBtn) blowBtn.addEventListener('click', blowOutCandles);
  flames.forEach(f => f.addEventListener('click', blowOutCandles));

  const cakeNextBtn = document.getElementById('btn-cake-next');
  if (cakeNextBtn) {
    cakeNextBtn.addEventListener('click', () => goToStage(2));
  }

  // --- STAGE 2: Balloon Popping Game ---
  const balloons = document.querySelectorAll('.balloon-item');
  const afterBalloonsBtn = document.getElementById('btn-balloons-next');
  let poppedCount = 0;

  balloons.forEach((balloon) => {
    balloon.addEventListener('click', function () {
      const bubble = this.querySelector('.balloon-bubble');
      const card = this.querySelector('.balloon-revealed-card');

      if (bubble.style.display !== 'none') {
        bubble.style.display = 'none';
        this.querySelector('.balloon-string').style.display = 'none';
        card.style.display = 'block';
        poppedCount++;

        if (window.soundFx) window.soundFx.pop();

        const rect = this.getBoundingClientRect();
        if (window.surpriseFx) {
          surpriseFx.confetti(rect.left + rect.width / 2, rect.top + rect.height / 2, 35);
          surpriseFx.sparkles(rect.left + rect.width / 2, rect.top + rect.height / 2, 20);
        }

        if (poppedCount === balloons.length) {
          setTimeout(() => {
            if (window.soundFx) window.soundFx.chime();
            if (window.surpriseFx) surpriseFx.heartsBurst(window.innerWidth / 2, window.innerHeight / 2, 50);
            if (afterBalloonsBtn) afterBalloonsBtn.style.display = 'inline-flex';
          }, 600);
        }
      }
    });
  });

  if (afterBalloonsBtn) {
    afterBalloonsBtn.addEventListener('click', () => goToStage(3));
  }

  // --- STAGE 3: Polaroid Flipping ---
  const polaroids = document.querySelectorAll('.polaroid-card');
  polaroids.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
      if (window.soundFx) window.soundFx.heartbeat();
    });
  });

  const polaroidsNextBtn = document.getElementById('btn-polaroids-next');
  if (polaroidsNextBtn) {
    polaroidsNextBtn.addEventListener('click', () => {
      goToStage(4);
      startTypewriterLetter();
    });
  }

  // --- STAGE 4: Typewriter Love Letter ---
  const letterBody = document.getElementById('typewriter-letter-body');
  const kissesBtn = document.getElementById('btn-send-kisses');
  let typewriterStarted = false;

  const letterText = `Happy Birthday to the most extraordinary, beautiful woman in the world, my wife Shobha! ❤️

From the very first day you walked into my life, you brought colors I never knew existed. You are my safe place, my biggest laughter, and my dearest dream come true.

Seeing you smile makes every ordinary day feel like magic. You are my wife, my soulmate, and the one I want to wake up next to every single morning and celebrate every birthday with for the rest of eternity.

On this special day, I wish you all the happiness, joy, and peace your pure heart deserves. May all your dreams take flight, and remember that whatever tomorrow brings, you will always have me by your side, holding your hand and loving you more with every heartbeat.

Happy Birthday, my beautiful wife Shobha. Always and forever yours.`;

  function startTypewriterLetter() {
    if (typewriterStarted || !letterBody) return;
    typewriterStarted = true;
    letterBody.textContent = '';
    let i = 0;
    const speed = 25;

    function typeChar() {
      if (i < letterText.length) {
        letterBody.textContent += letterText.charAt(i);
        i++;
        setTimeout(typeChar, speed);
      } else {
        if (window.surpriseFx) {
          surpriseFx.confetti(window.innerWidth / 2, window.innerHeight / 2, 60);
          surpriseFx.heartsBurst(window.innerWidth / 2, window.innerHeight * 0.3, 30);
        }
      }
    }
    typeChar();
  }

  if (kissesBtn) {
    kissesBtn.addEventListener('click', (e) => {
      if (window.soundFx) window.soundFx.chime();
      if (window.surpriseFx) {
        surpriseFx.heartsBurst(e.clientX || window.innerWidth / 2, e.clientY || window.innerHeight / 2, 45);
      }
      kissesBtn.innerHTML = 'Sent With Endless Love! 💋❤️';
      setTimeout(() => {
        kissesBtn.innerHTML = 'Send Him More Kisses 💋';
      }, 2500);
    });
  }
});

