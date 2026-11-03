/**
 * Clean, Fast & High-Reward Romantic Story Script for Shobha & Himanshu
 * Date: 3rd November 2026
 */

document.addEventListener('DOMContentLoaded', () => {
  let currentStep = 0;
  const steps = [
    document.getElementById('step-0'), // Start & Cracker Screen
    document.getElementById('step-1'), // Funny Identity Check
    document.getElementById('step-2'), // Growing Heart Love Meter
    document.getElementById('step-3')  // Grand Finale (Cake + Photos + Scratch + Crackers)
  ];

  function goToStep(index) {
    if (steps[currentStep]) {
      steps[currentStep].classList.remove('active');
    }
    currentStep = index;
    if (steps[currentStep]) {
      steps[currentStep].classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // --- STEP 0: Tap to Start & Immediate Cracker Blast ---
  const startBtn = document.getElementById('btn-main-start');
  if (startBtn) {
    startBtn.addEventListener('click', () => {
      // Start song
      if (window.romanticMusic) {
        window.romanticMusic.play();
      }

      // Blast instant crackers
      if (window.surpriseFx) {
        surpriseFx.megaCrackerShower(5);
        surpriseFx.confetti(window.innerWidth / 2, window.innerHeight * 0.4, 90);
        surpriseFx.startAmbientCrackers();
      }

      if (window.soundFx) {
        window.soundFx.chime();
      }

      setTimeout(() => {
        goToStep(1);
      }, 700);
    });
  }

  // --- STEP 1: Funny Himanshu Question (Runaway NO button) ---
  const qYes = document.getElementById('btn-q-yes');
  const qNo = document.getElementById('btn-q-no');
  const qFeedback = document.getElementById('q-feedback');

  if (qNo) {
    const dodge = () => {
      const maxX = 120;
      const maxY = 60;
      const randX = (Math.random() - 0.5) * maxX * 2;
      const randY = (Math.random() - 0.5) * maxY * 2;
      qNo.style.transform = `translate(${randX}px, ${randY}px)`;
      if (window.soundFx) window.soundFx.pop();
    };
    qNo.addEventListener('mouseenter', dodge);
    qNo.addEventListener('touchstart', (e) => {
      e.preventDefault();
      dodge();
    });
  }

  if (qYes) {
    qYes.addEventListener('click', () => {
      if (window.soundFx) window.soundFx.chime();
      if (window.surpriseFx) {
        surpriseFx.cracker(window.innerWidth / 2, window.innerHeight * 0.35, 75);
        surpriseFx.heartsBurst(window.innerWidth / 2, window.innerHeight * 0.4, 30);
      }
      qFeedback.innerHTML = `<span style="color: #ff3366;">✓ Verified: 100% Certified Queen Shobha! Himanshu agrees! 😂💖</span>`;
      setTimeout(() => {
        goToStep(2);
      }, 900);
    });
  }

  // --- STEP 2: Growing Heart & Love Meter (Fast 3-click growth with BIG cracker payoff) ---
  const heartSvg = document.getElementById('g-heart-svg');
  const meterFill = document.getElementById('meter-gauge-fill');
  const meterText = document.getElementById('meter-level-text');
  const meterReason = document.getElementById('meter-reason-box');
  let heartPumpCount = 0;

  const heartLevels = [
    { scale: 1.45, fill: '40%', text: 'Himanshu\'s Love: 500% ☀️', reason: '"For that infectious smile that brightens up my whole life!"' },
    { scale: 2.1, fill: '80%', text: 'Himanshu\'s Love: 15,000% 💖', reason: '"Because you are my wife, my soulmate, and my forever home!"' },
    { scale: 2.8, fill: '100%', text: '🚨 CRITICAL OVERFLOW: INFINITY & BEYOND! ♾️❤️', reason: '"Himanshu\'s love has officially broken the machine! Pure infinity!"' }
  ];

  if (heartSvg) {
    heartSvg.addEventListener('click', () => {
      if (heartPumpCount < heartLevels.length) {
        const lvl = heartLevels[heartPumpCount];
        heartSvg.style.transform = `scale(${lvl.scale})`;
        meterFill.style.width = lvl.fill;
        meterText.textContent = lvl.text;
        meterReason.textContent = lvl.reason;

        if (window.soundFx) {
          window.soundFx.heartGrow(1 + heartPumpCount * 0.3);
        }

        if (window.surpriseFx) {
          surpriseFx.cracker(window.innerWidth / 2, window.innerHeight * 0.45, 60);
          surpriseFx.heartsBurst(window.innerWidth / 2, window.innerHeight * 0.45, 25);
        }

        heartPumpCount++;

        if (heartPumpCount === heartLevels.length) {
          heartSvg.classList.add('pumping');
          if (window.surpriseFx) {
            surpriseFx.megaCrackerShower(7);
          }
          setTimeout(() => {
            goToStep(3); // Direct to Finale!
          }, 1400);
        }
      }
    });
  }

  // --- STEP 3: Grand Celebration Finale ---

  // 1. Birthday Cake Candles
  const flames = document.querySelectorAll('.flame');
  const puffs = document.querySelectorAll('.smoke-puff');
  const blowBtn = document.getElementById('btn-blow-candles-finale');
  const afterCakeBanner = document.getElementById('after-cake-banner');
  let cakeBlown = false;

  function blowFinaleCandles() {
    if (cakeBlown) return;
    cakeBlown = true;

    if (window.soundFx) {
      window.soundFx.blowCandle();
      setTimeout(() => window.soundFx.chime(), 350);
    }

    flames.forEach(f => f.classList.add('blown-out'));
    puffs.forEach(p => p.classList.add('rise'));

    if (window.surpriseFx) {
      setTimeout(() => {
        surpriseFx.megaCrackerShower(8);
        surpriseFx.confetti(window.innerWidth / 2, window.innerHeight * 0.4, 110);
      }, 200);
    }

    if (blowBtn) blowBtn.style.display = 'none';
    if (afterCakeBanner) {
      afterCakeBanner.style.display = 'block';
    }
  }

  if (blowBtn) blowBtn.addEventListener('click', blowFinaleCandles);
  flames.forEach(f => f.addEventListener('click', blowFinaleCandles));

  // 2. 3D Polaroid Flipping
  const polaroids = document.querySelectorAll('.polaroid-card');
  polaroids.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
      if (window.soundFx) window.soundFx.heartbeat();
      if (window.surpriseFx) {
        const rect = card.getBoundingClientRect();
        surpriseFx.sparkles(rect.left + rect.width / 2, rect.top + rect.height / 2, 20);
      }
    });
  });

  // 3. Scratch Card
  const canvas = document.getElementById('scratch-canvas-finale');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    const width = (canvas.width = canvas.offsetWidth || 320);
    const height = (canvas.height = canvas.offsetHeight || 160);

    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, '#d4af37');
    grad.addColorStop(0.5, '#f9e79f');
    grad.addColorStop(1, '#b7950b');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    ctx.font = 'bold 15px Outfit, sans-serif';
    ctx.fillStyle = '#4a235a';
    ctx.textAlign = 'center';
    ctx.fillText('✨ Scratch For Himanshu\'s Note ✨', width / 2, height / 2 - 4);
    ctx.font = '12px Outfit, sans-serif';
    ctx.fillText('(Use finger or mouse)', width / 2, height / 2 + 18);

    let isScratching = false;
    let revealed = false;

    function scratch(x, y) {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(x, y, 20, 0, Math.PI * 2);
      ctx.fill();

      if (!revealed) {
        const data = ctx.getImageData(0, 0, width, height).data;
        let trans = 0;
        for (let i = 3; i < data.length; i += 16) {
          if (data[i] === 0) trans++;
        }
        if (trans / (data.length / 16) > 0.4) {
          revealed = true;
          canvas.style.transition = 'opacity 0.6s ease';
          canvas.style.opacity = '0';
          setTimeout(() => { canvas.style.display = 'none'; }, 600);
          if (window.soundFx) window.soundFx.chime();
          if (window.surpriseFx) {
            surpriseFx.megaCrackerShower(5);
            surpriseFx.heartsBurst(window.innerWidth / 2, window.innerHeight * 0.7, 40);
          }
        }
      }
    }

    function getCoords(e) {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return { x: clientX - rect.left, y: clientY - rect.top };
    }

    canvas.addEventListener('mousedown', (e) => {
      isScratching = true;
      const p = getCoords(e);
      scratch(p.x, p.y);
    });
    window.addEventListener('mouseup', () => { isScratching = false; });
    canvas.addEventListener('mousemove', (e) => {
      if (!isScratching) return;
      const p = getCoords(e);
      scratch(p.x, p.y);
    });
    canvas.addEventListener('touchstart', (e) => {
      isScratching = true;
      const p = getCoords(e);
      scratch(p.x, p.y);
    }, { passive: true });
    canvas.addEventListener('touchmove', (e) => {
      if (!isScratching) return;
      const p = getCoords(e);
      scratch(p.x, p.y);
    }, { passive: true });
    window.addEventListener('touchend', () => { isScratching = false; });
  }

  // 4. Firework Cannon Button
  const cannonBtn = document.getElementById('btn-burst-more-crackers');
  if (cannonBtn) {
    cannonBtn.addEventListener('click', () => {
      if (window.soundFx) window.soundFx.cracker();
      if (window.surpriseFx) {
        surpriseFx.megaCrackerShower(6);
      }
    });
  }

  // 5. Kiss Button
  const kissBtn = document.getElementById('btn-finale-kisses');
  if (kissBtn) {
    kissBtn.addEventListener('click', (e) => {
      if (window.soundFx) window.soundFx.chime();
      if (window.surpriseFx) {
        surpriseFx.heartsBurst(e.clientX || window.innerWidth / 2, e.clientY || window.innerHeight / 2, 45);
      }
      kissBtn.textContent = 'Sent With Endless Love! 💋❤️';
      setTimeout(() => {
        kissBtn.textContent = 'Send Him More Kisses 💋';
      }, 2500);
    });
  }
});
