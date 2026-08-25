import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

import {
  CalendarDays,
  MapPin,
  Music2,
  Pause,
  Play,
  Navigation,
} from "lucide-react";

import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

/* =========================================================
   IMAGES
========================================================= */

import ganesha from "./assets/ganesha.png";


import bride from "./assets/bride.png";
import groom from "./assets/groom.png";

import mandapam from "./assets/mandapam.png";
import venue from "./assets/venue.png";

import pic1 from "./assets/pic1.jpeg";
import pic2 from "./assets/pic2.jpeg";

import pic3 from "./assets/pic3.jpeg";
import pic4 from "./assets/pic4.jpeg";

import pic5 from "./assets/pic5.jpeg";

import event1 from "./assets/event-1.png";
import event2 from "./assets/event-2.png";
import event3 from "./assets/event-3.png";
import event4 from "./assets/event-4.png";
import event5 from "./assets/event-5.png";

/* =========================================================
   WEDDING DETAILS
========================================================= */

const WEDDING = {
  bride: "లావణ్య",
  groom: "సతీష్",

  date: "03 • 09 • 2026",

  time: "శుక్రవారం తెల్లవారుజామున 02:58 గం.",

  venue:
    "శ్రీ వాసవి ఆర్యవైశ్య ఇందుపూరు కళ్యాణ వేదిక A/C, ఆదాబడి వీధి",

  city: "పార్వతీపురం",
};

/* =========================================================
   COLOR PALETTE
========================================================= */

const COLORS = {
  ivory: "#F7F1E7",
  ivoryDark: "#E9DDCA",

  gold: "#A77B2E",
  goldLight: "#D5B866",
  goldDark: "#76551D",

  maroon: "#8B2947",
  maroonDark: "#5D1930",

  rose: "#B84E6D",

  green: "#526B4A",
  greenDark: "#354C36",

  brown: "#66523A",

  white: "#FFFDF9",
};

/* =========================================================
   EVENTS
========================================================= */

const EVENTS = [
  {
    date: "16 • 08 • 2026",
    time: "ఉ. 06:35 గం.",
    title: "పెళ్లికూతురు",
    description:
      "మంగళస్నానం మరియు కుటుంబ శుభకార్యాలు",
    image: event1,
  },

  {
    date: "16 • 08 • 2026",
    time: "ఉ. 07:42 గం.",
    title: "పెళ్లికొడుకు",
    description:
      "శుభకార్యాలు మరియు బంధుమిత్రుల ఆశీస్సులు",
    image: event2,
  },

  {
    date: "18 • 08 • 2026",
    time: "ఉ. 07:00 గం.",
    title: "శుభలేఖ",
    description:
      "ఆత్మీయుల సమక్షంలో ఆహ్వాన వేడుక",
    image: event3,
  },

  {
    date: "24 • 08 • 2026",
    time: "ఉ. 04:35 గం.",
    title: "శుభముహూర్తం",
    description:
      "వివాహ మహోత్సవం",
    image: event4,
  },

  {
    date: "25 • 08 • 2026",
    time: "సా. 07:00 గం.",
    title: "రిసెప్షన్",
    description:
      "మీ ఆశీస్సులతో ఆనంద వేడుక",
    image: event5,
  },
];

/* =========================================================
   GLOBAL STYLES
========================================================= */

