"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function HeroSection() {
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let circleAnimation: GSAPTween | null = null;
    let textAnimation: GSAPTween | null = null;
    let scrollAnimation: GSAPTimeline | null = null;

    if (circleRef.current) {
      circleAnimation = gsap.fromTo(
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

    textAnimation = gsap.to(".name-animation span", {
      opacity: 1,
      duration: 2,
      stagger: 0.2, // Animates each letter one after another
      ease: "power2.out",
    });

    // Scroll-triggered animation to expand the circle

    scrollAnimation = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".hero", // The section to pin and trigger the animation
          start: "center center",
          scrub: 1.5,
          pin: true,
          end: "+=" + window.innerHeight * 2.5,
          markers: true,
        },
      })
      .to(circleRef.current, {
        scale: 10, // Expands the circle to cover the screen
        duration: 15,
        ease: "power2.out",
      });

    // Cleanup function
    return () => {
      // Kill animations to clean up GSAP instances
      if (circleAnimation) circleAnimation.kill();
      if (textAnimation) textAnimation.kill();
      if (scrollAnimation) scrollAnimation.kill();

      // Cleanup ScrollTrigger
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
    <section className="min-h-screen text-black flex items-center justify-center">
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
      <div
        ref={circleRef}
        className="absolute w-[40rem] h-[40rem] bg-[#E3313C] rounded-full z-0"
      ></div>
    </section>
  );
}

export default HeroSection;
