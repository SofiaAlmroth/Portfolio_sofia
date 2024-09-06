"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function Contact() {
  const sectionRef = useRef(null); // Ref for the section
  const contentRef = useRef(null); // Ref for the content

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Background color transition as you scroll into the section
    gsap.fromTo(
      sectionRef.current,
      {
        backgroundColor: "#EFE8E0", // Starting background color
      },
      {
        backgroundColor: "#000000", // Final background color
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // When the section starts entering the viewport
          end: "top 30%", // When the section is fully visible
          scrub: true, // Smooth transition tied to the scroll
        },
      }
    );

    // Content (Text) Fade and Slide In Animation
    gsap.fromTo(
      contentRef.current,
      {
        opacity: 0, // Start hidden
        y: 50, // Start slightly lower than the final position
      },
      {
        opacity: 1, // Fade in
        y: 0, // Slide to final position
        duration: 1.5, // Animation duration
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // When the section starts entering the viewport
          end: "top 50%", // When the section is fully in view
          scrub: true, // Tie the animation to the scroll
        },
      }
    );
  }, []);
  return (
    <section
      ref={sectionRef}
      className="h-[100vh] text-white flex justify-center items-center relative"
    >
      {/* Contact content */}
      <div ref={contentRef} className="text-center">
        <h1 className="text-5xl font-bold">Contact me</h1>
        <p className="mt-4 text-lg">
          Let's work together and create something amazing.
        </p>
      </div>
    </section>
  );
}

export default Contact;
