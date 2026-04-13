import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function AutoScrollButton() {
  const { pathname } = useLocation();

  useEffect(() => {
    // scroll smoothly to top whenever route changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

export default AutoScrollButton;