function WeddingStyles() {
  return (
    <style>{`
      :root {
        --ivory: ${COLORS.ivory};
        --ivory-dark: ${COLORS.ivoryDark};

        --gold: ${COLORS.gold};
        --gold-light: ${COLORS.goldLight};
        --gold-dark: ${COLORS.goldDark};

        --maroon: ${COLORS.maroon};
        --maroon-dark: ${COLORS.maroonDark};

        --rose: ${COLORS.rose};

        --green: ${COLORS.green};
        --green-dark: ${COLORS.greenDark};

        --brown: ${COLORS.brown};
      }

      * {
        box-sizing: border-box;
      }

      html {
        scroll-behavior: smooth;
      }

      body {
        margin: 0;

        min-width: 320px;

        background:
          linear-gradient(
            180deg,
            #e8dfcf,
            #dcd0bb
          );

        color:
          var(--green-dark);

        font-family:
          "Noto Serif Telugu",
          Georgia,
          serif;

        -webkit-font-smoothing:
          antialiased;

        text-rendering:
          optimizeLegibility;
      }

      button,
      a {
        font: inherit;
      }

      button {
        cursor: pointer;
      }

      img {
        max-width: 100%;
      }

      /* =====================================================
         MAIN APP
      ===================================================== */

      .wedding-app {
        width: min(100%, 576px);

        margin: auto;

        overflow: hidden;

        position: relative;

        background:
          linear-gradient(
            180deg,
            #f8f2e7 0%,
            #f4ecdd 50%,
            #eee3d0 100%
          );

        box-shadow:
          0 0 80px
          rgba(55, 40, 20, .24);
      }

      /* =====================================================
         SCREEN
      ===================================================== */

      .wedding-screen {
        position: relative;

        width: 100%;

        min-height: 100svh;

        overflow: hidden;

        isolation: isolate;

        display: flex;

        flex-direction: column;

        align-items: center;

        text-align: center;

        padding:
          172px
          22px
          205px;

        background:
          radial-gradient(
            circle at 50% 30%,
            rgba(255, 253, 248, .98),
            rgba(247, 239, 225, .97) 50%,
            rgba(231, 216, 191, .98) 100%
          );
      }

      .wedding-screen::before {
        content: "";

        position: absolute;

        inset: 0;

        z-index: -2;

        opacity: .12;

        background-image:
          radial-gradient(
            rgba(120, 89, 39, .45) .45px,
            transparent .45px
          );

        background-size:
          13px 13px;

        pointer-events: none;
      }

      .wedding-screen::after {
        content: "";

        position: absolute;

        inset: 0;

        z-index: -1;

        pointer-events: none;

        background:
          linear-gradient(
            125deg,
            transparent 0%,
            rgba(255, 255, 255, .25) 48%,
            transparent 55%
          );
      }

      /* =====================================================
         FLOWER MALA
      ===================================================== */

      /* IMAGE-BASED TOP MALA */
      .top-mala-image {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 150px;
        z-index: 30;
        pointer-events: none;
        overflow: hidden;
      }

      .top-mala-image img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        object-position: top center;
      }

      /* LIGHTWEIGHT COVER PETALS */
      .petal-shower {
        position: absolute;
        inset: 0;
        z-index: 1;
        pointer-events: none;
        overflow: hidden;
      }

      .petal {
        position: absolute;
        top: -24px;
        width: 9px;
        height: 14px;
        border-radius: 70% 30% 65% 35%;
        background: linear-gradient(145deg, #d46b83, #a93b58);
        opacity: .72;
        animation: petalFall 7.5s linear infinite;
        will-change: transform, opacity;
      }

      .petal-1 { left: 8%; animation-delay: -.4s; animation-duration: 7.2s; }
      .petal-2 { left: 17%; animation-delay: -3.1s; animation-duration: 8.4s; }
      .petal-3 { left: 28%; animation-delay: -5.2s; animation-duration: 7.8s; }
      .petal-4 { left: 39%; animation-delay: -1.8s; animation-duration: 9s; }
      .petal-5 { left: 49%; animation-delay: -4.2s; animation-duration: 7.6s; }
      .petal-6 { left: 59%; animation-delay: -6.1s; animation-duration: 8.7s; }
      .petal-7 { left: 69%; animation-delay: -2.6s; animation-duration: 7.9s; }
      .petal-8 { left: 77%; animation-delay: -5.7s; animation-duration: 8.6s; }
      .petal-9 { left: 85%; animation-delay: -1.1s; animation-duration: 7.4s; }
      .petal-10 { left: 93%; animation-delay: -4.8s; animation-duration: 8.9s; }
      .petal-11 { left: 34%; animation-delay: -6.8s; animation-duration: 9.2s; }

      @keyframes petalFall {
        0% { transform: translate3d(0, -30px, 0) rotate(0deg); opacity: 0; }
        12% { opacity: .72; }
        50% { transform: translate3d(24px, 48vh, 0) rotate(150deg); opacity: .64; }
        100% { transform: translate3d(-18px, 108vh, 0) rotate(330deg); opacity: 0; }
      }

      /* SUBTLE FLOWERS ON KEY PAGES */
      .floral-drift {
        position: absolute;
        inset: 0;
        z-index: 5;
        pointer-events: none;
        overflow: hidden;
      }

      .drift-flower {
        position: absolute;
        color: var(--gold);
        font-size: 24px;
        opacity: .18;
        animation: flowerFloat 6s ease-in-out infinite alternate;
        will-change: transform, opacity;
      }

      .drift-1 { left: 8%; top: 24%; animation-delay: -.8s; }
      .drift-2 { right: 9%; top: 31%; animation-delay: -2.2s; }
      .drift-3 { left: 14%; bottom: 20%; animation-delay: -3.1s; }
      .drift-4 { right: 14%; bottom: 25%; animation-delay: -1.4s; }
      .drift-5 { left: 25%; top: 12%; font-size: 18px; animation-delay: -4s; }
      .drift-6 { right: 25%; top: 15%; font-size: 18px; animation-delay: -2.8s; }

      @keyframes flowerFloat {
        from { transform: translate3d(0, 5px, 0) rotate(-5deg); opacity: .12; }
        to { transform: translate3d(0, -9px, 0) rotate(5deg); opacity: .28; }
      }

      /* KOKILAA TEXT MUST STAY ABOVE GOPURAM */
      .invitation-intro-content {
        position: relative;
        z-index: 20 !important;
        isolation: isolate;
        padding-top: 8px;
      }

      .invitation-main-title,
      .invitation-middle-title,
      .invitation-subtitle {
        position: relative;
        z-index: 22;
        isolation: isolate;
      }

      .invitation-main-title { padding: .10em 12px .18em; min-height: 1.25em; line-height: 1.18; }
      .invitation-subtitle { padding: 3px 10px 7px; }

      /* LARGER EVENT PHOTOS */
      .event-item { grid-template-columns: 1fr 176px; }
      .event-item.reverse { grid-template-columns: 176px 1fr; }
      .event-photo { width: 176px; height: 118px; }

      .events-bottom-decor {
        width: 100%;
        margin-top: 2px;
        padding-bottom: 8px;
        text-align: center;
        color: var(--gold);
        font-size: 22px;
        letter-spacing: 8px;
        opacity: .68;
        position: relative;
        z-index: 9;
      }

      .flower-mala {
        position: absolute;

        top: 0;

        left: 0;
        right: 0;

        height: 104px;

        z-index: 30;

        pointer-events: none;

        overflow: hidden;
      }

      .mala-string {
        position: absolute;

        top: 14px;

        left: -3%;

        width: 106%;

        height: 2px;

        background:
          linear-gradient(
            90deg,
            transparent,
            #9b722b 8%,
            #d4b361 50%,
            #9b722b 92%,
            transparent
          );
      }

      .flower-row {
        position: absolute;

        top: 13px;

        left: 0;
        right: 0;

        display: flex;

        justify-content:
          space-around;

        align-items:
          flex-start;
      }

      .mala-cluster {
        width: 30px;

        display: flex;

        flex-direction: column;

        align-items: center;

        transform-origin:
          top center;
      }

      .mala-flower {
        width: 26px;
        height: 26px;

        display: grid;

        place-items: center;

        border-radius: 50%;

        color: #bd8730;

        font-size: 23px;

        line-height: 1;

        text-shadow:
          0 1px 0
          rgba(255, 241, 191, .8);
      }

      .mala-leaf {
        color: #60724c;

        font-size: 14px;

        line-height: 1;

        margin-top: -2px;
      }

      .mala-hanging {
        color: #bd8730;

        font-size: 11px;

        line-height: 7px;
      }

      /* =====================================================
         TORANAM
      ===================================================== */

      .golden-toranam {
        position: absolute;

        top: 67px;

        left: -10px;
        right: -10px;

        height: 40px;

        display: flex;

        justify-content:
          space-around;

        align-items:
          flex-start;

        z-index: 25;

        pointer-events: none;
      }

      .golden-toranam.bottom {
        top: auto;

        bottom: 0;

        transform:
          rotate(180deg);
      }

      .golden-toranam span {
        width: 12px;
        height: 27px;

        position: relative;

        border-radius:
          0 0 65% 65%;

        background:
          linear-gradient(
            90deg,
            #80601f,
            #d3b35f,
            #8a641f
          );

        opacity: .9;
      }

      .golden-toranam span::before {
        content: "";

        position: absolute;

        width: 9px;
        height: 16px;

        left: 2px;
        top: 23px;

        border-radius:
          0 0 60% 60%;

        background:
          #b98228;
      }

      /* =====================================================
         BANANA LEAVES
      ===================================================== */

      .real-leaf {
        position: absolute;

        width: 165px;

        z-index: 8;

        pointer-events: none;

        filter:
          drop-shadow(
            0 7px 7px
            rgba(38, 57, 34, .18)
          );
      }

      .real-leaf img {
        width: 100%;

        display: block;

        object-fit: contain;
      }

      .real-leaf.left {
        left: -60px;

        bottom: 30px;
      }

      .real-leaf.right {
        right: -60px;

        bottom: 30px;

        transform:
          scaleX(-1);
      }

      /* =====================================================
         BANANA TREE FRAME - BRIDE / GROOM ONLY
      ===================================================== */

      .banana-tree-frame {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 70%;
        object-fit: contain;
        object-position: center bottom;
        z-index: 7;
        pointer-events: none;
        filter: drop-shadow(0 8px 10px rgba(38, 57, 34, .12));
      }

      /* =====================================================
         MEMORIES - PHOTO GRID
      ===================================================== */

      /* =====================================================
         BLESSINGS DECORATION
      ===================================================== */

      .blessing-card {
        position: relative;
        width: min(100%, 430px);
        margin-top: 22px;
        padding: 22px 22px 28px;
        border: 1px solid rgba(167,123,46,.42);
        border-radius: 24px;
        background: linear-gradient(180deg, rgba(255,253,248,.88), rgba(244,234,215,.72));
        box-shadow: 0 14px 30px rgba(72,52,19,.12);
        overflow: hidden;
      }

      .blessing-card::before,
      .blessing-card::after {
        content: "✿";
        position: absolute;
        color: var(--gold);
        font-size: 30px;
        opacity: .72;
      }

      .blessing-card::before {
        left: 18px;
        top: 12px;
      }

      .blessing-card::after {
        right: 18px;
        top: 12px;
      }

      .blessing-flowers {
        color: var(--rose);
        font-size: 25px;
        letter-spacing: 9px;
        margin-bottom: 4px;
      }

      .blessing-small-copy {
        color: var(--brown);
        font-size: 13px;
        line-height: 1.9;
        margin: 8px auto 0;
        max-width: 330px;
      }

      /* RECREATED HANDS ART — LAST TWO PAGES ONLY */
      .hands-wedding-art {
  width: min(100%, 720px);
  max-width: 100%;
  height: auto;
  margin: 22px auto 0;
  display: block;

  /* Soft blend with the page */
  filter: saturate(.88) ;
  opacity: .94;

  /* Removes the harsh rectangular/image-edge feel */
  mix-blend-mode: multiply;

  /* Slightly soften the edges into the background */
  -webkit-mask-image: radial-gradient(
    ellipse 85% 90% at center,
    #000 72%,
    transparent 100%
  );
  mask-image: radial-gradient(
    ellipse 85% 90% at center,
    #000 72%,
    transparent 100%
  );

  will-change: transform, opacity, filter;
}

      /* LAST TWO PAGES — SMALL DECORATION ONLY */
      .last-page-decor {
        margin-top: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 14px;
        color: var(--gold);
        font-size: 21px;
        letter-spacing: 2px;
        opacity: .78;
      }

      .last-page-decor::before,
      .last-page-decor::after {
        content: "";
        width: 54px;
        height: 1px;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(167,123,46,.7),
          transparent
        );
      }

      .last-page-decor .center {
        color: var(--rose);
        font-size: 25px;
        line-height: 1;
      }

      .last-page-decor .diamond {
        color: var(--green);
        font-size: 13px;
      }

      /* =====================================================
         TEXT
      ===================================================== */

      .gold-kicker {
        color:
          var(--gold-dark);

        font-size: 13px;

        font-weight: 700;

        letter-spacing:
          .5px;

        margin: 0 0 8px;
      }

      .gold-title {
        color:
          var(--maroon);

        font-size:
          clamp(
            38px,
            10vw,
            58px
          );

        line-height: 1.3;

        font-weight: 800;

        margin: 5px 0;
      }

      .teal-title {
        color:
          var(--green-dark);

        font-size:
          clamp(
            25px,
            7vw,
            35px
          );

        line-height: 1.45;

        margin: 5px 0;
      }

      .gold-divider {
        color:
          var(--gold);

        font-size: 21px;

        letter-spacing:
          7px;

        margin:
          17px 0;
      }

      .gold-divider span {
        display: inline-block;
      }

      /* =====================================================
         FIRST PAGE
      ===================================================== */

      .cover-screen {
        min-height:
          100svh;

        display: flex;

        flex-direction: column;

        align-items: center;

        justify-content:
          center;

        position: relative;

        overflow: hidden;

        padding:
          100px
          20px
          80px;

        background:
          radial-gradient(
            circle at 50% 32%,
            #fffdf9 0%,
            #f8f0e1 52%,
            #e4d5b9 100%
          );
      }

      .cover-screen::after {
        content: "";

        position: absolute;

        inset: 0;

        pointer-events: none;

        border:
          1px solid
          rgba(155, 114, 43, .18);
      }

      /* PRIMARY COVER — subtle animated decoration only */
      .cover-orbit {
        position: absolute;
        width: min(74vw, 390px);
        height: min(74vw, 390px);
        border: 1px solid rgba(167, 123, 46, .20);
        border-radius: 50%;
        pointer-events: none;
        z-index: 2;
        animation: coverOrbit 9s ease-in-out infinite alternate;
        will-change: transform, opacity;
      }

      .cover-orbit::before,
      .cover-orbit::after {
        content: "✦";
        position: absolute;
        color: var(--gold);
        font-size: 16px;
        opacity: .45;
      }

      .cover-orbit::before {
        top: 12%;
        left: 2%;
        animation: coverSpark 3.8s ease-in-out infinite;
      }

      .cover-orbit::after {
        right: 3%;
        bottom: 16%;
        animation: coverSpark 4.4s ease-in-out infinite reverse;
      }

      .cover-glow {
        position: absolute;
        width: 180px;
        height: 180px;
        top: 18%;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 50%;
        background: radial-gradient(circle,
          rgba(213, 184, 102, .18) 0%,
          rgba(213, 184, 102, .07) 42%,
          transparent 72%);
        pointer-events: none;
        z-index: 2;
        animation: coverGlow 4.8s ease-in-out infinite;
        will-change: transform, opacity;
      }

      .cover-sparkles {
        position: absolute;
        inset: 0;
        pointer-events: none;
        overflow: hidden;
        z-index: 3;
      }

      .cover-spark {
        position: absolute;
        color: var(--gold);
        font-size: 13px;
        opacity: 0;
        animation: coverSpark 4.6s ease-in-out infinite;
        will-change: transform, opacity;
      }

      .cover-spark.s1 { left: 17%; top: 27%; animation-delay: -.8s; }
      .cover-spark.s2 { right: 16%; top: 35%; animation-delay: -2.4s; font-size: 10px; }
      .cover-spark.s3 { left: 24%; bottom: 25%; animation-delay: -3.3s; font-size: 11px; }
      .cover-spark.s4 { right: 23%; bottom: 20%; animation-delay: -1.6s; font-size: 15px; }

      @keyframes coverOrbit {
        from { transform: scale(.96) rotate(-2deg); opacity: .55; }
        to { transform: scale(1.02) rotate(2deg); opacity: .9; }
      }

      @keyframes coverGlow {
        0%, 100% { opacity: .55; transform: translateX(-50%) scale(.94); }
        50% { opacity: .9; transform: translateX(-50%) scale(1.08); }
      }

      @keyframes coverSpark {
        0%, 100% {
          opacity: 0;
          transform: translate3d(0, 7px, 0) scale(.8) rotate(-8deg);
        }
        35% { opacity: .48; }
        65% {
          opacity: .72;
          transform: translate3d(0, -8px, 0) scale(1) rotate(8deg);
        }
        100% {
          opacity: 0;
          transform: translate3d(0, -16px, 0) scale(.82) rotate(14deg);
        }
      }

      .cover-ganesha {
        width: 205px;
        height: 205px;

        object-fit:
          contain;

        mix-blend-mode:
          multiply;

        margin-bottom:
          5px;
      }

      .cover-caption {
        position: relative;
        z-index: 10;
        color:
          #806438;

        font-size: 13px;

        letter-spacing:
          .5px;

        margin:
          4px 0 12px;

        font-weight: 600;
      }

      .cover-main-title {
        position: relative;
        z-index: 10;
        padding: .08em .08em .14em;
        line-height: 1.12;
        color:
          #a83d5b;

        font-size:
          clamp(
            64px,
            18vw,
            92px
          );

        line-height: 1;

        font-weight: 900;

        letter-spacing:
          -1px;

        margin: 0;
       

        text-shadow:
          0 2px 0
          rgba(255,255,255,.75),

          0 5px 14px
          rgba(113,45,62,.12);
      }

      .cover-subtitle {
        position: relative;
        z-index: 10;
        color:
          #866939;

        font-size: 19px;

        margin-top: 13px;

        font-weight: 700;
      }

      .cover-button {
        position: relative;
        z-index: 10;
        margin-top:
          25px;

        padding:
          14px 32px;

        min-width:
          205px;

        border-radius:
          999px;

        border:
          1px solid
          #d9bd79;

        background:
          linear-gradient(
            180deg,
            #d7b967,
            #a47b2e
          );

        color:
          #fff9ec;

        font-weight: 800;

        box-shadow:
          0 7px 18px
          rgba(88,58,19,.18);
      }

      

      .invitation-intro-screen {
        min-height:
          100svh;

        justify-content:
          flex-start;

        padding:
          125px
          18px
          0;

        background:
          radial-gradient(
            circle at 50% 24%,
            #edf9f8 0%,
            #e4f3f2 45%,
            #d8e9e8 100%
          );
      }

      .invitation-intro-screen::before {
        opacity: .08;

        background-image:
          radial-gradient(
            rgba(66, 112, 107, .45) .45px,
            transparent .45px
          );
      }

      .invitation-intro-content {
        position: relative;

        z-index: 12;

        width: 100%;

        display: flex;

        flex-direction: column;

        align-items: center;

        text-align: center;

        margin-top: 2px;
      }

      .invitation-ganesha {
        width: 118px;
        height: 118px;

        object-fit:
          contain;

        mix-blend-mode:
          multiply;

        margin-bottom:
          5px;
      }

      .invitation-main-title {
        color:
          #c82e48;

        font-size:
          clamp(
            48px,
            13vw,
            76px
          );

        line-height:
          1.05;

        font-weight:
          900;

        margin: 0;

        text-shadow:
          0 2px 0
          rgba(255,255,255,.88),

          0 4px 10px
          rgba(128,38,55,.12);
      }

      .invitation-middle-title {
        color:
          #102e22;

        font-size:
          clamp(
            24px,
            6vw,
            34px
          );

        line-height:
          1.25;

        font-weight:
          900;

        margin:
          7px 0 3px;
      }

      .invitation-subtitle {
        color:
          #c82e48;

        font-size:
          clamp(
            39px,
            10vw,
            58px
          );

        line-height:
          1.1;

        font-weight:
          900;

        margin: 0;

        text-shadow:
          0 2px 0
          rgba(255,255,255,.86),

          0 4px 10px
          rgba(128,38,55,.10);
      }

      .invitation-gopuram-stage {
        position:
          absolute;

        left: 0;
        right: 0;

        bottom: 0;

        height:
          57%;

        z-index: 4;

        display: flex;

        align-items:
          flex-end;

        justify-content:
          center;

        overflow: hidden;
      }

      .invitation-gopuram-stage::after {
        content: "";

        position: absolute;

        left: 0;
        right: 0;

        bottom: 0;

        height: 13%;

        pointer-events:
          none;

        background:
          linear-gradient(
            180deg,
            transparent,
            rgba(226, 238, 235, .96)
          );
      }

      .invitation-gopuram-image {
        width: 100%;

        height: 100%;

        object-fit:
          contain;

        object-position:
          center bottom;

        mix-blend-mode:
          multiply;

        transform-origin:
          bottom center;
      }

      .invitation-bottom-fade {
        position:
          absolute;

        left: 0;
        right: 0;

        bottom: 0;

        height: 34px;

        z-index: 8;

        pointer-events:
          none;

        background:
          linear-gradient(
            180deg,
            transparent,
            rgba(221, 235, 232, .96)
          );
      }

      /* =====================================================
         GOPURAM
      ===================================================== */

      .gopuram-screen {
        justify-content:
          flex-start;

        padding-top:
          100px;

        padding-bottom: 0;
      }

      .gopuram-stage {
        position: absolute;

        left: 0;
        right: 0;

        bottom: 0;

        height: 76%;

        display: flex;

        align-items:
          flex-end;

        justify-content:
          center;

        overflow: hidden;
      }

      .gopuram-stage::after {
        content: "";

        position: absolute;

        left: 0;
        right: 0;

        bottom: 0;

        height: 17%;

        background:
          linear-gradient(
            180deg,
            transparent,
            rgba(239,226,204,.98)
          );

        pointer-events: none;
      }

      .gopuram-image {
        width: 100%;

        height: 100%;

        object-fit:
          contain;

        object-position:
          center bottom;

        mix-blend-mode:
          multiply;

        transform-origin:
          bottom center;
      }

      /* =====================================================
         PORTRAITS
      ===================================================== */

      .portrait-frame {
        width: 218px;
        height: 218px;

        position: relative;

        border-radius:
          50%;

        padding: 10px;

        background:
          radial-gradient(
            circle,
            #fff1c9 0 56%,
            #a97c2a 57% 63%,
            #e0c36e 64% 72%,
            #76551d 73% 77%,
            #d6b45c 78% 82%,
            transparent 83%
          );

        filter:
          drop-shadow(
            0 13px 23px
            rgba(70,49,20,.20)
          );
      }

      .portrait-frame::before {
        content: "";

        position: absolute;

        inset: -11px;

        border-radius:
          50%;

        border:
          2px solid
          rgba(152,111,36,.70);
      }

      .portrait-frame::after {
        content: "✦";

        position: absolute;

        top: -20px;

        left: 50%;

        transform:
          translateX(-50%);

        color:
          var(--gold);

        font-size: 24px;
      }

      .portrait-inner {
        width: 100%;
        height: 100%;

        overflow: hidden;

        border-radius:
          50%;

        border:
          5px solid
          #d3b45e;
      }

      .portrait-inner img {
        width: 100%;
        height: 100%;

        object-fit:
          cover;

        display: block;
      }

      /* =====================================================
         KALASH
      ===================================================== */

      .kalash {
        position: absolute;

        bottom: 42px;

        left: 50%;

        transform:
          translateX(-50%);

        width: 290px;

        height: 145px;

        pointer-events: none;
      }

      .kalash-pot {
        position: absolute;

        left: 50%;

        bottom: 0;

        transform:
          translateX(-50%);
      }

      .kalash-top {
        color:
          var(--green);

        font-size: 31px;
      }

      .kalash-body {
        width: 75px;
        height: 55px;

        border-radius:
          45% 45%
          40% 40%;

        border:
          2px solid
          #79551d;

        background:
          radial-gradient(
            circle at 35% 28%,
            #e4ca78,
            #a77729 72%
          );

        display: grid;

        place-items:
          center;

        color:
          #76521b;

        font-size: 23px;
      }

      .kalash-base {
        color:
          var(--maroon);

        font-size: 34px;

        margin-top:
          -8px;
      }

      /* =====================================================
         WEDDING DATE
      ===================================================== */

      .wedding-date {
        font-family:
          "Playfair Display",
          Georgia,
          serif;

        color:
          var(--maroon);

        font-size:
          clamp(
            40px,
            10vw,
            60px
          );

        font-weight: 700;

        letter-spacing:
          2px;

        margin-top:
          10px;
      }

      .wedding-time {
        color:
          var(--maroon);

        font-size: 16px;

        font-weight: 800;
      }

      /* =====================================================
         MANDAPAM
      ===================================================== */

      .mandapam-image {
        width: 100%;

        margin-top:
          22px;

        overflow: hidden;
      }

      .mandapam-image img {
        width: 100%;

        max-height:
          58vh;

        object-fit:
          contain;

        display: block;

        mix-blend-mode:
          multiply;
      }

      /* =====================================================
         EVENTS
      ===================================================== */

      .event-list {
        width: 100%;

        margin-top:
          35px;

        position: relative;
      }

      .event-line {
        position: absolute;

        left: 17px;

        top: 18px;
        bottom: 20px;

        width: 2px;

        background:
          linear-gradient(
            180deg,
            var(--gold),
            var(--green),
            var(--maroon)
          );
      }

      .event-item {
        min-height:
          190px;

        position: relative;

        display: grid;

        grid-template-columns:
          1fr 180px;

        gap: 18px;

        padding:
          10px
          0
          30px
          45px;

        text-align:
          left;
      }

      .event-item.reverse {
        grid-template-columns:
          180px 1fr;
      }

      .event-item.reverse
      .event-info {
        order: 2;
      }

      .event-item.reverse
      .event-photo {
        order: 1;
      }

      .event-node {
        position: absolute;

        left: 8px;

        top: 65px;

        width: 19px;
        height: 19px;

        border-radius:
          50%;

        background:
          var(--gold-light);

        border:
          4px solid
          var(--green);

        box-shadow:
          0 0 0 4px
          rgba(248,243,232,.95);
      }

      .event-date {
        color:
          var(--maroon);

        font-family:
          "Playfair Display",
          Georgia,
          serif;

        font-size: 13px;

        font-weight: 700;
      }

      .event-time {
        color:
          var(--maroon);

        font-size: 13px;

        font-weight: 800;
      }

      .event-title {
        color:
          var(--green-dark);

        font-size: 28px;

        line-height: 1.45;

        margin:
          7px 0 3px;
      }

      .event-description {
        color:
          #716754;

        font-size: 13px;

        line-height: 1.8;
      }

      .event-photo {
        width: 180px;
        height: 120px;

        overflow: hidden;

        border-radius:
          13px;

        border:
          4px solid
          #fdf8eb;

        box-shadow:
          0 8px 18px
          rgba(72,58,35,.18);
      }

      .event-photo img {
        width: 100%;
        height: 100%;

        object-fit:
          cover;
      }

      /* =====================================================
         GALLERY
      ===================================================== */

      .gallery {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 155px 155px 220px;
  gap: 12px;
  margin-top: 28px;
}

.gallery img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

/* 4 portrait images */
.gallery img:nth-child(1),
.gallery img:nth-child(2),
.gallery img:nth-child(3),
.gallery img:nth-child(4) {
  grid-column: auto;
}

/* Landscape image */
.gallery img:nth-child(5) {
  grid-column: 1 / -1;
}

      .gallery-photo {
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: 16px;
        border: 4px solid #eee0bf;
        box-shadow: 0 10px 22px rgba(70,57,37,.16);
      }

      .gallery-photo.tall {
        height: 100%;
        grid-row: span 2;
      }

      .gallery-photo.wide {
        height: 100%;
        grid-column: span 2;
      }

      .gallery-photo img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }

      /* =====================================================
         VENUE
      ===================================================== */

      .venue-photo {
        width: 100%;

        height: 310px;

        margin-top:
          30px;

        overflow: hidden;

        border-radius:
          16px;

        border:
          4px solid
          #e3d2ab;
      }

      .venue-photo img {
        width: 100%;
        height: 100%;

        object-fit:
          cover;
      }

      .venue-info {
        width: 100%;

        margin-top:
          15px;

        padding:
          15px;

        display: flex;

        align-items:
          flex-start;

        gap: 10px;

        text-align:
          left;

        border-radius:
          15px;

        background:
          rgba(255,250,239,.82);

        border:
          1px solid
          #cbb276;
      }

      .venue-info strong,
      .venue-info span {
        display: block;
      }

      .venue-info strong {
        color:
          var(--green-dark);

        font-size: 13px;
      }

      .venue-info span {
        color:
          #786f60;

        font-size: 11px;

        margin-top: 3px;
      }

      .map-button {
        margin-top:
          13px;

        display:
          inline-flex;

        align-items:
          center;

        gap: 7px;

        padding:
          11px 20px;

        color:
          #fff8e7;

        text-decoration:
          none;

        border-radius:
          999px;

        background:
          linear-gradient(
            180deg,
            #b38a38,
            #76551d
          );

        border:
          1px solid
          #d9bf79;

        box-shadow:
          0 6px 16px
          rgba(72,52,19,.18);
      }

      /* =====================================================
         FINAL
      ===================================================== */

      .final-title {
        color:
          var(--green-dark);

        font-size: 30px;

        line-height: 1.55;

        margin: 6px 0;
      }

      .final-copy {
        max-width:
          380px;

        color:
          #706756;

        font-size: 12px;

        line-height: 2;
      }

      .final-date {
        margin-top:
          15px;

        display: flex;

        align-items:
          center;

        justify-content:
          center;

        gap: 7px;

        color:
          var(--maroon);

        font-size: 12px;

        font-weight: 800;
      }

      .final-actions {
        margin-top:
          24px;

        display: flex;

        justify-content:
          center;

        flex-wrap: wrap;

        gap: 9px;
      }

      .final-actions button,
      .final-actions a {
        display:
          inline-flex;

        align-items:
          center;

        gap: 7px;

        padding:
          11px 18px;

        border-radius:
          999px;

        border:
          1px solid
          #c9af6f;

        background:
          rgba(255,250,239,.82);

        color:
          #6f531f;

        text-decoration:
          none;
      }

      /* =====================================================
         MUSIC BUTTON
      ===================================================== */

      .music-button {
        position: fixed;

        z-index: 500;

        right:
          max(
            15px,
            calc(
              (100vw - 576px) / 2
              + 15px
            )
          );

        bottom: 20px;

        width: 48px;
        height: 48px;

        border-radius:
          50%;

        border:
          1px solid
          #d9bd76;

        background:
          radial-gradient(
            circle,
            #dcbf72 0 45%,
            #947027 46% 100%
          );

        color:
          #fff8e7;

        display: grid;

        place-items:
          center;

        box-shadow:
          0 6px 18px
          rgba(65,47,19,.22);
      }

      /* =====================================================
         RESPONSIVE
      ===================================================== */

      /* PC / desktop: top mala hidden. Mobile/tablet: visible. */
      @media (min-width: 577px) {
        .top-mala-image {
          display: none;
        }
      }

      @media (max-width: 390px) {
        .top-mala-image { height: 126px; }
        .wedding-screen {
          padding-top: 148px;
          padding-left:
            16px;

          padding-right:
            16px;
        }

        .portrait-frame {
          width: 195px;
          height: 195px;
        }

        .real-leaf {
          width: 140px;
        }

        .real-leaf.left {
          left: -65px;
        }

        .real-leaf.right {
          right: -65px;
        }

        .banana-tree-frame {
          height: 62%;
        }

        .gallery {
          grid-auto-rows: 132px;
          gap: 9px;
        }

        .event-item {
          grid-template-columns:
            1fr 148px;

          gap: 12px;

          padding-left:
            40px;
        }

        .event-item.reverse {
          grid-template-columns:
            148px 1fr;
        }

        .event-photo {
          width: 148px;
          height: 98px;
        }

        .event-date {
          font-size: 12px;
        }

        .event-time {
          font-size: 12px;
        }

        .event-title {
          font-size: 23px;
        }

        .event-description {
          font-size: 12px;
        }

        .cover-main-title {
          font-size:
            clamp(
              58px,
              17vw,
              78px
            );
        }
      }

      /* =====================================================
         REDUCED MOTION
      ===================================================== */

      @media (
        prefers-reduced-motion: reduce
      ) {
        *,
        *::before,
        *::after {
          animation-duration:
            .01ms !important;

          animation-iteration-count:
            1 !important;

          scroll-behavior:
            auto !important;
        }
      }
    `}</style>
  );
}

