"use client";

import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Props {
  sectionId: string;
}

function AboutSection({ sectionId }: Props) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const spans = document.querySelectorAll(
      `#${sectionId} .text-animation span`
    );
    console.log(`Spans found in ${sectionId}:`, spans);

    if (spans.length > 0) {
      // Ensure spans exist before animating
      gsap.fromTo(
        spans,
        {
          opacity: 0, // Start with the text invisible
          yPercent: 10, // Start 100px below its original position
        },
        {
          opacity: 1, // Fade in
          yPercent: -10, // Move to its original position
          stagger: 0.01, // Stagger each span animation slightly
          ease: "none", // Easing for a nice elastic effect
          delay: 1,
          duration: 1, // Duration of the animation
          scrollTrigger: {
            trigger: `#${sectionId}`,
            start: "top 80%",
            end: "bottom top", // Continue the movement until the section leaves the viewport
            scrub: 1, // Tie the animation to the scroll position for smooth movement
            markers: true, // Debug markers
            onEnter: () => {
              console.log(`Entering section: ${sectionId}`);
            },
          },
        }
      );
    } else {
      console.error(`No spans found in ${sectionId} for animation.`);
    }
  }, [sectionId]);

  function renderLetters(text: string, key: string) {
    return text.split("").map((letter, index) => (
      <span key={key + index} className="inline-block ">
        {letter === " " ? "\u00A0" : letter}
      </span>
    ));
  }

  return (
    <section
      id={sectionId}
      className="min-h-screen text-white flex flex-col items-center justify-center relative section"
      data-color="#FEBAED"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 flex justify-center md:justify-center md:mb-0">
          <div className="relative w-[40rem] h-[40rem] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 600 600"
              width="100%"
              height="100%"
              className="absolute top-0 left-0"
            >
              <defs>
                <clipPath id="clippath">
                  <circle cx="300" cy="300" r="300" />{" "}
                  {/* Adjust circle to fit SVG */}
                </clipPath>
              </defs>
              <g clipPath="url(#clippath)">
                <image
                  href="/Sofia-1.png" // Ensure the path is correct relative to the public directory
                  width="600" // Set width to match viewBox for proper scaling
                  height="600" // Set height to match viewBox for proper scaling
                  preserveAspectRatio="xMidYMid slice" // Ensures image covers the viewBox area
                />
              </g>
            </svg>
          </div>
        </div>
        {/* Text Column */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-animation">
          <p
            className="m-0  text-2xl md:text-lg split"
            style={{
              lineHeight: "1",
              fontSize: "clamp(2rem, 3vw, 5rem)", // Responsive font size using clamp
            }}
          >
            {renderLetters("SOFTWARE DEVELOPER", "Title")}
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
