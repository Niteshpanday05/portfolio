"use client";

import { Typewriter } from "react-simple-typewriter";

export default function TypingEffect() {
  return (
    <h2 className="text-lg md:text-2xl font-semibold items-center justify-center flex text-white mt-4">
      
      <span className="text-gray-200">
        <Typewriter
          words={[
            "Modern web apps",
            "Scalable solutions",
            "Beautiful interfaces",
          ]}
          loop
          cursor
          cursorStyle=""
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>
    </h2>
  );
}
