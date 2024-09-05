"use client";

import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface Props {
  sectionId: string;
}

function AboutSection({ sectionId }: Props) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const textContainerElement = document.querySelector(
      `#${sectionId} .text-animation`
    );
    const imageElement = document.querySelector(`#${sectionId} svg`);

    if (textContainerElement) {
      gsap.fromTo(
        textContainerElement,
        {
          yPercent: 1000, // Start below the element
          scale: 1.2,
        },
        {
          yPercent: 0,
          scale: 1, // Return to the original scale
          ease: "back.out(1.7)",
          // scale: 1,
          scrollTrigger: {
            trigger: `#${sectionId}`,
            start: "top center",
            end: "center center",
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
          yPercent: 200, // Start below the element
          scale: 1.2,
        },
        {
          yPercent: 0, // Move to its original position
          scale: 1, // Return to the original scale
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: `#${sectionId}`,
            start: "top center",
            end: "center center", // Continue the movement until the section leaves the viewport
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
      id="about-section-1"
      className=" text-white flex flex-col items-center justify-center relative section"
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
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-container ">
          <p
            className="text-animation m-0 text-2xl md:text-lg "
            style={{
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
