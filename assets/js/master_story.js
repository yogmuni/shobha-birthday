/**
 * Clean, Smooth & Fast Romantic Story Script for Shobha & Himanshu
 * Date: 4th November 2026
 * Features: Auto-surging heart, 4-photo showcase, pure love ending, crackers everywhere
 */

document.addEventListener('DOMContentLoaded', () => {
  let currentStep = 0;
  const steps = [
    document.getElementById('step-0'), // 1-Tap Start
    document.getElementById('step-1'), // Funny Identity Check
    document.getElementById('step-2'), // Auto-Surging Heart Love Meter
    document.getElementById('step-3')  // Grand Finale (Cake + 4 Photos + Royal Love Tribute + Crackers)
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

      // 2. Blast instant fireworks
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
      }, 600);
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
      qFeedback.innerHTML = `<span style="color: #ff3366;">✓ Identity Verified: Queen Shobha! Himanshu completely agrees! 😂💖</span>`;
      setTimeout(() => {
        goToStep(2);
      }, 850);
    });
  }

  // --- STEP 2: Auto-Surging Heart (Tap Once -> Auto-Flows to Finale!) ---
  const heartSvg = document.getElementById('g-heart-svg');
  const meterFill = document.getElementById('meter-gauge-fill');
  const meterText = document.getElementById('meter-level-text');
  const meterReason = document.getElementById('meter-reason-box');
  let heartPumpStarted = false;

  if (heartSvg) {
    heartSvg.addEventListener('click', () => {
      if (heartPumpStarted) return;
      heartPumpStarted = true;

      // Pulse 1
      heartSvg.style.transform = 'scale(1.45)';
      meterFill.style.width = '45%';
      meterText.textContent = 'Himanshu\'s Love: 500% ☀️';
      meterReason.textContent = '"For your sweet smile that fixes my worst days!"';
      if (window.soundFx) window.soundFx.heartGrow(1.1);
      if (window.surpriseFx) surpriseFx.cracker(window.innerWidth / 2, window.innerHeight * 0.45, 50);

      // Pulse 2 (Auto after 650ms)
      setTimeout(() => {
        heartSvg.style.transform = 'scale(2.1)';
        meterFill.style.width = '85%';
        meterText.textContent = 'Himanshu\'s Love: 25,000% 💖';
        meterReason.textContent = '"Because you are my wife, my soulmate, and my forever home!"';
        if (window.soundFx) window.soundFx.heartGrow(1.3);
        if (window.surpriseFx) surpriseFx.cracker(window.innerWidth / 2, window.innerHeight * 0.45, 70);
      }, 700);

      // Pulse 3 - Overflow & Transition (Auto after 1400ms)
      setTimeout(() => {
        heartSvg.style.transform = 'scale(2.8)';
        heartSvg.classList.add('pumping');
        meterFill.style.width = '100%';
        meterText.textContent = '🚨 OVERFLOW: INFINITE LOVE FOREVER! ♾️❤️';
        meterReason.textContent = '"Himanshu\'s love has broken the machine! Moving to your celebration!"';

        if (window.soundFx) window.soundFx.chime();
        if (window.surpriseFx) {
          surpriseFx.megaCrackerShower(7);
          surpriseFx.heartsBurst(window.innerWidth / 2, window.innerHeight * 0.45, 40);
        }

        setTimeout(() => {
          goToStep(3); // Directly opens the Grand Finale!
        }, 1200);
      }, 1500);
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

  // 2. 4-Photo 3D Flipping
  const polaroids = document.querySelectorAll('.polaroid-item-wrap');
  polaroids.forEach(wrap => {
    wrap.addEventListener('click', () => {
      wrap.classList.toggle('flipped');
      if (window.soundFx) window.soundFx.heartbeat();
      if (window.surpriseFx) {
        const rect = wrap.getBoundingClientRect();
        surpriseFx.sparkles(rect.left + rect.width / 2, rect.top + rect.height / 2, 20);
      }
    });
  });

  // 3. Firework Cannon Button
  const cannonBtn = document.getElementById('btn-burst-more-crackers');
  if (cannonBtn) {
    cannonBtn.addEventListener('click', () => {
      if (window.soundFx) window.soundFx.cracker();
      if (window.surpriseFx) {
        surpriseFx.megaCrackerShower(6);
      }
    });
  }

  // 4. Send Love / Kisses Button
  const kissBtn = document.getElementById('btn-finale-kisses');
  if (kissBtn) {
    kissBtn.addEventListener('click', (e) => {
      if (window.soundFx) window.soundFx.chime();
      if (window.surpriseFx) {
        surpriseFx.heartsBurst(e.clientX || window.innerWidth / 2, e.clientY || window.innerHeight / 2, 50);
        surpriseFx.cracker();
      }
      kissBtn.textContent = 'All My Love Sent To Himanshu! 💋❤️';
      setTimeout(() => {
        kissBtn.textContent = '💖 Send Him More Love & Kisses 💋';
      }, 2500);
    });
  }

  // 5. 1-by-1 Photo + Letter Interactive Features
  // a) Photo 3D Flip
  document.querySelectorAll('.btn-photo-flip, .btn-flip-back-close').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const wrap = btn.closest('.polaroid-wrapper');
      if (wrap) {
        wrap.classList.toggle('is-flipped');
        if (window.soundFx) window.soundFx.heartbeat();
        if (window.surpriseFx) {
          const rect = wrap.getBoundingClientRect();
          surpriseFx.sparkles(rect.left + rect.width / 2, rect.top + rect.height / 2, 20);
        }
      }
    });
  });

  // Clicking on polaroid itself (except buttons) can also flip
  document.querySelectorAll('.polaroid-wrapper').forEach(wrap => {
    wrap.addEventListener('click', (e) => {
      if (e.target.closest('button')) return;
      wrap.classList.toggle('is-flipped');
      if (window.soundFx) window.soundFx.heartbeat();
      if (window.surpriseFx) {
        const rect = wrap.getBoundingClientRect();
        surpriseFx.sparkles(rect.left + rect.width / 2, rect.top + rect.height / 2, 18);
      }
    });
  });

  // b) Photo Like Button (+1000 loves, bursts floating hearts)
  document.querySelectorAll('.btn-photo-like').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      let count = parseInt(btn.getAttribute('data-count') || '10000', 10);
      count += 1000;
      btn.setAttribute('data-count', count);
      const label = btn.querySelector('.like-label');
      if (label) label.textContent = `${count.toLocaleString()} Loves ❤️`;

      if (window.soundFx) window.soundFx.chime();
      if (window.surpriseFx) {
        const rect = btn.getBoundingClientRect();
        surpriseFx.heartsBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 25);
      }
    });
  });

  // c) Wax Seal & Secret P.S. Dropdown
  document.querySelectorAll('.btn-toggle-secret-ps, .wax-seal-badge').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const parentCard = trigger.closest('.letter-parchment-card');
      if (parentCard) {
        const psBox = parentCard.querySelector('.secret-ps-box');
        if (psBox) {
          psBox.classList.toggle('open');
          if (psBox.classList.contains('open')) {
            if (window.soundFx) window.soundFx.chime();
            if (window.surpriseFx) {
              const rect = psBox.getBoundingClientRect();
              surpriseFx.sparkles(rect.left + rect.width / 2, rect.top + rect.height / 2, 15);
            }
          }
        }
      }
    });
  });

  // d) Smooth Chapter Navigation & Next Chapter buttons
  document.querySelectorAll('.btn-next-chapter, .chapter-pill').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-target') || btn.getAttribute('href');
      if (targetId) {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          if (window.soundFx) window.soundFx.heartbeat();
          if (window.surpriseFx) {
            surpriseFx.sparkles(window.innerWidth / 2, window.innerHeight * 0.3, 15);
          }
        }
      }
    });
  });
});
