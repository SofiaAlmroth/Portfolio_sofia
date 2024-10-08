"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface Props {
  sectionId: string;
}

function AboutSectionTwo({ sectionId }: Props) {
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const charRefs = useRef<HTMLSpanElement[]>([]); // A ref array for each character

  // Helper to add refs to the array
  const addToRefs = (el: HTMLSpanElement | null) => {
    if (el && !charRefs.current.includes(el)) {
      charRefs.current.push(el);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (charRefs.current.length > 0) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: `#${sectionId}`, // Pin the entire section
          start: "top center", // Adjust to start when the section is slightly above the center
          end: "bottom center", // Adjust to end when the bottom of the section reaches slightly below the center
          pin: true, // Pin the section while the animation is playing
          scrub: 0.75, // Smooth out the animation in sync with the scroll
          markers: false, // Show markers for debugging
          pinSpacing: true, // Keep space after the pinned section for a smooth transition
        },
      });

      // Animate each letter (use charRefs.current)
      tl.fromTo(
        charRefs.current,
        { opacity: 0.2, y: 10, color: "#FEBAED" }, // Start with slightly lower opacity and offset
        { opacity: 1, y: 0, color: "#ffffff", stagger: 0.05 } // Animate to visible, with staggered effect
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [sectionId]);

  function renderLetters(text: string, key: string) {
    return text.split("").map((letter, index) => (
      <span
        key={key + index}
        ref={addToRefs} // Use the helper to add to refs
        className="inline-block opacity-0"
      >
        {letter === " " ? "\u00A0" : letter}
      </span>
    ));
  }

  return (
    <section
      id={sectionId}
      className="text-white flex flex-col items-center relative section"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center relative z-20">
        <div className="max-w-5xl w-full px-6 mt-10">
          <p ref={textRef} className="text-2xl leading-relaxed">
            {renderLetters(
              "I recently transitioned from digital marketing to software development. I love the creative aspect of coding—bringing ideas to life and turning them into functional, beautiful, and user-friendly applications. My journey has been exciting, and I’m eager to continue pushing the boundaries of what I can create.",
              "aboutme"
            )}
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSectionTwo;
