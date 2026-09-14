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

---

## Engineering & Architecture Standards (Matt Pocock Skills Suite)

The workspace has active engineering workflows from [mattpocock/skills](file:///c:/Users/momen/Documents/GitHub/Personal-Portfolio/.agents/skills/). Always leverage these skills based on the situation:

1. **Architecture & Module Design (`codebase-design`, `setup-ts-deep-modules`)**:
   - Favor deep modules with small, clean public interfaces that hide complex implementation details.
   - Keep boundaries testable and navigable.

2. **Debugging & Regressions (`diagnosing-bugs`)**:
   - Follow the structured diagnosis loop: reproduce reliably, isolate root cause with high-trust evidence before applying fixes, and verify.

3. **Code Reviews (`code-review`)**:
   - Review changes against repository standards and requirements/specs.

4. **Testing (`tdd`)**:
   - Practice test-driven thinking (Red-Green-Refactor) when adding complex logic or fixing non-trivial bugs.

5. **Planning & Spec Decomposition (`to-spec`, `to-tickets`, `wayfinder`, `grill-me`)**:
   - Decompose multi-step tasks into clear tracer-bullet tickets.
   - Stress-test architectural choices and plans before executing complex refactors.

6. **Skill Router (`ask-matt`)**:
   - Consult `ask-matt` whenever deciding which specialized skill or workflow best suits an ambiguous engineering situation.

---

## Agentic Superpowers Suite (`obra/superpowers`)

1. **Brainstorming & Intent Exploration (`brainstorming`)**:
   - Explore user intent, requirements, and alternatives before committing to implementation.
2. **Subagent & Parallel Execution (`subagent-driven-development`, `dispatching-parallel-agents`)**:
   - Break independent tasks across subagents without shared state conflicts.
3. **Verification Before Completion (`verification-before-completion`)**:
   - Always run verification tests and confirm output evidence before claiming success or completing tasks.

---

## UI/UX & Web Excellence Standards (`vercel-labs/agent-skills`)

1. **Web Interface Guidelines (`web-design-guidelines`)**:
   - Audit and enforce accessibility, visual balance, contrast ratios, and touch targets against modern web guidelines.
2. **React & Web Performance (`vercel-react-best-practices`, `vercel-composition-patterns`)**:
   - Keep bundle size minimal, eliminate unnecessary re-renders, and favor scalable compound component architectures.
3. **Mobile & View Transitions (`vercel-react-native-skills`, `vercel-react-view-transitions`)**:
   - Follow native mobile patterns and fluid view transitions between page states.

---

## Quran, Tafsir & Mushaf Standards (`quran-mushaf-engine`)

Whenever building, refactoring, or integrating Quranic, Tafsir, or Islamic features:
- Reference and apply [quran-mushaf-engine](file:///c:/Users/momen/Documents/GitHub/Personal-Portfolio/.agents/skills/quran-mushaf-engine/SKILL.md).
- Follow King Fahd Complex Uthmanic font standards (KFGQPC Hafs).
- Maintain 3-layer text separation (Uthmani, Clean Imlaei, Page Glyphs).
- Implement search normalization (diacritic removal, Alef/Yaa canonicalization).
- Use segment-based timestamp audio synchronization with smooth active-ayah highlighting.
