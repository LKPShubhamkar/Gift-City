import { AppBar, Box, Toolbar } from "@mui/material";
import logoLight from "../../assets/logo.png";
import logoDark from "../../assets/dark-logo.png";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const hero = document.querySelector(".hero");

    const handleScroll = () => {
      if (!hero) return;

      const heroBottom = hero.getBoundingClientRect().bottom + window.scrollY;

      setScrolled(window.scrollY >= heroBottom - 90); // 90 = header height
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      elevation={0}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1300,

        bgcolor: scrolled ? "#fff" : "#023462",
        boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.08)" : "none",

        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <Toolbar
        sx={{
          minHeight: "90px !important",
          px: {
            xs: 3,
            md: 6,
            lg: 8,
          },
          justifyContent: "flex-start",
        }}
      >
        <Box
          component="img"
          src={scrolled ? logoDark : logoLight}
          alt="LKP"
          sx={{
            width: {
              xs: 70,
              md: 90,
            },
            height: "auto",
            cursor: "pointer",
            userSelect: "none",
            transition: "0.3s ease",
          }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
