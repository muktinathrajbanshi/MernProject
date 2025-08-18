import React, { useEffect } from "react";
import { createPortal } from "react-dom";

export const ScrollToTop = () => {
  // Function to handle scroll-to-top
  const scrollTop = () => {
    const header = document.querySelector(".header");
    if (header) {
      header.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" }); // fallback
    }
  };

  // Optional: Show button only after scrolling
  useEffect(() => {
    const handleScroll = () => {
      const btn = document.querySelector(".scrollTop-style");
      if (btn) {
        if (window.scrollY > 200) {
          btn.style.display = "block";
        } else {
          btn.style.display = "none";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return createPortal(
    <div className="scrollTop-style" onClick={scrollTop}>
      <ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>
    </div>,
    document.body // renders it at the root of the body
  );
};

