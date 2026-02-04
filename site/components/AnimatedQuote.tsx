"use client";

import { RevealTextOnScroll } from "@/components/Typewriter";

interface AnimatedQuoteProps {
  text: string;
  author: string;
  authorUrl: string;
  speed?: number;
  noBackground?: boolean;
}

export function AnimatedQuote({ text, author, authorUrl, speed = 80, noBackground = false }: AnimatedQuoteProps) {
  return (
    <div className={noBackground ? "" : "rounded-lg bg-white p-8 shadow-lg md:p-12"}>
      <blockquote className="font-quote text-lg italic md:text-xl">
        <span className="text-saphir-dark">«</span>{" "}
        <RevealTextOnScroll 
          text={text}
          speed={speed}
          darkMode
        />{" "}
        <span className="text-saphir-dark">»</span>
      </blockquote>
      <p className="mt-6 text-right text-saphir-dark/70">
        <a
          href={authorUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-saphir-dark"
        >
          {author}
        </a>
      </p>
    </div>
  );
}
