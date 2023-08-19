import React, { useCallback, useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import Text from "components/Text/Text";
import { createPortal } from "react-dom";
import { ReactComponent as MenuIcon } from "images/hamburguericon.svg";

const MobileNav = () => {
  const [showMenu, setShowMenu] = useState(true);
  const closeMenu = useCallback(() => {
    setShowMenu(false);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 780) {
        if (showMenu) {
          setShowMenu(false);
        }
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [showMenu]);

  return (
    <section className={styles.mobileNavContainer}>
      <button
        onClick={() => {
          setShowMenu(true);
        }}
        className={styles.cleanSlateButton}
      >
        <MenuIcon />
      </button>
      {showMenu &&
        createPortal(
          <section className={styles.mobileMenuLinksContainer}>
            <div>
              <div className={styles.closeButtonContainer}>
                <button onClick={closeMenu} />
              </div>
              <ul>
                <li>
                  <Link onClick={closeMenu} to={"/"}>
                    <Text size={20}>Home</Text>
                  </Link>
                </li>
                <li>
                  <Text size={20}>About</Text>
                </li>
                <li>
                  <Link onClick={closeMenu} to={"/book"}>
                    <Text size={20}>Reservations</Text>
                  </Link>
                </li>
                <li>
                  <Text size={20}>Order Online</Text>
                </li>
                <li>
                  <Text size={20}>Login</Text>
                </li>
              </ul>
            </div>
          </section>,
          document.body,
        )}
    </section>
  );
};

export default MobileNav;
