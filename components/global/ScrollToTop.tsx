"use client";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  const handleScrollTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 150) setShowButton(true);

      window.addEventListener("scroll", function () {
        if (this.scrollY > 150) {
          return setShowButton(true);
        }

        setShowButton(false);
      });
    }
  }, []);

  return (
    <button onClick={handleScrollTop} id="scroll-top-button" className={`bg-indigo-400 text-white py-2 px-3 font-bold fixed bottom-9 flex justify-center items-center right-9 rounded-md ${showButton ? "flex" : "hidden"}`}>
      <i className="ri-arrow-up-line"></i>
    </button>
  );
};

export default ScrollToTop;