/* =========================================================
   TELUGU GRAPHEME SEGMENTATION

   IMPORTANT:
   We DO NOT use:

       Array.from(text)

   because Telugu vathulu / guninthalu /
   conjuncts can consist of multiple Unicode
   code points.

   Intl.Segmenter keeps visible Telugu
   grapheme clusters together.
========================================================= */

function splitTelugu(text: string): string[] {
  const IntlAny = Intl as typeof Intl & {
    Segmenter?: new (
      locale?: string,
      options?: {
        granularity?: string;
      }
    ) => {
      segment: (
        input: string
      ) => Iterable<{
        segment: string;
      }>;
    };
  };

  if (IntlAny.Segmenter) {
    const segmenter =
      new IntlAny.Segmenter(
        "te",
        {
          granularity:
            "grapheme",
        }
      );

    return Array.from(
      segmenter.segment(text),
      (item) =>
        item.segment
    );
  }

  /*
    Fallback.
  */

  return Array.from(
    text.normalize("NFC")
  ).reduce<string[]>(
    (result, char) => {
      if (
        /[\u0C3E-\u0C4D\u0C55-\u0C56\u0C62-\u0C63]/.test(
          char
        ) &&
        result.length
      ) {
        result[
          result.length - 1
        ] += char;
      } else {
        result.push(char);
      }

      return result;
    },
    []
  );
}

