/**
 * High-performance, lightweight canvas particle engine
 * Supports: Crackers, Fireworks, Confetti, Floating Hearts, and Shooting Stars
 */
class SurpriseEffects {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'fx-canvas';
    this.canvas.style.position = 'fixed';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.width = '100vw';
    this.canvas.style.height = '100vh';
    this.canvas.style.pointerEvents = 'none';
    this.canvas.style.zIndex = '99999';
    document.body.appendChild(this.canvas);

    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.running = false;
    this.crackerInterval = null;

    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  // Realistic Fireworks / Cracker Explosion
  cracker(x = Math.random() * (this.width * 0.8) + (this.width * 0.1), y = Math.random() * (this.height * 0.5) + 60, count = 80) {
    const palette = [
      ['#ff4d8d', '#ff758c', '#ffffff'],
      ['#ffd700', '#ff9a00', '#fff3b0'],
      ['#00f2fe', '#4facfe', '#ffffff'],
      ['#e056fd', '#f368e0', '#ffffff'],
      ['#ff3838', '#ff9f1a', '#fff200']
    ];
    const colors = palette[Math.floor(Math.random() * palette.length)];

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.3;
      const speed = Math.random() * 9 + 3;
      this.particles.push({
        type: 'cracker-spark',
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 3.5 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
        decay: Math.random() * 0.02 + 0.012,
        gravity: 0.12,
        trail: []
      });
    }

    // Sound effect
    if (window.soundFx) window.soundFx.cracker();
    this.start();
  }

  // Mega Cracker Salvo (Multiple fireworks at once)
  megaCrackerShower(salvoCount = 6) {
    for (let i = 0; i < salvoCount; i++) {
      setTimeout(() => {
        const x = Math.random() * (this.width * 0.8) + (this.width * 0.1);
        const y = Math.random() * (this.height * 0.5) + 50;
        this.cracker(x, y, 75);
      }, i * 220);
    }
  }

  // Start background ambient crackers ("crackers everywhere")
  startAmbientCrackers() {
    if (this.crackerInterval) return;
    this.crackerInterval = setInterval(() => {
      const x = Math.random() * (this.width * 0.85) + (this.width * 0.07);
      const y = Math.random() * (this.height * 0.45) + 60;
      this.cracker(x, y, 50);
    }, 2800);
  }

  // Confetti Explosion
  confetti(x = this.width / 2, y = this.height / 2, count = 90) {
    const colors = ['#ff4d8d', '#ff758c', '#ff7eb3', '#ffd700', '#ffb6c1', '#a18cd1', '#fbc2eb', '#fad0c4'];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 12 + 4;
      this.particles.push({
        type: 'confetti',
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 4,
        size: Math.random() * 8 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 15,
        alpha: 1,
        decay: Math.random() * 0.008 + 0.005,
        gravity: 0.28
      });
    }
    this.start();
  }

  // Romantic Hearts Burst
  heartsBurst(x = this.width / 2, y = this.height / 2, count = 35) {
    const colors = ['#ff2a6d', '#ff5e7e', '#ff8da1', '#ff0055', '#e91e63'];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 8 + 3;
      this.particles.push({
        type: 'heart',
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 3,
        size: Math.random() * 16 + 12,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: (Math.random() - 0.5) * 45,
        alpha: 1,
        decay: Math.random() * 0.01 + 0.006,
        gravity: 0.12
      });
    }
    this.start();
  }

  // Sparkling Fairy Dust
  sparkles(x, y, count = 25) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 5 + 1;
      this.particles.push({
        type: 'sparkle',
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 4 + 2,
        color: '#fff3b0',
        alpha: 1,
        decay: Math.random() * 0.02 + 0.015,
        gravity: 0.02
      });
    }
    this.start();
  }

  // Shooting Star across screen
  shootingStar(startX = Math.random() * (this.width * 0.5), startY = Math.random() * 100) {
    const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.2;
    const speed = 18;
    for (let i = 0; i < 35; i++) {
      this.particles.push({
        type: 'star-trail',
        x: startX - (i * Math.cos(angle) * 3),
        y: startY - (i * Math.sin(angle) * 3),
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.max(1, 4 - (i * 0.1)),
        color: '#ffffff',
        alpha: 1 - (i / 35),
        decay: 0.035,
        gravity: 0
      });
    }
    this.start();
  }

  drawHeart(ctx, x, y, size, color, alpha, rotation) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.globalAlpha = Math.max(0, alpha);
    ctx.fillStyle = color;
    ctx.beginPath();
    const topCurveHeight = size * 0.3;
    ctx.moveTo(0, topCurveHeight);
    ctx.bezierCurveTo(0, 0, -size / 2, 0, -size / 2, topCurveHeight);
    ctx.bezierCurveTo(-size / 2, (size + topCurveHeight) / 2, 0, (size + topCurveHeight) / 1.4, 0, size);
    ctx.bezierCurveTo(0, (size + topCurveHeight) / 1.4, size / 2, (size + topCurveHeight) / 2, size / 2, topCurveHeight);
    ctx.bezierCurveTo(size / 2, 0, 0, 0, 0, topCurveHeight);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  start() {
    if (!this.running) {
      this.running = true;
      this.animate();
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.globalAlpha = Math.max(0, p.alpha);

      if (p.type === 'confetti') {
        p.rotation += p.rotationSpeed;
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate((p.rotation * Math.PI) / 180);
        this.ctx.fillStyle = p.color;
        this.ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      } else if (p.type === 'heart') {
        this.drawHeart(this.ctx, p.x, p.y, p.size, p.color, p.alpha, p.rotation);
      } else if (p.type === 'cracker-spark') {
        this.ctx.fillStyle = p.color;
        this.ctx.shadowBlur = 8;
        this.ctx.shadowColor = p.color;
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        this.ctx.fill();
      } else if (p.type === 'sparkle' || p.type === 'star-trail') {
        this.ctx.fillStyle = p.color;
        this.ctx.shadowBlur = 6;
        this.ctx.shadowColor = '#fff';
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        this.ctx.fill();
      }
      this.ctx.restore();
    }

    if (this.particles.length > 0) {
      requestAnimationFrame(() => this.animate());
    } else {
      this.running = false;
    }
  }
}

window.surpriseFx = new SurpriseEffects();
