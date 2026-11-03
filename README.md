# 🎂 Romantic Birthday Code Suite for Shobha from Himanshu 💖

A personalized, interactive birthday web experience crafted with code, containing 3 distinct themes inspired by viral Instagram gifts (KoiKoi app) and top GitHub repositories (`sapthesh/Birthday-V3`, `felisaans/cute-birthday-website`).

Includes her favorite song **"Shayaron Se Lafz Leke Thode Se Udhar"** (Bol Do Na Zara) extracted directly from her Instagram reel, plus the full song, and your photos!

---

## 🌟 What's Inside

### 1. 💌 Master Hub (`index.html`)
- An executive romantic portal introducing the celebration with couple avatar previews.
- Navigation cards to launch each of the 3 themes or take the complete guided journey.
- Floating persistent music player with rotating vinyl disc, audio track selector (Reel Cut vs Full Song), and volume controls.

### 2. 🎂 Theme 1: The Romantic Storybook Journey (`storybook.html`)
*Inspired by KoiKoi app & GitHub Birthday-V3*
- **Step 0: Sealed Wax Envelope** — Tap to crack the wax seal, releasing heart bursts and fading in the music.
- **Step 1: 3D Birthday Cake** — Animated flickering candles with realistic smoke puffs and confetti explosion when blown out!
- **Step 2: Balloon Popping Game** — 4 floating pastel helium balloons to pop, each revealing a heartfelt secret why you love her.
- **Step 3: 3D Flipping Polaroids** — Her photos rendered as authentic vintage Polaroids with washi tape; tap each polaroid to 3D flip it and read private notes on the back.
- **Step 4: Unfolding Typewriter Letter** — Antique parchment with smooth typewriter animation, plus an interactive "Send Him A Kiss Back 💋" button.

### 3. 🎶 Theme 2: Vintage Vinyl & Fairy Light Memory Lane (`vintage_vinyl.html`)
*Inspired by Lo-Fi bedroom aesthetics & retro turntable setups*
- **Spinning Turntable Player** — Interactive record player with rotating vinyl, animated tonearm, and audio visualizer frequency bars.
- **Glowing Fairy Light Clothesline** — Sagging fairy lights with glowing bulbs holding your 2 photos on wooden clothespins that gently sway in the breeze.
- **Silver Scratch-To-Reveal Card** — Interactive canvas scratch card where she scratches off the metallic surface with finger or mouse to reveal a secret love note.
- **Love Milestones Deck** — Counter cards celebrating your lifetime journey with your wife Shobha.

### 4. 🌸 Theme 3: Kawaii Arcade & Starlight Wishes (`kawaii_celebration.html`)
*Inspired by cute pastel Japanese/Korean web toys*
- **Playful Love Quiz** — "Are you the prettiest girl in the world?" with a runaway `[No]` button that playfully dodges her cursor!
- **3D Parallax Tilt Cards** — Interactive photo cards with smooth physics tilt that respond to mouse coordinates.
- **The Starlight Wish Jar** — Type any birthday wish to watch it shoot across the screen as a shooting star and save into her personal star jar.
- **Floating Lyrics Stream** — Cloud pills carrying the romantic lyrics of *Shayaron Se Lafz Leke*.
- **Birthday Fireworks Cannon** — Multi-colored canvas fireworks show at the tap of a button.

---

## 🚀 How To Run Locally (1-Click)

### Option A: Double-Click (Easiest for Mac)
In Finder, go to `Downloads/himanshu` and **double-click** `run_birthday.command`. It will start the server and open your default browser automatically!

### Option B: Terminal Command
```bash
cd ~/Downloads/himanshu
./run_birthday.sh
```
Then visit: `http://localhost:8000`

---

## 🌐 How To Send Her A Live Link (Deploy in 2 Minutes)

If you want her to open it on her own phone via a WhatsApp or Instagram link:

### Free Deployment via GitHub Pages:
1. Create a new repository on [GitHub](https://github.com) named `happy-birthday-my-love`.
2. Push or upload the contents of `~/Downloads/himanshu` to the repository.
3. In GitHub repo settings, go to **Pages** -> Set Source to **`main` branch** -> Save.
4. GitHub will give you a live link (e.g. `https://yourusername.github.io/happy-birthday-my-love/`) to send to her!

### Free Drag-and-Drop via Netlify / Vercel:
1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Drag and drop the `~/Downloads/himanshu` folder into the browser window.
3. Netlify will instantly generate a live URL in 10 seconds!

---

## 📁 File Structure
```
~/Downloads/himanshu/
├── index.html                           # Master Romantic Portal
├── storybook.html                       # Theme 1: Storybook & 3D Cake
├── vintage_vinyl.html                   # Theme 2: Vintage Vinyl & Fairy Lights
├── kawaii_celebration.html              # Theme 3: Kawaii Arcade & Starlight Jar
├── run_birthday.command                 # Double-clickable macOS launcher
├── run_birthday.sh                      # Shell launcher
├── assets/
│   ├── css/                             # Shared and theme-specific styling
│   ├── js/                              # Particle engine, sound synthesizer, audio player
│   ├── music/
│   │   ├── reel_audio.m4a               # Exact Instagram Reel audio cut
│   │   ├── reel_audio.wav               # Lossless audio fallback
│   │   └── full_song.m4a                # Full "Bol Do Na Zara" song
│   └── photos/
│       ├── photo1.jpeg                  # Photo 1
│       └── photo2.jpeg                  # Photo 2
├── WhatsApp Image 2026-11-03 at 17.58.47.jpeg
└── WhatsApp Image 2026-11-03 at 18.00.57.jpeg
```

