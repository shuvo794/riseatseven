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

function Card({
  card,
  index,
  scrollYProgress,
  start,
  end,
  total,
  isMobile,
}: {
  card: any;
  index: number;
  scrollYProgress: any;
  start: number;
  end: number;
  total: number;
  isMobile: boolean;
}) {
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

  const initialRotate = card.rotation;
  const initialX = index * (isMobile ? 2 : 4);
  const initialY = index * (isMobile ? 2 : 4);

  return (
    <motion.div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: card.bgColor,
        color: card.textColor,
        borderRadius: isMobile ? "24px" : "40px",
        padding: isMobile ? "40px 24px" : "60px 40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        boxShadow: "0 40px 100px rgba(0,0,0,0.15)",
        zIndex: total - index,
        rotate: initialRotate,
        y: index < total - 1 ? y : 0,
        scale: index < total - 1 ? scale : 1,
        opacity: index < total - 1 ? opacity : 1,
        x: initialX,
        marginTop: initialY,
      }}
    >
      <div
        style={{
          width: isMobile ? "80px" : "140px",
          height: isMobile ? "80px" : "140px",
          borderRadius: "20px",
          overflow: "hidden",
          position: "relative",
          marginBottom: isMobile ? "20px" : "30px",
        }}
      >
        <Image
          src={card.image}
          alt={card.title}
          fill
          unoptimized
          style={{ objectFit: "cover" }}
        />
      </div>

      <h3
        style={{
          fontSize: isMobile ? "32px" : "clamp(32px, 8vw, 80px)",
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
          fontSize: isMobile ? "14px" : "16px",
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

export default function Legacy() {
  const containerRef = useRef(null);
  const [mounted, setMounted] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      style={{
        backgroundColor: "#f2f2f2",
        height: isMobile ? "300vh" : "400vh",
        position: "relative",
        minHeight: mounted ? "auto" : "100vh",
      }}
    >
      {mounted && (
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
              width: isMobile ? "90vw" : "600px",
              height: isMobile ? "70vh" : "clamp(550px, 80vh, 700px)",
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
                  isMobile={isMobile}
                />
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
