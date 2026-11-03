/**
 * Master Playful Romantic Story Script for Shobha & Himanshu
 * Date: 3rd November 2026
 */

document.addEventListener('DOMContentLoaded', () => {
  let currentStep = 0;
  const steps = [
    document.getElementById('step-0'), // Start & Cracker Screen
    document.getElementById('step-1'), // Playful Quiz
    document.getElementById('step-2'), // Growing Heart Love Meter
    document.getElementById('step-3'), // Forbidden Reverse Psychology Button
    document.getElementById('step-4')  // Grand Finale (Cake + Vinyl + Scratch + Wish Jar + Crackers)
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
      // 1. Play song
      if (window.romanticMusic) {
        window.romanticMusic.play();
      }

      // 2. Blast massive crackers!
      if (window.surpriseFx) {
        surpriseFx.megaCrackerShower(5);
        surpriseFx.confetti(window.innerWidth / 2, window.innerHeight * 0.4, 100);
        surpriseFx.startAmbientCrackers();
      }

      if (window.soundFx) {
        window.soundFx.chime();
      }

      setTimeout(() => {
        goToStep(1);
      }, 900);
    });
  }

  // --- STEP 1: Playful Quiz ---
  const q1A = document.getElementById('btn-q1-a');
  const q1B = document.getElementById('btn-q1-b');
  const q1Feedback = document.getElementById('q1-feedback');
  const q2Section = document.getElementById('quiz-q2-section');

  if (q1A) {
    q1A.addEventListener('click', () => {
      if (window.soundFx) window.soundFx.chime();
      if (window.surpriseFx) surpriseFx.sparkles(window.innerWidth / 2, window.innerHeight * 0.4, 25);
      q1Feedback.innerHTML = `<span style="color: #ff3366;">1000% Correct! There is only one prettiest queen on 3rd November! 💖</span>`;
      setTimeout(() => {
        q2Section.style.display = 'block';
        q2Section.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    });
  }

  if (q1B) {
    q1B.addEventListener('click', () => {
      if (window.soundFx) window.soundFx.pop();
      q1Feedback.innerHTML = `<span style="color: #ff758c;">Wait, did you really click that?! 😂 Nice try, but Himanshu can't pull off that dress! Shobha wins! 👑</span>`;
      setTimeout(() => {
        q2Section.style.display = 'block';
        q2Section.scrollIntoView({ behavior: 'smooth' });
      }, 800);
    });
  }

  // Question 2 Runaway Button
  const q2Yes = document.getElementById('btn-q2-yes');
  const q2No = document.getElementById('btn-q2-no');

  if (q2No) {
    const dodge = () => {
      const maxX = 130;
      const maxY = 70;
      const randX = (Math.random() - 0.5) * maxX * 2;
      const randY = (Math.random() - 0.5) * maxY * 2;
      q2No.style.transform = `translate(${randX}px, ${randY}px)`;
      if (window.soundFx) window.soundFx.pop();
    };
    q2No.addEventListener('mouseenter', dodge);
    q2No.addEventListener('touchstart', (e) => {
      e.preventDefault();
      dodge();
    });
  }

  if (q2Yes) {
    q2Yes.addEventListener('click', () => {
      if (window.soundFx) window.soundFx.chime();
      if (window.surpriseFx) {
        surpriseFx.cracker(window.innerWidth / 2, window.innerHeight * 0.35, 70);
        surpriseFx.heartsBurst(window.innerWidth / 2, window.innerHeight * 0.4, 30);
      }
      setTimeout(() => {
        goToStep(2);
      }, 800);
    });
  }

  // --- STEP 2: Growing Heart & Love Meter ---
  const heartSvg = document.getElementById('g-heart-svg');
  const meterFill = document.getElementById('meter-gauge-fill');
  const meterText = document.getElementById('meter-level-text');
  const meterReason = document.getElementById('meter-reason-box');
  let heartPumpCount = 0;

  const heartLevels = [
    { scale: 1.35, fill: '35%', text: 'Love Level: 250%', reason: '"For the sweet way your smile brightens up my whole life! ☀️"' },
    { scale: 1.85, fill: '65%', text: 'Love Level: 1,500%', reason: '"For understanding my unspoken words and being my peace 🕊️"' },
    { scale: 2.35, fill: '90%', text: 'Love Level: 50,000%', reason: '"Because you are my wife, my soulmate, and my greatest blessing! 💍"' },
    { scale: 3.0, fill: '100%', text: '🚨 CRITICAL OVERFLOW: INFINITY & BEYOND! ♾️💖', reason: '"Himanshu\'s love for Shobha has broken the meter! Infinite love forever!"' }
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
          window.soundFx.heartGrow(1 + heartPumpCount * 0.25);
        }

        if (window.surpriseFx) {
          surpriseFx.heartsBurst(window.innerWidth / 2, window.innerHeight * 0.45, 20 + heartPumpCount * 10);
          surpriseFx.sparkles(window.innerWidth / 2, window.innerHeight * 0.45, 15);
        }

        heartPumpCount++;

        if (heartPumpCount === heartLevels.length) {
          heartSvg.classList.add('pumping');
          if (window.surpriseFx) {
            surpriseFx.megaCrackerShower(6);
          }
          setTimeout(() => {
            goToStep(3);
          }, 1800);
        }
      }
    });
  }

  // --- STEP 3: Forbidden Reverse Psychology Button ---
  const forbiddenBtn = document.getElementById('btn-forbidden');
  let forbiddenClicks = 0;

  if (forbiddenBtn) {
    forbiddenBtn.addEventListener('click', () => {
      forbiddenClicks++;
      if (window.soundFx) window.soundFx.pop();

      if (forbiddenClicks === 1) {
        forbiddenBtn.textContent = 'I said DO NOT CLICK! 🙈';
        forbiddenBtn.style.transform = 'rotate(-5deg) scale(1.05)';
      } else if (forbiddenClicks === 2) {
        forbiddenBtn.textContent = 'Why do you never listen to me?! 😂';
        forbiddenBtn.style.transform = 'rotate(5deg) scale(1.1)';
      } else if (forbiddenClicks >= 3) {
        forbiddenBtn.textContent = 'POOF! You unlocked it! 🪄✨';
        if (window.surpriseFx) {
          surpriseFx.megaCrackerShower(5);
        }
        setTimeout(() => {
          goToStep(4);
        }, 1100);
      }
    });
  }

  // --- STEP 4: Grand Finale (Cake + Turntable + Photos + Scratch + Jar) ---

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
      setTimeout(() => window.soundFx.chime(), 400);
    }

    flames.forEach(f => f.classList.add('blown-out'));
    puffs.forEach(p => p.classList.add('rise'));

    if (window.surpriseFx) {
      setTimeout(() => {
        surpriseFx.megaCrackerShower(8);
        surpriseFx.confetti(window.innerWidth / 2, window.innerHeight * 0.4, 120);
      }, 250);
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
    ctx.fillText('✨ Scratch For Himanshu\'s Promise ✨', width / 2, height / 2 - 4);
    ctx.font = '12px Outfit, sans-serif';
    ctx.fillText('(Use finger or mouse)', width / 2, height / 2 + 18);

    let isScratching = false;
    let revealed = false;

    function scratch(x, y) {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(x, y, 18, 0, Math.PI * 2);
      ctx.fill();

      if (!revealed) {
        const data = ctx.getImageData(0, 0, width, height).data;
        let trans = 0;
        for (let i = 3; i < data.length; i += 16) {
          if (data[i] === 0) trans++;
        }
        if (trans / (data.length / 16) > 0.45) {
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

  // 4. Starlight Wish Jar
  const wishInput = document.getElementById('wish-input-finale');
  const wishBtn = document.getElementById('btn-send-wish-finale');
  const wishesList = document.getElementById('wishes-list-finale');

  if (wishBtn && wishInput) {
    const releaseWish = () => {
      const val = wishInput.value.trim();
      if (!val) return;

      if (window.soundFx) window.soundFx.chime();
      if (window.surpriseFx) {
        surpriseFx.shootingStar();
        surpriseFx.cracker();
      }

      const pill = document.createElement('div');
      pill.className = 'saved-wish-pill';
      pill.innerHTML = `<span>🌟</span> "${val}" — <em>Carried to the stars with Himanshu's love for Shobha ❤️</em>`;
      wishesList.prepend(pill);

      wishInput.value = '';
    };

    wishBtn.addEventListener('click', releaseWish);
    wishInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') releaseWish();
    });
  }

  // 5. Firework Cannon Button
  const cannonBtn = document.getElementById('btn-burst-more-crackers');
  if (cannonBtn) {
    cannonBtn.addEventListener('click', () => {
      if (window.soundFx) window.soundFx.cracker();
      if (window.surpriseFx) {
        surpriseFx.megaCrackerShower(6);
      }
    });
  }

  // 6. Send Kisses Button
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
