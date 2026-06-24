"use client";

import { useEffect } from "react";

export default function MenuObserver() {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const links = document.querySelectorAll(".main-nav-link");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const id = entry.target.getAttribute("id");

          links.forEach((link) => {
            link.classList.remove("active");

            if (link.getAttribute("href") === `#${id}`) {
              link.classList.add("active");
            }
          });
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}