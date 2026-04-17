# Task 8-b: Animated Night Sky Background for Dark Mode

## Work Record

### File Modified
- `/home/z/my-project/src/components/screens/HomeScreen.tsx`

### Changes Made

#### 1. NightSky Component (new, after FloatingParticles)
- **50 twinkling stars**: Small white dots (1-3px) scattered randomly across the screen
- Each star uses `motion.div` with randomized:
  - Position (`x`, `y` as percentages)
  - Size (1-3px)
  - Twinkle duration (2-5s) and delay (0-5s)
  - Base opacity (0.3-0.7)
- Animation: multi-step opacity and scale keyframes for realistic twinkling
- **3 shooting stars**: Diagonal streaking lines with:
  - Random start positions (upper portion of screen)
  - Gradient trail (white → transparent) with glow box-shadow
  - Random angle (25-40°) for natural variety
  - Staggered repeat timing (6-18s intervals)
- Only visible in dark mode via `hidden dark:block`

#### 2. Enhanced Moon Glow
- Added dark-mode radial gradient div (`-inset-8`) around the moon circle
- Gradient: `radial-gradient(circle, rgba(251,191,36,0.12) 0%, rgba(251,191,36,0.05) 40%, transparent 70%)`
- Creates a soft amber halo visible only in dark mode
- Orbiting star emojis enhanced: `dark:text-amber-200/90 dark:brightness-110`

#### 3. Hero Section Gradient Enhancement
- Updated dark mode background from flat stone-900 to deeper starfield:
  - `dark:from-stone-950` (was stone-900)
  - `dark:via-indigo-950/20` (was stone-900, subtle indigo for depth)
  - `dark:to-stone-950` (was stone-950)

#### 4. Placement
- `<NightSky />` placed immediately after `<FloatingParticles />` in the hero section

### Lint Verification
- `bun run lint` shows 0 errors in HomeScreen.tsx
- Pre-existing errors in mini-services (ignored per instructions) and DhikrCounterScreen.tsx