/* =========================================================
   ANIMATED TEXT

   One-way animation.

   Enter:
       hidden → visible

   After appearing:
       STAYS

   No move-out.
========================================================= */

function AnimatedText({
  children,
  className = "",
  delay = 0,
  stagger = 0.035,
  direction = "up",
}: {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  direction?:
  | "up"
  | "left"
  | "right";
}) {
  const ref =
    useRef<HTMLDivElement | null>(
      null
    );

  const visible =
    useInView(ref, {
      once: true,
      amount: 0.22,
    });

  const graphemes = useMemo(
    () =>
      splitTelugu(children),
    [children]
  );

  return (
    <div
      ref={ref}
      className={className}
      aria-label={children}
      style={{
        overflow: "hidden",
        display: "block",
      }}
    >
      {graphemes.map(
        (
          grapheme,
          index
        ) => {
          let x = 0;

          if (
            direction ===
            "left"
          ) {
            x = -16;
          }

          if (
            direction ===
            "right"
          ) {
            x = 16;
          }

          return (
            <motion.span
              key={`${grapheme}-${index}`}
              initial={{
                opacity: 0,

                x,

                y:
                  direction ===
                    "up"
                    ? 16
                    : 0,
              }}
              animate={
                visible
                  ? {
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }
                  : undefined
              }
              transition={{
                duration: 0.32,

                delay:
                  delay +
                  index *
                  stagger,

                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
              style={{
                display:
                  "inline-block",

                whiteSpace:
                  grapheme === " "
                    ? "pre"
                    : "normal",

                willChange:
                  "transform, opacity",
              }}
            >
              {grapheme === " "
                ? "\u00A0"
                : grapheme}
            </motion.span>
          );
        }
      )}
    </div>
  );
}

/* =========================================================
   REVEAL

   once:true is VERY IMPORTANT.

   This prevents the element from animating
   out when scrolling back upward.
========================================================= */

function Reveal({
  children,
  delay = 0,
  y = 30,
  scale = 0.97,
}: {
  children: ReactNode;

  delay?: number;

  y?: number;

  scale?: number;
}) {
  const ref =
    useRef<HTMLDivElement | null>(
      null
    );

  const visible =
    useInView(ref, {
      once: true,
      amount: 0.16,
    });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y,
        scale,
      }}
      animate={
        visible
          ? {
            opacity: 1,
            y: 0,
            scale: 1,
          }
          : undefined
      }
      transition={{
        duration: 0.6,

        delay,

        ease: [
          0.22,
          1,
          0.36,
          1,
        ],
      }}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   LIGHTWEIGHT IMAGE PARALLAX

   No blur.
   No filter.
   No continuous animation.

   Just a small scroll transform.
========================================================= */

function ParallaxImage({
  src,
  alt = "",
}: {
  src: string;
  alt?: string;
}) {
  const ref =
    useRef<HTMLDivElement | null>(
      null
    );

  const {
    scrollYProgress,
  } = useScroll({
    target: ref,

    offset: [
      "start end",
      "end start",
    ],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [12, 0, -12]
  );

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",

          objectFit:
            "cover",

          display: "block",

          y,

          willChange:
            "transform",
        }}
      />
    </div>
  );
}

