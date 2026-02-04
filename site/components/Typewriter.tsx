"use client";

import { useState, useEffect, useRef } from "react";

interface RevealTextProps {
  text: string;
  speed?: number; // Délai entre chaque mot en ms
  className?: string;
}

// Animation qui démarre immédiatement (pour le hero)
export function RevealText({ text, speed = 150, className = "" }: RevealTextProps) {
  const [revealedCount, setRevealedCount] = useState(0);
  const words = text.split(" ");

  useEffect(() => {
    if (revealedCount < words.length) {
      const timeout = setTimeout(() => {
        setRevealedCount((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [revealedCount, words.length, speed]);

  return (
    <span className={className}>
      {words.map((word, index) => (
        <span
          key={index}
          className={`transition-all duration-300 ${
            index < revealedCount ? "text-white" : "text-white/30"
          }`}
        >
          {word}{index < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}

interface RevealTextOnScrollProps extends RevealTextProps {
  darkMode?: boolean; // true = texte noir sur fond clair
}

// Animation qui démarre au scroll (quand visible)
export function RevealTextOnScroll({ text, speed = 100, className = "", darkMode = false }: RevealTextOnScrollProps) {
  const [revealedCount, setRevealedCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const words = text.split(" ");

  // Détecter quand l'élément est visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Animer mot par mot une fois visible
  useEffect(() => {
    if (isVisible && revealedCount < words.length) {
      const timeout = setTimeout(() => {
        setRevealedCount((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [isVisible, revealedCount, words.length, speed]);

  const revealedClass = darkMode ? "text-saphir-dark" : "text-white";
  const hiddenClass = darkMode ? "text-saphir-dark/30" : "text-white/30";

  return (
    <span ref={ref} className={className}>
      {words.map((word, index) => (
        <span
          key={index}
          className={`transition-all duration-300 ${
            index < revealedCount ? revealedClass : hiddenClass
          }`}
        >
          {word}{index < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}
