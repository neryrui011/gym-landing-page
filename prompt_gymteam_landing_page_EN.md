# Professional Prompt — GymTeam Landing Page

## Main Instruction

Create a complete, fully functional **single-file landing page** (using Next.js and Tailwind CSS) for a gym brand called **GymTeam**. The page must faithfully replicate the structure, visual identity, and persuasion logic described below. All code must be production-grade, responsive, and require no external dependencies beyond Google Fonts.

---

## Visual Identity

### Color Palette
- **Primary background:** `#0A0A0A` (deep black)
- **Secondary background:** `#111111` (alternating sections)
- **Primary accent:** `#C8FF00` (lime / neon yellow-green) — used on buttons, badges, active borders, and hovers
- **Secondary accent:** `#FF6B35` (orange) — used exclusively on the final CTA
- **Primary text:** `#FFFFFF`
- **Muted text:** `#A0A0A0`
- **Subtle borders:** `rgba(255,255,255,0.08)`

### Typography
- **Display / Section titles:** bold uppercase font with wide tracking — import `Bebas Neue` from Google Fonts. Size range: 48–80px.
- **Body / Labels:** clean sans-serif — import `Barlow` from Google Fonts. Weight: 400 and 500.
- All section headings must be **ALL CAPS** with `letter-spacing: 0.04em`.

### General Style
- Absolute dark theme — no light mode
- Images used as backgrounds must have a dark semi-transparent overlay
- Card borders: `1px solid rgba(255,255,255,0.1)`
- Card hover: border transitions to `#C8FF00` with `transition: 0.3s`
- Default border-radius: `8px`
- **Primary button:** background `#C8FF00`, text `#000`, bold, no border, hover with slight scale and brightness
- **Outline button:** border `#C8FF00`, text `#C8FF00`, transparent background

---

## Full Page Structure (12 sections in order)

### Section 1 — Fixed Navbar
- Logo "GYMTEAM" on the left (bold white text)
- Centered nav links: Home · Shop · Blog · Contact
- Right side icons: cart, wishlist, user profile
- Background: `rgba(0,0,0,0.85)` with `backdrop-filter: blur(10px)`
- `position: fixed; top: 0; z-index: 100`
- On scroll past 80px: background transitions to solid `#000`

---

### Section 2 — Hero (full screen)
- **Height:** `100vh`
- **Background:** gym photo with dark overlay `rgba(0,0,0,0.55)`
- **Main headline** (two lines, all caps, 72–80px bold):
  ```
  WORK WITH
  PROFESSIONALS
  ```
- **Subtitle:** short 2-line description, color `#A0A0A0`
- **Two side-by-side buttons:**
  - Button 1 (primary): "START NOW" — background `#C8FF00`, black text
  - Button 2 (outline): "LEARN MORE" — white border and text
- **Scroll indicator** (3 animated dots) below the buttons
- Content centered horizontally, vertically aligned to center or slightly above middle

---

### Section 3 — Animated Ticker Strip
- Continuous horizontal strip with `overflow: hidden`, height ~44px
- Background `#C8FF00`, text `#000`, bold, uppercase
- Text loops infinitely via CSS `@keyframes marquee`:
  ```
  CONVENIENT LOCATION & SCHEDULE  ·  DRAWING UP AN INDIVIDUAL TRAINING PROGRAM  ·  BEST PROFESSIONAL COACHES  ·  
  ```
- Speed: ~25s per cycle, linear, infinite

---

### Section 4 — "WHY CHOOSE US"
- Section title: "WHY CHOOSE US"
- **Carousel** showing 3 cards at a time with `‹` `›` navigation arrows on the sides
- Each card contains:
  - Featured image (gym/workout photo) with overlay
  - Green badge `#C8FF00` with dumbbell icon
  - Title: "MUSCLES BUILDING" (bold, white)
  - Short descriptive text (~3 lines), color `#A0A0A0`
  - "LEARN MORE ›" link in green
