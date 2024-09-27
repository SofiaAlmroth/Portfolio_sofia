"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function Navbar() {
  const navbarRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null); // Ref for the button
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return; // Prevent running on server
    gsap.registerPlugin(ScrollTrigger);

    let navbarHide: gsap.core.Tween | undefined;
    let buttonShow: gsap.core.Tween | undefined;

    if (navbarRef.current && buttonRef.current) {
      // Hide the navbar as we scroll down
      navbarHide = gsap.to(navbarRef.current, {
        opacity: 0,
        y: -50, // Move navbar up slightly
        duration: 0.5, // Make the transition smooth
        scrollTrigger: {
          trigger: document.body,
          start: "top 20%", // Start hiding the navbar at 20% scroll
          end: "top 20%", // Fully hidden at 20%
          scrub: true, // Smooth scroll animation
          markers: false, // Turn off markers
        },
      });

      // Show the button as the navbar hides
      buttonShow = gsap.fromTo(
        buttonRef.current,
        { opacity: 0, x: 50 }, // Start hidden and slightly offscreen
        {
          opacity: 1,
          x: 0, // Move into view
          duration: 0.5,
          scrollTrigger: {
            trigger: document.body,
            start: "top 20%", // Button appears just as navbar starts hiding
            end: "top 25%", // Button fully visible at 25% scroll
            scrub: true,
            markers: false, // Turn off markers
          },
        }
      );
    }

    // Cleanup function to remove GSAP animations and ScrollTriggers
    return () => {
      if (navbarHide) navbarHide.kill(); // Ensure GSAP animation is killed
      if (buttonShow) buttonShow.kill(); // Kill button animation
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Kill all ScrollTriggers
    };
  }, []);

  // Handle button click (later, it will open a right-side menu)
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    // Add logic to open/close the side menu
  };

  return (
    <>
      {/* Full Navbar */}
      <nav
        ref={navbarRef}
        className="mt-3 fixed top-0 left-0 w-full z-50 bg-transparent"
      >
        <div className="relative flex h-16 items-center justify-between px-6">
          <div className="flex items-center">
            <a href="/" className="text-7xl font-bold navbar-link">
              SA
            </a>
          </div>
          <div className="hidden sm:ml-6 sm:block transition-all duration-300 ease-in-out">
            <div className="flex items-center space-x-16">
              <a
                href="#about"
                className="font-bold text-l navbar-link text-black"
              >
                {`<About>`}
              </a>
              <a
                href="#projects"
                className="font-bold text-l navbar-link text-black"
              >
                {`<Projects>`}
              </a>
              <a
                href="#contact"
                className="font-bold text-l navbar-link text-black"
              >
                {`<Contact>`}
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Sticky Button */}
      <div
        ref={buttonRef}
        className="fixed top-5 right-10 z-50 w-20 h-20 rounded-full bg-black flex items-center justify-center cursor-pointer text-slate-200 opacity-0"
        onClick={handleMenuToggle}
      >
        <svg
          className="block h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="0.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2 8h20M2 16h20"
          />
        </svg>
      </div>
    </>
  );
}

export default Navbar;
