import { useState, useEffect } from "react";

function useScrollPosition(threshold: number): boolean {
  const [isFixed, setIsFixed] = useState(false);

  function handleScroll() {
    if (window.scrollY >= threshold) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return isFixed;
}

export default useScrollPosition;
