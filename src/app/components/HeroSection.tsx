"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function HeroSection() {
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Initial circle animation: Expand to 40rem on page load
    if (circleRef.current) {
      gsap.fromTo(
        circleRef.current,
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1, // Initial size (40rem)
          duration: 5, // Smooth and longer initial expansion
          ease: "back.out(1.7)",
        }
      );
    }

    // Text animation
    gsap.to(".name-animation span", {
      opacity: 1,
      duration: 2,
      stagger: 0.2,
      ease: "power2.out",
    });

    // Scroll-triggered animation: Expand circle as you scroll down
    ScrollTrigger.create({
      trigger: ".hero",
      start: "top top", // Start as soon as scrolling starts
      end: "+=" + window.innerHeight * 1, // Circle fully expands when the next section hits the top of the viewport
      scrub: 0.5, // Slow and smooth expansion in sync with scroll
      onUpdate: (self) => {
        const scale = 1 + 9 * self.progress; // Calculates scale based on scroll progress
        gsap.to(circleRef.current, {
          scale: scale,
          duration: 2,
          overwrite: "auto",
          ease: "expo.out", // No easing for a linear scale transition
        });
      },
      // onScrubComplete: (self) => {
      //   const scale = 1 + 9 * self.progress;
      //   gsap.to(circleRef.current, {
      //     scale: scale, // Apply the final scale when scrolling stops
      //     duration: 2, // Bounce effect duration
      //     ease: "elastic.out(1, 0.3)", // Elastic bounce effect
      //   });
      // },
      onLeaveBack: (self) => {
        gsap.to(circleRef.current, {
          scale: 1, // Shrink back to 40rem size
          duration: 2, // Smooth shrinking animation

          ease: "expo.out",
        });
      },
    });
    // Cleanup function to remove GSAP instances and ScrollTriggers
    return () => {
      gsap.killTweensOf(circleRef.current);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  function renderLetters(text: string, key: string) {
    return text.split("").map((letter, index) => (
      <span key={key + index} className="inline-block opacity-0">
        {letter === " " ? "\u00A0" : letter}
      </span>
    ));
  }

  return (
    <section className="min-h-screen text-black flex items-center justify-center hero">
      <div className="grid place-items-center w-full">
        <div className="relative w-full p-6 text-left z-10 max-w-[80%]">
          <h1
            className="font-bold leading-tight name-animation"
            style={{
              fontSize: "clamp(4rem, 10vw, 10rem)", // Adjusted clamp range for better visibility
              lineHeight: "1.1", // Consistent line height
              whiteSpace: "nowrap", // Prevent text from breaking within words
            }}
          >
            {renderLetters(`Hi, I'm`, "greeting")}
          </h1>
          <p
            className="font-bold leading-tight flex flex-col sm:flex-row name-animation"
            style={{
              fontSize: "clamp(4rem, 10vw, 10rem)", // Adjusted clamp range
              lineHeight: "1.1", // Consistent line height
              whiteSpace: "nowrap", // Ensure full name stays visible
            }}
          >
            <span>{renderLetters("Sofia", "firstName")}</span>
            <span className="sm:ml-2">
              {renderLetters("Almroth", "lastName")}
            </span>
          </p>
        </div>
      </div>

      {/* Directly render the circle as a div */}
      <div
        ref={circleRef}
        className="absolute bg-gradient-radial from-[#3939FF] to-[#5B5BFF] rounded-full z-0"
        style={{
          width: "40rem",
          height: "40rem",
          transformOrigin: "center center",
        }}
      ></div>
      {/* <ForwardedCircle
        ref={circleRef}
        color="#E3313C"
        size="40rem" // Adjust size as needed
      /> */}
    </section>
  );
}

export default HeroSection;
