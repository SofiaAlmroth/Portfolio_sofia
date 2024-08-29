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

    const textElement = document.querySelector(`#${sectionId} .text-animation`);
    const imageElement = document.querySelector(`#${sectionId} svg`);

    if (textElement) {
      gsap.fromTo(
        textElement,
        {
          yPercent: 500, // Start below the element
          scale: 1.2,
        },
        {
          yPercent: -500,
          ease: "back.out(1.7)",
          duration: 2, // Duration of the animation
          // scale: 1,
          scrollTrigger: {
            trigger: `#${sectionId}`,
            start: "top 90%",
            end: "bottom top",
            scrub: 2,
            markers: true,
            onEnter: () => {
              console.log(`Entering section: ${sectionId}`);
            },
          },
        }
      );
    } else {
      console.error(`No text element found in ${sectionId} for animation.`);
    }

    if (imageElement) {
      gsap.fromTo(
        imageElement,
        {
          yPercent: 50, // Start below the element
        },
        {
          yPercent: -50, // Move to its original position
          ease: "back.out(1.7)",
          duration: 2, // Duration of the animation
          scrollTrigger: {
            trigger: `#${sectionId}`,
            start: "top 90%",
            end: "bottom top", // Continue the movement until the section leaves the viewport
            scrub: 2, // Tie the animation to the scroll position for smooth movement
            markers: true, // Debug markers
            onEnter: () => {
              console.log(`Entering section: ${sectionId}`);
            },
          },
        }
      );
    } else {
      console.error(`No image element found in ${sectionId} for animation.`);
    }
  }, [sectionId]);

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
              className="image-animation absolute top-0 left-0"
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
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center ">
          <p
            className="m-0 text-animation text-2xl md:text-lg split"
            style={{
              lineHeight: "1",
              fontSize: "clamp(2rem, 3vw, 5rem)", // Responsive font size using clamp
            }}
          >
            Software Developer
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
