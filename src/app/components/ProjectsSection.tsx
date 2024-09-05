"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Fira_Sans_Extra_Condensed } from "next/font/google";

function ProjectsSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
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
    };
  }, []);

  return (
    <section className="overflow-hidden">
      <div ref={triggerRef}>
        <div className="mt-48">
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
