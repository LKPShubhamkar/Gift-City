import { AppBar, Box, Toolbar } from "@mui/material";
import logoLight from "../../assets/logo.png";
import logoDark from "../../assets/logo-dark.png";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    console.log("scrolled", scrolled);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  //   useEffect(() => {
  //     const hero = document.querySelector(".hero");

  //     const handleScroll = () => {
  //       if (!hero) return;
  //       setScrolled(window.scrollY >= hero.clientHeight);
  //     };

  //     handleScroll(); // set initial state

  //     window.addEventListener("scroll", handleScroll);
  //     return () => window.removeEventListener("scroll", handleScroll);
  //   }, []);

  return (
    <AppBar
      elevation={0}
      sx={{
        bgcolor: "transparent",
        boxShadow: "none",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1300,
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
          src={scrolled ? logoLight : logoDark}
          alt="LKP"
          sx={{
            width: {
              xs: 70,
              md: 90,
            },
            height: "auto",
            cursor: "pointer",
            userSelect: "none",
          }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
