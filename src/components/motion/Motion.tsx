"use client";

import { useRef, useSyncExternalStore, ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useReducedMotion,
  type Variants,
} from "motion/react";
import { clsx } from "clsx";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Fades a block up as it scrolls into view. Children stagger if `stagger` is set. */
export function Reveal({
  children,
  className,
  delay = 0,
  stagger,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "div" | "section" | "li" | "article";
}) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as];

  const variants: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduced ? 0.01 : 0.7,
        ease: EASE,
        delay,
        ...(stagger ? { staggerChildren: stagger, delayChildren: delay } : {}),
      },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}

/** A child of a `Reveal` with `stagger` — inherits the parent's orchestration. */
export function RevealItem({ children, className }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: reduced ? 0 : 20 },
        visible: { opacity: 1, y: 0, transition: { duration: reduced ? 0.01 : 0.6, ease: EASE } },
      }}
    >
      {children}
    </motion.div>
  );
}

/** Headline that reveals word by word from behind a mask. */
export function WordReveal({
  text,
  className,
  accentFrom,
  delay = 0,
  as: Tag = "h2",
  id,
}: {
  text: string;
  className?: string;
  /** Index of the first word rendered in the accent colour. */
  accentFrom?: number;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p";
  id?: string;
}) {
  const reduced = useReducedMotion();
  const words = text.split(" ");

  return (
    <Tag id={id} className={className}>
      <motion.span
        className="inline"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: reduced ? 0 : 0.055, delayChildren: delay } },
        }}
      >
        {words.map((word, i) => (
          <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom pb-[0.08em]">
            <motion.span
              className={clsx("inline-block", accentFrom !== undefined && i >= accentFrom && "text-accent")}
              variants={{
                hidden: { y: reduced ? 0 : "110%", opacity: reduced ? 0 : 1 },
                visible: { y: "0%", opacity: 1, transition: { duration: reduced ? 0.01 : 0.8, ease: EASE } },
              }}
            >
              {word}
            </motion.span>
            {i < words.length - 1 && <span>&nbsp;</span>}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}

const COARSE_POINTER = "(pointer: coarse)";

function subscribeCoarsePointer(onChange: () => void) {
  const query = window.matchMedia(COARSE_POINTER);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function useCoarsePointer() {
  return useSyncExternalStore(
    subscribeCoarsePointer,
    () => window.matchMedia(COARSE_POINTER).matches,
    () => false
  );
}

/** Scroll-linked parallax on an image frame. `strength` is travel in pixels. */
export function Parallax({
  children,
  className,
  strength = 60,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const coarse = useCoarsePointer();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [strength, -strength]);
  const smoothY = useSpring(y, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <div ref={ref} className={clsx("overflow-hidden", className)}>
      {/* On touch the spring keeps easing after the finger lifts, so track scroll 1:1. */}
      <motion.div className="h-full w-full" style={reduced ? undefined : { y: coarse ? y : smoothY, scale: 1.12 }}>
        {children}
      </motion.div>
    </div>
  );
}

/** Button wrapper that pulls toward the cursor. Pointer-fine devices only. */
export function Magnetic({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.3 });

  const handleMove = (e: React.PointerEvent) => {
    if (reduced || e.pointerType !== "mouse" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.28);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.28);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={clsx("inline-block", className)}
      style={{ x: springX, y: springY }}
      onPointerMove={handleMove}
      onPointerLeave={reset}
    >
      {children}
    </motion.div>
  );
}