- Active/hover card: border changes to `#C8FF00`

---

### Section 5 — "ABOUT OUR GYM"
- Section title: "ABOUT OUR GYM"
- Two-column layout:
  - **Left column (60%):** large horizontal image of athlete training
  - **Right column (40%):** yellow badge "10 YEARS", introductory paragraph (~4 lines), two small overlapping testimonial mini-cards
- Testimonial mini-cards: circular photo (`border-radius: 50%` with `#C8FF00` border), name, and short quote — placed side by side below the text

---

### Section 6 — "OUR BEST COACHES"
- Section title: "OUR BEST COACHES"
- Descriptive subtitle (1 line), color `#A0A0A0`
- **4 coach cards in a row** (horizontal scroll on mobile):
  - Coach photo (aspect ratio ~3:4, `object-fit: cover`)
  - Name below: "Jane Cooper", "Brooklyn Simmons", "Savannah Nguyen", "Kathryn Murphy"
  - Hover: overlay with name highlighted and social media icons
- Page indicator dots below the cards

---

### Section 7 — Weekly Schedule Grid
- No explicit section heading — visually integrated
- **Table: 8 rows × 8 columns** (time column + Mon/Tue/Wed/Thu/Fri/Sat/Sun)
- Time slots (column 1): 8:00 AM, 9:00 AM, 10:00 AM, 11:00 AM, 12:00 PM, 1:00 PM, 2:00 PM
- Day headers: MON, TUE, WED, THU, FRI, SAT, SUN
- Filled cells with class names: CARDIO, CROSSFIT, OPEN GYM, POWERLIFTING, GYMNASTICS (varied distribution — not all cells filled)
- Filled cells: background `rgba(200,255,0,0.1)`, text `#C8FF00`, small bold font
- Empty cells: transparent background
- Table border: `1px solid rgba(255,255,255,0.08)`
- **"JOIN NOW" button** centered below the table, primary style

---

### Section 8 — Photographic Divider Banner
- Height: `280px`, `overflow: hidden`
- Landscape photo of athlete lifting a barbell
- Dark overlay `rgba(0,0,0,0.4)`
- No text — purely atmospheric visual element
- `background-attachment: fixed` for parallax effect

---

### Section 9 — "OUR GYM PASSES"
- Section title: "OUR GYM PASSES"
- **Toggle switch** centered at the top to alternate between plans (Monthly / Annual)
- **2 pricing cards** side by side, centered on the page:

  **Card 1 — CrossFit**
  - Title: "CROSSFIT"
  - Price: **120$.** (48px bold)
  - 5 benefits listed with green check icons (`✓`)
  - Primary button: "PURCHASE NOW"

  **Card 2 — Open Gym** (featured / most popular)
  - Title: "OPEN GYM"
  - "Popular" badge at the top
  - Price: **109$.**
  - 5 benefits listed
  - Primary button: "PURCHASE NOW"
  - Card has `#C8FF00` border to indicate it is featured

- External `‹` `›` navigation arrows flanking the cards

---

### Section 10 — "REVIEWS FROM CLIENTS"
- Section title: "REVIEWS FROM CLIENTS"
- Split layout:
  - **Left (45%):** image of client training, rounded frame
  - **Right (55%):** featured testimonial card
    - Large `"` quotation icon, color `#C8FF00`
    - Testimonial text in bold (18–22px):
      *"LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY"*
    - Circular client photo + Name: "Albert Turner" + role/description
    - Page indicator dots below
- Testimonial card background: `#1A1A1A` with subtle border

---

### Section 11 — "BLOG & NEWS"
- Section title: "BLOG & NEWS"
- Short descriptive subtitle
- **3 article cards** side by side:
  - Cover image (height ~200px, `object-fit: cover`)
  - Category tag badge (e.g. "NEW ENTRY", "TRAINING", "ORIGINAL") — background `#C8FF00`, text `#000`
  - Article title (bold, max 2 lines)
  - Publication date (color `#A0A0A0`, 12px)
  - "READ MORE ›" link in green
