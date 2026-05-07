"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const cards = [
  {
    id: 1,
    title: "Pioneers",
    description:
      "We're dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it. We're on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo.",
    bgColor: "#000",
    textColor: "#fff",
    image: "/images/1.jpg",
    rotation: -2,
  },
  {
    id: 2,
    title: "Award Winning",
    description:
      "A roll top bath full of 79 awards. Voted The Drum's best agency outside of London. We are official judges for industry awards including Global Search Awards and Global Content Marketing Awards.",
    bgColor: "#c1f1e0",
    textColor: "#000",
    image: "/images/2.jpg",
    rotation: 3,
  },
  {
    id: 3,
    title: "Speed",
    description:
      "People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? Google is moving fast, but humans are moving faster. We chase consumers, not algorithms. We've created a service which takes ideas to result within 60 minutes.",
    bgColor: "#fff",
    textColor: "#000",
    image: "/images/3.jpg",
    rotation: -1,
  },
];

export default function Legacy() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      style={{
        backgroundColor: "#f2f2f2",
        height: "400vh",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "min(600px, 90vw)",
            height: "clamp(550px, 80vh, 700px)",
          }}
        >
          {cards.map((card, index) => {
            const start = index / cards.length;
            const end = (index + 1) / cards.length;

            return (
              <Card
                key={card.id}
                card={card}
                index={index}
                scrollYProgress={scrollYProgress}
                start={start}
                end={end}
                total={cards.length}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Card({
  card,
  index,
  scrollYProgress,
  start,
  end,
  total,
}: {
  card: any;
  index: number;
  scrollYProgress: any;
  start: number;
  end: number;
  total: number;
}) {
  // Movement logic:
  // Cards are stacked initially.
  // As we scroll, the top-most card (lowest index) rises UP to reveal the one underneath.

  const y = useTransform(scrollYProgress, [start, end], [0, -1000]);
  const opacity = useTransform(
    scrollYProgress,
    [start, end - 0.1, end],
    [1, 1, 0],
  );
  const rotate = useTransform(
    scrollYProgress,
    [start, end],
    [card.rotation, card.rotation * 5],
  );
  const scale = useTransform(scrollYProgress, [start, end], [1, 0.9]);

  // Initial offsets to make them visible behind the first card
  const initialRotate = card.rotation;
  const initialX = index * 4; // Reduced offset for mobile
  const initialY = index * 4;

  return (
    <motion.div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: card.bgColor,
        color: card.textColor,
        borderRadius: "40px", // Slightly smaller radius
        padding: "clamp(40px, 8vw, 60px) clamp(20px, 5vw, 40px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        boxShadow: "0 40px 100px rgba(0,0,0,0.15)",
        zIndex: total - index,
        rotate: initialRotate,
        // Only cards whose turn it is or past turn should move/reveal
        y: index < total - 1 ? y : 0,
        scale: index < total - 1 ? scale : 1,
        opacity: index < total - 1 ? opacity : 1,
        x: initialX,
        marginTop: initialY,
      }}
    >
      <div
        style={{
          width: "clamp(80px, 15vw, 140px)",
          height: "clamp(80px, 15vw, 140px)",
          borderRadius: "20px",
          overflow: "hidden",
          position: "relative",
          marginBottom: "30px",
        }}
      >
        <Image
          src={card.image}
          alt={card.title}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <h3
        style={{
          fontSize: "clamp(32px, 8vw, 80px)",
          fontWeight: "700",
          marginBottom: "16px",
          lineHeight: "0.9",
          fontFamily: "var(--font-display)",
        }}
      >
        {card.title}
      </h3>

      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.5",
          opacity: 0.8,
          maxWidth: "450px",
          margin: 0,
        }}
      >
        {card.description}
      </p>
    </motion.div>
  );
}