/* =========================================================
   FLOWER MALA

   Traditional hanging floral decoration.

   This replaces:
   - green top strip
   - fake candles
   - fake pots
========================================================= */

function FlowerMala() {
  return (
    <motion.div
      className="top-mala-image"
      aria-hidden="true"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <img src="/decor/top-mala.png" alt="" />
    </motion.div>
  );
}

function PetalShower() {
  return (
    <div className="petal-shower" aria-hidden="true">
      {Array.from({ length: 11 }).map((_, index) => (
        <span key={index} className={`petal petal-${index + 1}`} />
      ))}
    </div>
  );
}

function FloralDrift() {
  return (
    <div className="floral-drift" aria-hidden="true">
      <span className="drift-flower drift-1">✿</span>
      <span className="drift-flower drift-2">❀</span>
      <span className="drift-flower drift-3">✿</span>
      <span className="drift-flower drift-4">❀</span>
      <span className="drift-flower drift-5">✿</span>
      <span className="drift-flower drift-6">❀</span>
    </div>
  );
}

/* =========================================================
   BANANA LEAVES

   Add the real transparent image here:

   public/decor/banana-leaf.png
========================================================= */

function BananaLeaves() {
  return (
    <>
      <div className="real-leaf left">
        <motion.img
          src="/decor/banana-leaf.png"
          alt=""
          initial={{
            opacity: 0,
            x: -25,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.12,
          }}
          transition={{
            duration: 0.7,
            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          }}
        />
      </div>

      <div className="real-leaf right">
        <motion.img
          src="/decor/banana-leaf.png"
          alt=""
          initial={{
            opacity: 0,
            x: 25,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.12,
          }}
          transition={{
            duration: 0.7,
            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          }}
        />
      </div>
    </>
  );
}

