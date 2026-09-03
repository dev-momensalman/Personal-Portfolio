# Agent Guidelines & Design System Rules

## Mandatory Animation & UI Design Standard: Motion (Framer Motion)

Whenever creating, modifying, or refactoring UI components, pages, or interactive elements in this project:

1. **Always Use the Motion Skill**:
   - Reference and follow all patterns established in [SKILL.md](file:///c:/Users/momen/Documents/GitHub/Personal-Portfolio/.agents/skills/motion/SKILL.md).
   - Use `motion` components (`motion.div`, `motion.button`, `motion.span`, `motion.a`, etc.) for rich, fluid interactions.

2. **Core Animation Principles**:
   - **Hardware Acceleration (GPU Only)**: Animate `transform` (`x`, `y`, `scale`, `rotate`), `opacity`, and `filter`. Never animate `width`, `height`, `top`, or `margin` directly; use `layout` / `layoutId` (FLIP) or `scale` instead.
   - **Spring Physics**: Use natural spring transitions for interactive elements (buttons, pills, tabs, dialogs) with `stiffness: 300–400` and `damping: 25–35`.
   - **Interactive Gestures**: Provide immediate tactile feedback using `whileHover={{ scale: 1.02, y: -2 }}`, `whileTap={{ scale: 0.97 }}`, and focus states.
   - **Scroll & Viewport Reveals**: Use `whileInView` with `viewport={{ once: true, amount: 0.2 }}` and subtle entrance transitions (`y: 20 -> 0`, `opacity: 0 -> 1`).
   - **Staggered Sequences**: Stagger lists, bento grids, and skill badges using stagger delays (`delay: index * 0.05`).
   - **Exit Animations**: Wrap conditional or unmounting components in `<AnimatePresence mode="wait">` and always provide a unique `key`.
   - **Shared Layouts**: Use `layoutId` for tabs, navigation pills, and active indicators.

3. **Subtle & Premium**:
   - Prioritize elegant micro-interactions over jarring or slow animations.
   - Maintain 60fps / 120fps fluid performance at all times.
