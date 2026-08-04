import { Box, Container, Typography } from "@mui/material";
import background from "../../assets/Hero/hero-background.png";
// import logo from "../../assets/logo.png";
import swoosh from "../../assets/Hero/swoosh.png";
import "./style.css";
import { useEffect } from "react";
import amazon from "../../assets/Hero/Amazon.png";
import apple from "../../assets/Hero/Apple.png";
import nvidia from "../../assets/Hero/Nvidia.png";
import meta from "../../assets/Hero/Meta.png";
import netflix from "../../assets/Hero/Netflix.png";
import microsoft from "../../assets/Hero/Microsoft.png";
import toyota from "../../assets/Hero/Toyota.png";
import adobe from "../../assets/Hero/Adobe.png";
import tesla from "../../assets/Hero/Tesla.png";
import LeadForm from "../../components/Form";

const Hero = () => {
  useEffect(() => {
    const logos = document.querySelectorAll(".brand-logo");

    const handleMove = (e: MouseEvent) => {
      logos.forEach((logo) => {
        const rect = (logo as HTMLElement).getBoundingClientRect();

        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        const distance = Math.sqrt(
          Math.pow(e.clientX - x, 2) + Math.pow(e.clientY - y, 2),
        );

        const opacity = Math.max(0, 1 - distance / 140);

        (logo as HTMLElement).style.opacity = opacity.toString();
        (logo as HTMLElement).style.transform = `scale(${0.8 + opacity * 0.2})`;
      });
    };

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <Box
      className="hero"
      sx={{
        backgroundImage: `url(${background})`,
      }}
    >
      <Container maxWidth="xl" className="hero-container">
        <Box className="hero-content">
          <Box className="hero-heading">
            <Typography className="hero-title">
              Invest Beyond Borders
            </Typography>

            <Typography className="hero-title">with GIFT City</Typography>
          </Box>

          <Box
            className="hero-swoosh"
            sx={{
              WebkitMask: `url(${swoosh}) center/contain no-repeat`,
              mask: `url(${swoosh}) center/contain no-repeat`,
            }}
          />
        </Box>

        <Box className="hero-form">
          <LeadForm />
        </Box>
        <img src={amazon} className="brand-logo amazon" />
        <img src={tesla} className="brand-logo tesla" />
        <img src={apple} className="brand-logo apple" />
        <img src={nvidia} className="brand-logo nvidia" />
        <img src={meta} className="brand-logo meta" />
        <img src={netflix} className="brand-logo netflix" />
        <img src={microsoft} className="brand-logo microsoft" />
        <img src={toyota} className="brand-logo toyota" />
        <img src={adobe} className="brand-logo adobe" />
      </Container>
    </Box>
  );
};

export default Hero;
