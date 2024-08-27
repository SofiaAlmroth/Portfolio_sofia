"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Navbar() {
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 50) {
        gsap.to(navbarRef.current, {
          backgroundColor: "transparent",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(".navbar-link", {
          color: "#000000",
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(navbarRef.current, {
          backgroundColor: "transparent",
          boxShadow: "none",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(".navbar-link", {
          color: "#ffffff",
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="mt-3 fixed top-0 left-0 w-full z-20 bg-transparent"
    >
      <div className="relative flex h-16 items-center justify-between px-6">
        <div className="flex items-center">
          {/* Logo or brand name */}
          <a href="/" className="text-7xl font-bold navbar-link">
            SA
          </a>
        </div>
        <div className="flex items-center space-x-16">
          <a href="#about" className="font-bold text-xl navbar-link text-black">
            {`<About>`}
          </a>
          <a
            href="#projects"
            className="font-bold text-xl navbar-link text-black"
          >
            {`<Projects>`}
          </a>
          <a
            href="#contact"
            className="font-bold text-xl navbar-link text-black"
          >
            {`<Contact>`}
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
