"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function HeroSection() {
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (circleRef.current) {
      gsap.fromTo(
        circleRef.current,
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 5,
          ease: "back.out(1.7)",
        }
      );
    }

    gsap.to(".name-animation", {
      opacity: 1,
      duration: 2,
      stagger: 0.2, // Animates each letter one after another
      ease: "power2.out",
    });
  }, []);

  const renderLetters = (name: string, key: string) => {
    if (!name) return null;
    return name.split("").map((letter, index) => (
      <span
        key={index}
        className={`name-animation name-animation-${key} inline-block opacity-0`}
      >
        {letter}
      </span>
    ));
  };

  return (
    <section className="min-h-screen bg-[#FFCAF2] text-black flex items-center justify-center">
      <div className="grid place-items-center w-full">
        <div className="relative w-full p-6 text-left z-10 max-w-[80%]">
          <h1 className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold mb-[-2rem] md:mb-[-4rem] lg:mb-[-5rem]">
            {renderLetters(`Hi, I'm`, "greeting")}
          </h1>
          <p className="text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] font-extrabold">
            {renderLetters(`Sofia Almroth`, "name")}
          </p>
        </div>
      </div>
      <div
        ref={circleRef}
        className="absolute w-[50rem] h-[50rem] bg-[#E3313C] rounded-full z-0"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      ></div>
    </section>
  );
}

export default HeroSection;
