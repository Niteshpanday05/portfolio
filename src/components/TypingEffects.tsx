"use client";

import { Typewriter } from "react-simple-typewriter";

export default function TypingEffect() {
  return (
    <h2 className="">
      <span className="">
        <Typewriter
          words={[
            "I specialize in turning designs and ideas into fully functional modern web applications. Ready to bring your next project to life?",
          ]}
          loop
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={40}
          delaySpeed={1400}
        />
      </span>
    </h2>
  );
}
