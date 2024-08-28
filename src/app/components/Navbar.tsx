"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Navbar() {
  const navbarRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {}, []);

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
        <div
          ref={menuRef}
          className="hidden sm:ml-6 sm:block transition-all duration-300 ease-in-out"
        >
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

        <div className="sm:hidden transition-opacity duration-300 ease-in-out">
          <button
            type="button"
            className="hamburger-menu w-20 h-20 rounded-full bg-black flex items-center justify-center cursor-pointer text-slate-200"
          >
            <span className="sr-only">Open main menu</span>
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
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
