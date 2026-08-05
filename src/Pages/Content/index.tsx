import { Box, Container, Typography } from "@mui/material";
import { intro, whyGiftItems, ifsca } from "./data";

const GiftInfo = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 10,
      }}
    >
      {/* Intro */}
      <Box
        sx={{
          maxWidth: 620,
          mb: 12,
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: 34,
              md: 52,
            },
            fontWeight: 700,
            lineHeight: 1.15,
            mb: 3,
          }}
        >
          {intro.title}
        </Typography>

        <Typography
          sx={{
            fontSize: 16,
            lineHeight: 1.8,
            color: "#333",
          }}
        >
          {intro.description}
        </Typography>
      </Box>

      {/* Why Choose */}
      <Box
        sx={{
          maxWidth: 620,
          mb: 12,
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: 34,
              md: 48,
            },
            fontWeight: 700,
            mb: 5,
          }}
        >
          Why Choose GIFT City?
        </Typography>

        {whyGiftItems.map((item, index) => (
          <Box
            key={item.title}
            sx={{
              display: "flex",
              gap: 3,
              py: 3,
              borderBottom:
                index !== whyGiftItems.length - 1
                  ? "1px solid #ECECEC"
                  : "none",
            }}
          >
            <Box
              sx={{
                width: 8,
                borderRadius: 10,
                background: "linear-gradient(180deg,#0054A6 0%,#59B2FF 100%)",
                flexShrink: 0,
              }}
            />

            <Box>
              <Typography
                sx={{
                  fontSize: 22,
                  fontWeight: 600,
                  mb: 1,
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: 16,
                  color: "#555",
                  lineHeight: 1.8,
                }}
              >
                {item.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* About IFSCA */}
      <Box
        sx={{
          maxWidth: 620,
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: 34,
              md: 48,
            },
            fontWeight: 700,
            mb: 3,
          }}
        >
          {ifsca.title}
        </Typography>

        <Typography
          sx={{
            fontSize: 16,
            lineHeight: 1.8,
            color: "#333",
          }}
        >
          {ifsca.description}
        </Typography>
      </Box>
    </Container>
  );
};

export default GiftInfo;
