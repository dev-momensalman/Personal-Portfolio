---
name: motion
description: Comprehensive guide, API reference, patterns, and best practices for Motion (formerly Framer Motion) to build high-performance 60fps web animations, gestures, scroll effects, FLIP layout transitions, and presence animations.
---

# Motion (Framer Motion) Animation Guide

Motion is the modern, hardware-accelerated animation library for JavaScript, React, and Vue. It builds on top of the Web Animations API (WAAPI) and spring physics to deliver 60/120fps fluid UI transitions with minimum bundle size.

---

## 1. Installation & Imports

```bash
npm install motion
```

### React / Next.js
```tsx
import { 
  motion, 
  AnimatePresence, 
  useScroll, 
  useTransform, 
  useSpring,
  useMotionValue 
} from "motion/react";
```

### Vanilla JavaScript / Vite / HTML
```js
import { animate, scroll, inView, stagger, timeline } from "motion";
```

---

## 2. Declarative React API (`motion` Components)

Wrap standard HTML/SVG elements with `motion.` to create animated components: `<motion.div>`, `<motion.button>`, `<motion.span>`, `<motion.svg>`.

### Basic Keyframes & State Transitions
```tsx
<motion.div
  initial={{ opacity: 0, y: 20, scale: 0.95 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{
    duration: 0.5,
    ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier spring feel
  }}
/>
```

### Interactive Gestures (Hover, Tap, Focus)
```tsx
<motion.button
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.95, y: 0 }}
  whileFocus={{ ring: "2px solid #6366f1" }}
  transition={{ type: "spring", stiffness: 400, damping: 25 }}
  className="btn-primary"
>
  Click Me
</motion.button>
```

### Spring Physics Configurations
```tsx
// Snappy & Elastic
transition={{ type: "spring", stiffness: 500, damping: 15 }}

// Smooth & Fluid (Recommended for Cards & Modals)
transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.8 }}

// Gentle & Elegant
transition={{ type: "spring", stiffness: 120, damping: 20 }}
```

---

## 3. Unmount & Presence Animations (`AnimatePresence`)

`AnimatePresence` enables exit animations when React components unmount from the DOM.

```tsx
import { motion, AnimatePresence } from "motion/react";

function Modal({ isOpen, onClose }) {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal-backdrop"
          onClick={onClose}
        >
          <motion.div
            key="content"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="modal-card"
          >
            <h2>Modal Title</h2>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

*Modes:*
- `mode="wait"`: Waits for old element to finish exit animation before rendering new element.
- `mode="popLayout"`: Pops exiting element out of layout flow so adjacent elements layout instantly.

---

## 4. Shared Layout & FLIP Animations (`layout` & `layoutId`)

Motion automatically computes FLIP (First, Last, Invert, Play) layout transitions between different states or DOM trees.

### Automatic Layout Morphing (`layout`)
```tsx
<motion.div 
  layout 
  transition={{ type: "spring", stiffness: 300, damping: 30 }}
  className={isExpanded ? "card-expanded" : "card-collapsed"}
>
  {/* Content morhps smoothly */}
</motion.div>
```

### Shared Element Transitions across Tabs (`layoutId`)
```tsx
function TabBar({ tabs, activeTab, setActiveTab }) {
  return (
    <div className="tab-list">
      {tabs.map((tab) => (
        <button key={tab.id} onClick={() => setActiveTab(tab.id)}>
          {tab.label}
          {activeTab === tab.id && (
            <motion.div
              layoutId="active-pill"
              className="active-indicator"
              transition={{ type: "spring", stiffness: 400, damping: 35 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}
```

---

## 5. Scroll & Viewport Animations

### Reveal on Scroll (`whileInView`)
```tsx
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  <h2>Scroll Section</h2>
</motion.div>
```

### Interactive Scroll Progress & Parallax (`useScroll` & `useTransform`)
```tsx
function ScrollProgressHeader() {
  const { scrollYProgress } = useScroll();
  
  // Transform 0 -> 1 scroll to 0% -> 100% width or scale
  const scaleX = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <motion.div style={{ y: yParallax, opacity: headerOpacity }}>
        <h1>Hero Parallax Title</h1>
      </motion.div>
    </>
  );
}
```

---

## 6. Drag & Gestures

```tsx
<motion.div
  drag="x" // "x", "y", or true
  dragConstraints={{ left: -100, right: 100 }}
  dragElastic={0.2}
  dragSnapToOrigin
  whileDrag={{ scale: 1.05, cursor: "grabbing" }}
  className="draggable-card"
>
  Drag Me
</motion.div>
```

---

## 7. Framework-Agnostic / Vanilla JavaScript API

For pure HTML/JS or lightweight web applications without React:

```js
import { animate, scroll, inView, stagger, timeline } from "motion";

// 1. Direct Element Animation
animate(".card", { opacity: [0, 1], y: [30, 0] }, { duration: 0.5, ease: "ease-out" });

// 2. Staggered Group Animation
animate(".grid-item", { scale: [0.8, 1], opacity: [0, 1] }, { delay: stagger(0.1) });

// 3. Scroll Intersection Trigger
inView(".animate-on-view", (info) => {
  animate(info.target, { opacity: 1, y: 0 }, { duration: 0.6 });
});

// 4. Scroll Timeline
scroll(animate(".header-bg", { opacity: [0, 1] }), {
  target: document.querySelector(".header"),
  offset: ["start start", "end start"]
});

// 5. Sequenced Timeline
timeline([
  [".box1", { x: 100 }, { duration: 0.4 }],
  [".box2", { y: 50 }, { duration: 0.3, at: "-0.1" }],
  [".text", { opacity: 1 }]
]);
```

---

## 8. Masterclass UI Animation Rules

1. **Avoid Over-Animating**: Use subtle micro-interactions (`scale: 1.02`, `y: -2`) rather than aggressive shifts.
2. **Hardware Acceleration**: Always animate GPU-accelerated CSS properties: `transform` (`x`, `y`, `scale`, `rotate`), `opacity`, `filter`. Avoid animating `width`, `height`, `margin`, `padding` directly (use `layout` or `scale` instead).
3. **Use Spring Physics for Interactive Elements**: Buttons, toggles, tabs, and drag items feel much more tactile and natural with spring physics (`stiffness`, `damping`).
4. **Stagger Grid Elements**: When displaying lists or bento grids, use stagger (`delay: i * 0.05`) to create an inviting entrance flow.
5. **Always Set `key` with `AnimatePresence`**: Ensure direct children of `AnimatePresence` have unique `key` props so Motion can track entering/exiting nodes accurately.
