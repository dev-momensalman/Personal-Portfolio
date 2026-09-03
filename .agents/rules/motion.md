# Motion & UI Animation Standards

Apply the guidelines from [.agents/skills/motion/SKILL.md](file:///c:/Users/momen/Documents/GitHub/Personal-Portfolio/.agents/skills/motion/SKILL.md) to all frontend and UI tasks.

## Key Directives
- **Always Active**: Utilize `motion` components and spring physics across buttons, cards, modals, tabs, and page transitions.
- **Hardware Acceleration**: Only animate `x`, `y`, `scale`, `rotate`, `opacity`, and `filter`. Use `layout` / `layoutId` for dimensions and element morphing.
- **Micro-interactions**: Incorporate `whileHover`, `whileTap`, and subtle spring transitions for a premium tactile feel.
- **Entrances & Exits**: Use `whileInView` for scroll reveals, and `AnimatePresence` with `key` for smooth unmounting.
- **Stagger**: Apply staggered delays to grids, badges, and card lists.
