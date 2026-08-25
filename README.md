# Full Telugu Wedding Invitation — Recording Recreation

This is the **full invitation experience from the supplied 46-second recording**, not just the first screen.

Implemented sections:

1. Opening Ganesha cover + invitation button
2. Transition / blank animated screen
3. Temple / title reveal
4. Bride portrait section
5. Groom portrait section
6. Wedding date + mandapam
7. Full events timeline with five event cards
8. Venue / location section
9. Couple photo gallery
10. Blessings section
11. Final thank-you / closing section

The reference recording was used to extract visual assets for the first recreation pass. Replace those assets with the actual couple's images and original artwork for the final wedding card.

## Run

```bash
npm install
npm run dev
```

Optional music:
- Put `music.mp3` inside `public/`
- The floating music button will automatically use it.

## Main customization

Edit `src/App.tsx`:

```ts
const WEDDING = {
  bride: "...",
  groom: "...",
  date: "...",
  time: "...",
  venue: "...",
  city: "...",
};
```

The event text is in the `events` array.