function BananaTreeFrame() {
  return (
    <motion.img
      className="banana-tree-frame"
      src="/decor/banana-trees.png"
      alt=""
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
    />
  );
}

/* =========================================================
   KALASH
========================================================= */

function Kalash() {
  return (
    <motion.div
      className="kalash"
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.6,
        ease: [
          0.22,
          1,
          0.36,
          1,
        ],
      }}
    >
      <div className="kalash-pot">
        <div className="kalash-top">
          ◆
        </div>

        <div className="kalash-body">
          ✤
        </div>

        <div className="kalash-base">
          ✺
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   DIVIDER
========================================================= */

function Divider() {
  return (
    <div className="gold-divider">
      <span>
        ❧ ✦ ❧
      </span>
    </div>
  );
}

/* =========================================================
   PORTRAIT
========================================================= */

function Portrait({
  image,
  name,
}: {
  image: string;

  name: string;
}) {
  return (
    <motion.div
      className="portrait-frame"
      initial={{
        opacity: 0,
        scale: 0.86,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.7,
        ease: [
          0.16,
          1,
          0.3,
          1,
        ],
      }}
    >
      <div className="portrait-inner">
        <img
          src={image}
          alt={name}
        />
      </div>
    </motion.div>
  );
}

/* =========================================================
   MUSIC BUTTON

   NO infinite rotation.
========================================================= */

function MusicButton({
  playing,
  toggle,
}: {
  playing: boolean;

  toggle: () => void;
}) {
  return (
    <button
      className="music-button"
      onClick={toggle}
      aria-label={
        playing
          ? "Pause music"
          : "Play music"
      }
    >
      {playing ? (
        <Pause size={17} />
      ) : (
        <Music2 size={17} />
      )}
    </button>
  );
}

