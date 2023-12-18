import { useEffect } from "react";

function useDisableBodyScroll() {
  useEffect(() => {
    const scrollY = window.scrollY;

    document.body.style.overflow = "hidden";
    document.body.style.marginLeft = `-15px`;

    return () => {
      document.body.style.overflow = "auto";
      window.scrollTo(0, scrollY);
    };
  }, []);
}

export default useDisableBodyScroll;
