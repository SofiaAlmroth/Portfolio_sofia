"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function Contact() {
  const sectionRef = useRef(null);
  const circleRef = useRef(null); // Reference to the circle

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const curve = gsap.to(circleRef.current, {
      scaleX: 100, // Stretch the circle horizontally to flatten it out
      scaleY: 20, // Shrink the circle vertically
      y: 100, // Move the circle downward to give the effect of flattening
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 90%", // Start the animation before the section fully enters the viewport
        end: "+=60vh", // End when the section is fully scrolled past
        scrub: true, // Smoothly follow the scroll
        markers: true, // For debugging
        pin: true,
        pinSpacing: false,
      },
    });

    return () => {
      curve.kill();
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="h-[60vh] text-white flex justify-center items-center relative "
      >
        {/* Circle Div with Tailwind classes */}
        <div
          ref={circleRef}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-black rounded-full"
          style={{
            width: "100px",
            height: "100px",
          }}
        ></div>

        <h1 className="mt-7 text-white text-2xl">Contact me</h1>
      </section>
    </>
  );
}

export default Contact;
