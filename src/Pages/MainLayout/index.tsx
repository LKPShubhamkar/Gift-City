import { Box } from "@mui/material";
import Header from "../../components/Header/header";
import Hero from "../Hero/hero";
import LeadForm from "../../components/Form";
import GiftInfo from "../Content";
import Footer from "../../components/Footer/footer";

const MainLayout = () => {
  return (
    <>
      <Header />

      <Box sx={{ position: "relative" }}>
        <Hero />

        {/* Content */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            px: {
              xs: 2,
              sm: 3,
              md: 6,
              lg: 8,
              xl: 12,
            },
            mt: "-1520px",
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* Left */}
          <Box
            sx={{
              flex: 1,
              maxWidth: 720,
              pt: "1560px",
            }}
          >
            <GiftInfo />
          </Box>

          {/* Right */}
          <Box
            sx={{
              width: 460,
              flexShrink: 0,
              position: "sticky",
              top: 110,
              alignSelf: "flex-start",
              paddingBottom: 10,
            }}
          >
            <LeadForm />
          </Box>
        </Box>

        <Footer />
      </Box>
    </>
  );
};

export default MainLayout;