- Hover: card slightly elevated with `transform: translateY(-4px)` and `#C8FF00` border
- External navigation arrows (carousel)

---

### Section 12 — Final CTA "GET YOUR FIRST TRIAL VISIT"
- Height: `320px`
- Background: dark gym image with overlay `rgba(0,0,0,0.65)`
- Centered content:
  - Large title: **"GET YOUR FIRST TRIAL VISIT"** (all caps, 56px)
  - Optional short subtitle
- Centered button: background `#FF6B35` (orange), bold white text, larger than other CTAs — "START NOW"
- No other visual elements — full conversion focus

---

### Section 13 — Footer
- Background: `#0A0A0A`, top border `1px solid rgba(255,255,255,0.08)`
- 4–5 column layout:
  - Column 1: "GYMTEAM" logo + short tagline + social media icons
  - Columns 2–4: Link lists (Company, Services, Contact)
  - Column 5 (optional): Simple newsletter form (input + button)
- Copyright line at the bottom: `© 2024 GymTeam. All rights reserved.`
- All text: color `#A0A0A0`, hover: `#FFFFFF`

---

## Interactions & Behaviors

| Element | Behavior |
|---|---|
| Navbar | Background transitions to solid `#000` after scrolling past 80px |
| All buttons | `transition: all 0.2s`, hover with `transform: scale(1.03)` |
| Cards | `transition: border-color 0.3s, transform 0.3s` on hover |
| Ticker strip | `@keyframes marquee` with `translateX(-50%)` infinite loop |
| Carousels | Simple JS — `translateX` slide transitions on arrow click |
| Parallax banner | `background-attachment: fixed` |
| Pricing toggle | Toggles CSS class to swap monthly/annual prices |
| Smooth scroll | `scroll-behavior: smooth` on `html` element |
| Scroll animations | `IntersectionObserver` — sections gain `.visible` class on viewport entry with `opacity: 0 → 1` and `translateY(30px → 0)` |

---

## Technical Specifications

- **Single file:** all CSS and JS inline inside the HTML file
- **No frameworks** (no Bootstrap, no Tailwind) — pure CSS with custom properties
- **Google Fonts:** import `Bebas Neue` (display) + `Barlow` (body) via `@import`
- **Responsive:** breakpoints at `768px` and `480px`
  - Mobile: hamburger navbar, 1-card carousels, horizontally scrollable table, stacked columns
- **CSS Variables** in `:root` for all colors and fonts
- **Minimum accessibility:** `alt` on images, `aria-label` on nav buttons, adequate contrast ratios
- **Placeholder images:** use `https://picsum.photos/` with relevant seeds (e.g. gym, fitness, workout) or `https://images.unsplash.com/`
- **Performance:** no heavy animations, `will-change` only where necessary

---

## Required CSS Variables in `:root`

```css
:root {
  --color-bg:         #0A0A0A;
  --color-bg-alt:     #111111;
  --color-accent:     #C8FF00;
  --color-accent-2:   #FF6B35;
  --color-text:       #FFFFFF;
  --color-muted:      #A0A0A0;
  --color-border:     rgba(255,255,255,0.08);
  --font-display:     'Bebas Neue', sans-serif;
  --font-body:        'Barlow', sans-serif;
  --radius:           8px;
  --transition:       0.3s ease;
  --max-width:        1200px;
}
```

---

## Expected Output

Deliver **a single `index.html` file** containing:
1. All 12 sections implemented in the exact order described
2. Complete CSS inside `<style>` in the `<head>`
3. Complete JavaScript inside `<script>` before `</body>`
4. Page works by opening the file directly in a browser — no server required
5. Visual output faithful to the dark fitness aesthetic described above

---

*Prompt engineered for faithful replication of the GymTeam landing page — dark fitness aesthetic, complete AIDA funnel, 12 sections.*
