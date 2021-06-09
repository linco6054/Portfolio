import React, { useState, useEffect } from "react";

function Sroller() {
  const [scrollDir, setScrollDir] = useState("scrolling down");
  const [show, setShow] = useState(false);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
        setShow(true);
      }
    };
    setShow(false);

    window.addEventListener("scroll", onScroll);
    console.log(scrollDir);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  return (
    <a
      onScroll={() => {
        alert("hey");
      }}
      href="jh#"
      className={`scrollup ${show ? "sroll-up" : null}`}
    >
      <i class="uil uil-arrow-up scrollup_icon"></i>
    </a>
  );
}

export default Sroller;