/* =========================================================
   MAIN APP
========================================================= */
function Toranam({
  bottom = false,
}: {
  bottom?: boolean;
}) {
  return (
    <div
      className={`golden-toranam ${bottom ? "bottom" : ""
        }`}
      aria-hidden="true"
    >
      {Array.from({ length: 17 }).map(
        (_, index) => (
          <span key={index} />
        )
      )}
    </div>
  );
}
export default function App() {
  const [opened, setOpened] =
    useState(false);

  const [playing, setPlaying] =
    useState(false);



  const mainRef =
    useRef<HTMLElement | null>(
      null
    );

  /* =======================================================
     SCROLL PROGRESS
  ======================================================= */

  const {
    scrollYProgress,
  } = useScroll({
    target: mainRef,

    offset: [
      "start start",
      "end end",
    ],
  });

  const progress = useSpring(
    scrollYProgress,
    {
      stiffness: 100,
      damping: 30,
    }
  );

  /* =======================================================
     AUDIO SETUP
  ======================================================= */

  const audioRef =
    useRef<HTMLAudioElement | null>(
      null
    );

  /* =======================================================
     AUDIO SETUP

     The audio object is created while the cover is
     visible. This is important because the invitation
     button must be able to start the music immediately
     after the user's click.
  ======================================================= */

  useEffect(() => {
    const music =
      new Audio(
        "/music/wedding.mp3"
      );

    music.loop = true;
    music.preload = "auto";
    music.volume = 0.42;

    audioRef.current = music;

    return () => {
      music.pause();
      music.src = "";
      audioRef.current = null;
    };
  }, []);

  /* =======================================================
     MUSIC TOGGLE
  ======================================================= */

  const toggleMusic =
    async () => {
      const music =
        audioRef.current;

      if (!music) {
        return;
      }

      try {
        if (music.paused) {
          await music.play();

          setPlaying(true);
        } else {
          music.pause();

          setPlaying(false);
        }
      } catch (error) {
        console.error(
          "Music could not be played:",
          error
        );

        setPlaying(false);
      }
    };
  /* =======================================================
     OPEN INVITATION

     Music starts only after user interaction.
======================================================= */

  const openInvitation =
    async () => {
      setOpened(true);

      const music =
        audioRef.current;

      if (!music) {
        return;
      }

      try {
        music.volume = 0.42;

        await music.play();

        setPlaying(true);
      } catch (error) {
        console.error(
          "Music autoplay failed:",
          error
        );

        /*
         * If the browser blocks playback,
         * the music button will still allow
         * the user to start it manually.
         */
        setPlaying(false);
      }
    };

  /* =======================================================
     FIRST PAGE
======================================================= */

  if (!opened) {
    return (
      <>
        <WeddingStyles />

        <div className="cover-screen">
          {/* Hanging flower mala */}
          <FlowerMala />

          <PetalShower />

          {/* Cover-only animated decoration */}
          <div className="cover-orbit" aria-hidden="true" />
          <div className="cover-glow" aria-hidden="true" />
          <div className="cover-sparkles" aria-hidden="true">
            <span className="cover-spark s1">✦</span>
            <span className="cover-spark s2">✦</span>
            <span className="cover-spark s3">✧</span>
            <span className="cover-spark s4">✦</span>
          </div>

          {/* Real banana leaves */}
          <BananaLeaves />

          {/* Ganesha */}
          <motion.img
            src={ganesha}
            alt="Ganesha"
            className="cover-ganesha"
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          />

          {/* =================================================
              FIRST PAGE CAPTION
          ================================================= */}

          <AnimatedText
            className="cover-caption"
            delay={0.2}
            stagger={0.045}
          >
            ॥ శ్రీ రామ • జయరామ • జయ జయరామ ॥
          </AnimatedText>

          {/* =================================================
              BIG MAIN TITLE
          ================================================= */}

          <AnimatedText
            className="cover-main-title"
            delay={0.55}
            stagger={0.075}
          >
            భోగి
          </AnimatedText>

          {/* =================================================
              SUBTITLE
          ================================================= */}

          <AnimatedText
            className="cover-subtitle"
            delay={1.0}
            stagger={0.05}
          >
            వివాహ
          </AnimatedText>

          {/* =================================================
              DIVIDER
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scaleX: 0,
            }}
            animate={{
              opacity: 1,
              scaleX: 1,
            }}
            transition={{
              delay: 1.25,
              duration: 0.45,
              ease: "easeOut",
            }}
          >
            <Divider />
          </motion.div>

          {/* =================================================
              OPEN BUTTON
          ================================================= */}

          <motion.button
            className="cover-button"
            onClick={
              openInvitation
            }
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.45,
              duration: 0.5,
              ease: "easeOut",
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            ఆహ్వానాన్ని స్వీకరించండి
          </motion.button>
        </div>
      </>
    );
  }

  /* =======================================================
     FULL INVITATION
======================================================= */

  return (
    <>
      <WeddingStyles />

      <main
        ref={mainRef}
        className="wedding-app"
      >
        {/* =================================================
            SCROLL PROGRESS
        ================================================= */}

        <motion.div
          style={{
            position: "fixed",

            top: 0,
            left: 0,

            width: "100%",

            height: 3,

            background:
              `linear-gradient(
                90deg,
                ${COLORS.maroon},
                ${COLORS.gold},
                ${COLORS.green}
              )`,

            scaleX: progress,

            transformOrigin:
              "left",

            zIndex: 999,
          }}
        />

        {/* Music */}
        <MusicButton
          playing={playing}
          toggle={toggleMusic}
        />

        {/* =================================================
            SECTION 01
            PROVIDED INVITATION PAGE
        ================================================= */}

        <section
          className="
            wedding-screen
            invitation-intro-screen
          "
        >
          {/* Current top decoration.
              We can replace FlowerMala later with the
              final decoration from the reference. */}
          <FlowerMala />

          <div
            className="invitation-intro-content"
          >
            <motion.img
              src={ganesha}
              alt="Ganesha"
              className="invitation-ganesha"
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.65,
                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
            />

            <AnimatedText
              className="invitation-main-title"
              delay={0.38}
              stagger={0.07}
            >
              భోగి
            </AnimatedText>

            <AnimatedText
              className="invitation-middle-title"
              delay={0.82}
              stagger={0.05}
            >
              వారి
            </AnimatedText>

            <AnimatedText
              className="invitation-subtitle"
              delay={1.05}
              stagger={0.055}
            >
              వివాహ ఆహ్వానం
            </AnimatedText>
          </div>

          {/* Large gopuram belongs ONLY to this
              supplied invitation page. It is NOT
              part of the later Sumuhurtham page. */}
          <motion.div
            className="invitation-gopuram-stage"
            initial={{
              y: "105%",
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 1.25,
              duration: 1.0,
              ease: [
                0.16,
                1,
                0.3,
                1,
              ],
            }}
          >
            <img
              src="/decor/temple.png"
              alt="Temple Gopuram"
              className="invitation-gopuram-image"
            />
          </motion.div>

          <div
            className="invitation-bottom-fade"
          />
        </section>

        {/* =================================================
            SECTION 03
            BRIDE
        ================================================= */}
        {/* =================================================
            SECTION 03
            BRIDE
        ================================================= */}

        <section className="wedding-screen">
          <FlowerMala />

          <BananaTreeFrame />

          <Reveal
            delay={0}
          >
            <Portrait
              image={bride}
              name={
                WEDDING.bride
              }
            />
          </Reveal>

          <div
            style={{
              marginTop: 28,
            }}
          >
            <AnimatedText
              className="gold-kicker"
              delay={0.7}
              stagger={0.045}
            >
              వధువు
            </AnimatedText>

            <AnimatedText
              className="gold-title"
              delay={0.95}
              stagger={0.07}
              direction="right"
            >
              {
                WEDDING.bride
              }
            </AnimatedText>

            <AnimatedText
              className="teal-title"
              delay={1.5}
              stagger={0.018}
            >
              ప్రియమైన కుటుంబ సభ్యుల ముద్దుల కుమార్తె
            </AnimatedText>

            <motion.div
              initial={{
                opacity: 0,
                scaleX: 0,
              }}
              whileInView={{
                opacity: 1,
                scaleX: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 2.05,
                duration: 0.45,
              }}
            >
              <Divider />
            </motion.div>
          </div>

          <Kalash />

        </section>

        {/* =================================================
            SECTION 04
            GROOM
        ================================================= */}

        <section className="wedding-screen">
          <FlowerMala />

          <BananaTreeFrame />

          <Reveal
            delay={0}
          >
            <Portrait
              image={groom}
              name={
                WEDDING.groom
              }
            />
          </Reveal>

          <div
            style={{
              marginTop: 28,
            }}
          >
            <AnimatedText
              className="gold-kicker"
              delay={0.7}
              stagger={0.045}
            >
              వరుడు
            </AnimatedText>

            <AnimatedText
              className="gold-title"
              delay={0.95}
              stagger={0.07}
              direction="left"
            >
              {
                WEDDING.groom
              }
            </AnimatedText>

            <AnimatedText
              className="teal-title"
              delay={1.5}
              stagger={0.018}
            >
              ప్రియమైన కుటుంబ సభ్యుల ముద్దుల కుమారుడు
            </AnimatedText>

            <motion.div
              initial={{
                opacity: 0,
                scaleX: 0,
              }}
              whileInView={{
                opacity: 1,
                scaleX: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 2.05,
                duration: 0.45,
              }}
            >
              <Divider />
            </motion.div>
          </div>

          <Kalash />

        </section>

        {/* =================================================
            SECTION 05
            WEDDING DATE + MANDAPAM
        ================================================= */}

        <section className="wedding-screen">
          <FlowerMala />

          <FloralDrift />

          <BananaLeaves />

          <AnimatedText
            className="gold-kicker"
            delay={0}
            stagger={0.045}
          >
            శుభముహూర్తం
          </AnimatedText>

          <AnimatedText
            className="teal-title"
            delay={0.28}
            stagger={0.045}
          >
            మా వివాహ మహోత్సవం
          </AnimatedText>

          <motion.div
            className="wedding-date"
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              delay: 0.72,
              duration: 0.55,
            }}
          >
            {WEDDING.date}
          </motion.div>

          <AnimatedText
            className="wedding-time"
            delay={1.05}
            stagger={0.025}
          >
            {
              WEDDING.time
            }
          </AnimatedText>

          <motion.div
            initial={{
              opacity: 0,
              scaleX: 0,
            }}
            whileInView={{
              opacity: 1,
              scaleX: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 1.35,
              duration: 0.45,
            }}
          >
            <Divider />
          </motion.div>

          <motion.div
            className="mandapam-image"
            initial={{
              opacity: 0,
              y: 55,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.12,
            }}
            transition={{
              delay: 1.65,
              duration: 0.75,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
          >
            <ParallaxImage
              src={mandapam}
              alt="Wedding Mandapam"
            />
          </motion.div>

        </section>

        {/* =================================================
            SECTION 06
            EVENTS
        ================================================= */}

        {/* <section
          className="wedding-screen"
          style={{
            alignItems:
              "stretch",

            textAlign:
              "left",
          }}
        >
          <FlowerMala />

          <BananaLeaves />

          <div
            style={{
              textAlign:
                "center",
            }}
          >
            <AnimatedText
              className="gold-kicker"
              stagger={0.04}
            >
              కార్యక్రమాలు
            </AnimatedText>

            <AnimatedText
              className="teal-title"
              delay={0.25}
              stagger={0.045}
            >
              శుభకార్యములు
            </AnimatedText>
          </div>

          <div className="event-list">
            <div className="event-line" />

            {EVENTS.map(
              (
                event,
                index
              ) => {
                const delay =
                  0.6 +
                  index *
                  0.65;

                return (
                  <Reveal
                    key={
                      event.title
                    }
                    delay={
                      delay
                    }
                  >
                    <article
                      className={`event-item ${index % 2
                          ? "reverse"
                          : ""
                        }`}
                    >
                      <div className="event-node" />

                      <div className="event-info">
                        <AnimatedText
                          className="event-date"
                          delay={
                            delay
                          }
                          stagger={0.018}
                        >
                          {
                            event.date
                          }
                        </AnimatedText>

                        <AnimatedText
                          className="event-time"
                          delay={
                            delay +
                            0.18
                          }
                          stagger={0.018}
                        >
                          {
                            event.time
                          }
                        </AnimatedText>

                        <AnimatedText
                          className="event-title"
                          delay={
                            delay +
                            0.32
                          }
                          stagger={0.045}
                        >
                          {
                            event.title
                          }
                        </AnimatedText>

                        <AnimatedText
                          className="event-description"
                          delay={
                            delay +
                            0.65
                          }
                          stagger={0.012}
                        >
                          {
                            event.description
                          }
                        </AnimatedText>
                      </div>

                      <motion.div
                        className="event-photo"
                        initial={{
                          opacity: 0,
                          scale: 0.9,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                        }}
                        viewport={{
                          once: true,
                          amount: 0.18,
                        }}
                        transition={{
                          delay:
                            delay +
                            0.45,

                          duration:
                            0.55,
                        }}
                      >
                        <ParallaxImage
                          src={
                            event.image
                          }
                          alt={
                            event.title
                          }
                        />
                      </motion.div>
                    </article>
                  </Reveal>
                );
              }
            )}
          </div>

          <Kalash />

          <motion.div
            className="events-bottom-decor"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.45 }}
          >
            ❧ ✿ ❧
          </motion.div>
        </section> */}

        {/* =================================================
            SECTION 07
            VENUE
        ================================================= */}

        <section className="wedding-screen">
          <FlowerMala />

          <BananaLeaves />

          <AnimatedText
            className="gold-kicker"
            stagger={0.04}
          >
            వేదిక
          </AnimatedText>

          <AnimatedText
            className="teal-title"
            delay={0.25}
            stagger={0.045}
          >
            మా శుభవేదిక
          </AnimatedText>

          <motion.div
            className="venue-photo"
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.18,
            }}
            transition={{
              delay: 0.7,
              duration: 0.65,
            }}
          >
            <ParallaxImage
              src={venue}
              alt="Wedding venue"
            />
          </motion.div>

          <Reveal
            delay={1.25}
          >
            <div className="venue-info">
              <MapPin
                size={19}
              />

              <div>
                <strong>
                  {
                    WEDDING.venue
                  }
                </strong>

                <span>
                  {
                    WEDDING.city
                  }
                </span>
              </div>
            </div>

            <a
              className="map-button"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                WEDDING.venue +
                " " +
                WEDDING.city
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              <Navigation
                size={16}
              />

              వేదికకు దారి
            </a>
          </Reveal>

        </section>

        {/* =================================================
            SECTION 08
            GALLERY
        ================================================= */}

        <section className="wedding-screen">
          <FlowerMala />

          <FloralDrift />

          <AnimatedText
            className="gold-kicker"
            stagger={0.04}
          >
            మధుర జ్ఞాపకాలు
          </AnimatedText>

          <AnimatedText
            className="teal-title"
            delay={0.25}
            stagger={0.04}
          >
            మా ప్రయాణంలోని కొన్ని క్షణాలు
          </AnimatedText>

          <AnimatedText
            className="gold-kicker"
            delay={0.65}
            stagger={0.012}
          >
            ప్రేమ, నవ్వులు, జ్ఞాపకాలతో నిండిన మా కథ
          </AnimatedText>

          <div className="gallery">
            {[
              pic1,
              pic2,
              pic3,
              pic4,
              pic5,
            ].map(
              (
                image,
                index
              ) => (
                <motion.div
                  key={image}
                  className={`gallery-photo ${index === 0
                      ? "tall"
                      : index === 3 || index === 4
                        ? "wide"
                        : ""
                    }`}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    delay:
                      0.95 +
                      index *
                      0.18,

                    duration:
                      0.55,

                    ease: [
                      0.22,
                      1,
                      0.36,
                      1,
                    ],
                  }}
                >
                  <ParallaxImage
                    src={image}
                    alt=""
                  />
                </motion.div>
              )
            )}
          </div>

          <BananaLeaves />

        </section>

        {/* =================================================
            SECTION 09
            BLESSINGS
        ================================================= */}

        <section className="wedding-screen">
          <FlowerMala />

          <FloralDrift />

          <BananaLeaves />

          <motion.img
            src={ganesha}
            alt="Ganesha"
            style={{
              width: 105,
              height: 105,

              objectFit:
                "contain",

              mixBlendMode:
                "multiply",
            }}
            initial={{
              opacity: 0,
              scale: 0.85,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.65,
            }}
          />

          <AnimatedText
            className="teal-title"
            delay={0.65}
            stagger={0.045}
          >
            మీ ఆశీస్సులే మా బలం
          </AnimatedText>

          <AnimatedText
            className="gold-kicker"
            delay={1.05}
            stagger={0.012}
          >
            శ్రీ గణేశుని కృపతో, పెద్దల ఆశీస్సులతో మా కొత్త జీవిత ప్రయాణానికి శ్రీకారం చుడుతున్నాము
          </AnimatedText>

          <motion.div
            initial={{
              opacity: 0,
              scaleX: 0,
            }}
            whileInView={{
              opacity: 1,
              scaleX: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 1.65,
              duration: 0.45,
            }}
          >
            <Divider />
          </motion.div>

          <motion.div
            className="blessing-card"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ delay: 1.95, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="blessing-flowers">✿ ❀ ✿</div>
            <div className="blessing-small-copy">
              మీ ప్రేమ, ఆప్యాయత మరియు ఆశీస్సులతో మా శుభకార్యం మరింత మధురంగా మారుతుంది
            </div>
          </motion.div>

          <motion.img
            className="hands-wedding-art"
            src="/decor/hands-wedding.png"
            alt="Wedding joined hands"
            initial={{
              opacity: 0,
              y: 34,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              delay: 2.2,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          <Kalash />

          <motion.div
            className="last-page-decor"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 2.25, duration: 0.45 }}
            aria-hidden="true"
          >
            <span>✿</span>
            <span className="diamond">◆</span>
            <span className="center">✦</span>
            <span className="diamond">◆</span>
            <span>✿</span>
          </motion.div>

        </section>

        {/* =================================================
            SECTION 10
            FINAL
        ================================================= */}

        <section className="wedding-screen">
          <FlowerMala />

          <FloralDrift />

          <BananaLeaves />

          <motion.img
            src={ganesha}
            alt="Ganesha"
            style={{
              width: 105,
              height: 105,

              objectFit:
                "contain",

              mixBlendMode:
                "multiply",
            }}
            initial={{
              opacity: 0,
              scale: 0.85,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.65,
            }}
          />

          <AnimatedText
            className="gold-kicker"
            delay={0.6}
            stagger={0.04}
          >
            శుభమస్తు
          </AnimatedText>

          <AnimatedText
            className="final-title"
            delay={0.9}
            stagger={0.045}
          >
            మీ రాకతో మా ఆనందం
          </AnimatedText>

          <AnimatedText
            className="final-title"
            delay={1.35}
            stagger={0.045}
          >
            పూర్తి అవుతుంది
          </AnimatedText>

          <motion.div
            initial={{
              opacity: 0,
              scaleX: 0,
            }}
            whileInView={{
              opacity: 1,
              scaleX: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 1.8,
              duration: 0.45,
            }}
          >
            <Divider />
          </motion.div>

          <AnimatedText
            className="final-copy"
            delay={2.1}
            stagger={0.012}
          >
            మా జీవితంలో ఈ శుభదినాన్ని మీతో కలిసి జరుపుకోవాలని మనస్ఫూర్తిగా కోరుకుంటున్నాము
          </AnimatedText>

          <motion.div
            className="final-date"
            initial={{
              opacity: 0,
              y: 12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 2.65,
              duration: 0.45,
            }}
          >
            <CalendarDays
              size={17}
            />

            <span>
              {WEDDING.date}
              {" • "}
              {WEDDING.time}
            </span>
          </motion.div>

          <motion.div
            className="final-actions"
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 2.95,
              duration: 0.5,
            }}
          >
            <button
              onClick={
                toggleMusic
              }
            >
              {playing ? (
                <Pause
                  size={16}
                />
              ) : (
                <Play
                  size={16}
                />
              )}

              {playing
                ? "సంగీతం ఆపండి"
                : "సంగీతం వినండి"}
            </button>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                WEDDING.venue +
                " " +
                WEDDING.city
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              <MapPin
                size={16}
              />

              వేదిక
            </a>
          </motion.div>

          <motion.img
            className="hands-wedding-art"
            src="/decor/hands-wedding.png"
            alt="Wedding joined hands"
            initial={{
              opacity: 0,
              y: 34,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              delay: 3.0,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          <Kalash />

          <motion.div
            className="last-page-decor"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 3.25, duration: 0.45 }}
            aria-hidden="true"
          >
            <span>✿</span>
            <span className="diamond">◆</span>
            <span className="center">✦</span>
            <span className="diamond">◆</span>
            <span>✿</span>
          </motion.div>

        </section>
      </main>
    </>
  );
}