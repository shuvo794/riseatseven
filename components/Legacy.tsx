"use client";
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const cards = [
  {
    label: "Pioneers",
    title: "Early Bird Catches the Worm",
    description:
      "We were founded on the insight that being first matters. As the search landscape evolves faster than ever, we help brands be there before the competition even realises the opportunity.",
    bg: "#a8f0d8",
    text: "#000",
  },
  {
    label: "Award Winning",
    title: "120+ Trophies. Every one earned.",
    description:
      "From Global Search Awards to The Drum, our work consistently gets recognised at the highest levels. But more importantly, it gets results.",
    bg: "#000",
    text: "#fff",
  },
  {
    label: "Speed",
    title: "60-Minute Reactive Content",
    description:
      "When the world moves, we move faster. Our reactive content engine means we can ideate, create, and publish in under 60 minutes — capitalising on cultural moments before they pass.",
    bg: "#fff",
    text: "#000",
  },
];

function TiltCard({ card }: { card: typeof cards[0] }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [8, -8]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-8, 8]), { stiffness: 200, damping: 30 });

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  return (
    <motion.div
      style={{ rotateX, rotateY, transformPerspective: 1000, backgroundColor: card.bg, color: card.text }}
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className="rounded-3xl p-10 md:p-14 cursor-default"
    >
      <span className="text-xs font-bold uppercase tracking-[0.25em] opacity-50 mb-6 block">
        {card.label}
      </span>
      <h3
        className="text-3xl md:text-4xl font-black leading-tight tracking-[-0.03em] mb-5"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {card.title}
      </h3>
      <p className="text-sm md:text-base font-medium opacity-60 leading-relaxed max-w-md">
        {card.description}
      </p>
    </motion.div>
  );
}

export default function Legacy() {
  return (
    <section className="bg-black py-24 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#a8f0d8] text-sm font-bold uppercase tracking-[0.3em] mb-4"
        >
          A Legacy In The Making
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black text-white tracking-[-0.04em] leading-none mb-16"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Why Rise at Seven?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <TiltCard card={card} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
