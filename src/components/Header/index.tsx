import { useState, useEffect } from "react";

import { HeaderDesktop } from "./HeaderDesktop";

import { HeaderMobile } from "./HeaderMobile";

import { isMobile } from "react-device-detect";

import styles from "./Header.module.css";

export function Header() {
  const [minicartIsVisible, setMinicartIsVisible] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  function handleOpenOrCloseMinicart() {
    setMinicartIsVisible(!minicartIsVisible);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles.containerHeader} ${isSticky ? styles.sticky : ""}`}
    >
      {isMobile ? (
        <HeaderMobile
          handleOpenOrCloseMinicart={handleOpenOrCloseMinicart}
          minicartIsVisible={minicartIsVisible}
        />
      ) : (
        <HeaderDesktop
          minicartIsVisible={minicartIsVisible}
          handleOpenOrCloseMinicart={handleOpenOrCloseMinicart}
        />
      )}
    </div>
  );
}
