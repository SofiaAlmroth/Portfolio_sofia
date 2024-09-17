"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface Props {
  sectionId: string;
}

function AboutSection({ sectionId }: Props) {
  const textRef = useRef<HTMLDivElement>(null); // Ref for the text container
  const imageRef = useRef<SVGSVGElement>(null); // Ref for the SVG image

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Text Animation
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        {
          yPercent: 1000, // Initial state
          scale: 1.2,
        },
        {
          yPercent: 0,
          scale: 1, // Final state
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: `#${sectionId}`,
            start: "top center",
            end: "center center",
            scrub: 2,
            markers: false,
          },
        }
      );
    }

    // Image Animation
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        {
          yPercent: 200, // Initial state
          scale: 1.2,
        },
        {
          yPercent: 0,
          scale: 1, // Final state
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: `#${sectionId}`,
            start: "top center",
            end: "center center",
            scrub: 2,
            markers: false,
          },
        }
      );
    }

    // Cleanup function to remove GSAP animations
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [sectionId]);

  return (
    <section
      id={sectionId}
      className=" text-white flex flex-col items-center justify-center relative section"
      data-color="#FEBAED"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 flex justify-center md:justify-center md:mb-0">
          <div className="relative w-[40rem] h-[40rem] ">
            <svg
              ref={imageRef}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 600 600"
              width="100%"
              height="100%"
              className="image-animation absolute top-0 left-0"
              style={{
                transform: "scale(1.2)", // Initial style to match GSAP animation
              }}
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
            ref={textRef}
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
