"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function ProjectsSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const headingRef = useRef(null); // Ref for the <h1> element

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    //h1 animation
    const header = gsap.fromTo(
      headingRef.current,
      {
        y: 20,
        opacity: 0,
        scale: 1.2,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scale: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: triggerRef.current, // Trigger based on the horizontal scroll section
          start: "top top", // Start animation when horizontal scroll starts
          end: "bottom top", // End animation just before leaving the section
          scrub: true,
          onLeave: () =>
            gsap.to(headingRef.current, {
              opacity: 0,
              y: -20,
              duration: 0.5,
              ease: "power1.inOut",
            }), // Fade out when scrolling past the section
          onEnterBack: () =>
            gsap.to(headingRef.current, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power1.out",
            }), // Fade in when scrolling back into the section
        },
      }
    );

    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        direction: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top, top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
      header.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden">
      <div ref={triggerRef}>
        <div ref={headingRef} className="mt-48">
          <h1 className="text-center text-7xl font-extrabold text-black">
            Projects
          </h1>
        </div>
        <div
          ref={sectionRef}
          className="h-[100vh]  w-[400vh] min-h-screen text-white flex flex-row items-center justify-center relative section"
        >
          <div className="h-full w-[100vw] flex justify-center items-center text-black text-2xl">
            <h3>Section 1</h3>
          </div>

          <div className="h-full w-[100vw] flex justify-center items-center text-black text-2xl">
            <h3>Section 2</h3>
          </div>
          <div className="h-full w-[100vw] flex justify-center items-center text-black text-2xl">
            <h3>Section 3</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
