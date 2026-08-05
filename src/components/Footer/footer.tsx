import { Box, Container, Divider, Stack, Typography } from "@mui/material";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";

import background from "../../assets/Footer-background.png";
import logo from "../../assets/logo.png";

const Footer = () => {
  const registrationDetails = [
    {
      label: "IFSCA registration number:",
      value: "IFSC/BD/2023-24/0019",
    },
    {
      label: "NSEIX:",
      value: "10076",
    },
    {
      label: "CIN:",
      value: "U67190GJ2022PTC131772",
    },
    {
      label: "GUJARAT GSTIN No:",
      value: "24AAFCL0189B1ZW",
    },
  ];

  const firstLinks = [
    {
      label: "Privacy Policy",
      href: "https://lkpifsc.com/privacypolicy",
    },
    {
      label: "Disclaimer",
      href: "https://lkpifsc.com/disclaimer",
    },
    {
      label: "Advisory for Investors",
      href: "https://lkpifsc.com/advisoryinfo",
    },
    {
      label: "Investor Information",
      href: "https://lkpifsc.com/investorinfo",
    },
    {
      label: "NSEIX",
      href: "https://www.nseix.com/",
    },
    {
      label: "IFSCA",
      href: "https://www.ifsca.gov.in/",
    },
    {
      label: "GIFT City",
      href: "https://www.giftgujarat.in/",
    },
    {
      label: "GIFT SEZ",
      href: "https://giftsez.com/#welcome",
    },
  ];

  return (
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderTopLeftRadius: "48px",
        borderTopRightRadius: "48px",
        overflow: "hidden",
        py: {
          xs: 6,
          md: 10,
        },
        color: "#fff",
      }}
    >
      <Container maxWidth="xl">
        <Stack
          sx={{
            flexDirection: {
              xs: "column",
              lg: "row",
            },
            gap: {
              xs: 6,
              lg: 8,
            },
          }}
        >
          {/* Left Card */}
          <Box
            sx={{
              width: {
                xs: "100%",
                lg: 640,
              },
              border: "2px solid rgba(70,150,255,.35)",
              borderRadius: "28px",
              background: "rgba(255,255,255,.03)",
              backdropFilter: "blur(4px)",
              p: {
                xs: 3,
                md: 5,
              },
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="LKP"
              sx={{
                width: 150,
                mb: 5,
              }}
            />

            {/* Office */}
            <Stack
              sx={{
                flexDirection: "row",
                gap: 2,
                alignItems: "center",
                mb: 2,
              }}
            >
              <LocationOnOutlinedIcon />

              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: 18,
                }}
              >
                Registered Office
              </Typography>
            </Stack>

            <Typography
              sx={{
                fontSize: 16,
                lineHeight: 1.6,
                color: "rgba(255,255,255,.9)",
              }}
            >
              Unit No. 1107 A, Signature Building, 11th Floor, Block 13B,
              <br />
              Zone 1, GIFT SEZ, Gandhinagar, Gujarat, India, 382355.
            </Typography>

            <Divider
              sx={{
                my: 4,
                borderColor: "rgba(255,255,255,.35)",
                borderStyle: "dashed",
              }}
            />

            {/* Support */}
            <Stack
              sx={{
                flexDirection: "row",
                gap: 2,
                alignItems: "center",
                mb: 2,
              }}
            >
              <LocalPhoneOutlinedIcon />

              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: 18,
                }}
              >
                For Call & Trade / Support Desk Call
              </Typography>
            </Stack>

            <Typography
              sx={{
                fontSize: 16,
              }}
            >
              079-69663538 / 39
            </Typography>

            <Divider
              sx={{
                my: 4,
                borderColor: "rgba(255,255,255,.35)",
                borderStyle: "dashed",
              }}
            />

            <Stack
              sx={{
                flexDirection: {
                  xs: "column",
                  sm: "row",
                },
                gap: 5,
              }}
            >
              <Box>
                <Stack
                  sx={{
                    flexDirection: "row",
                    gap: 1.5,
                    alignItems: "center",
                    mb: 1,
                  }}
                >
                  <PhoneOutlinedIcon />

                  <Typography
                    sx={{
                      fontWeight: 700,
                    }}
                  >
                    Telephone
                  </Typography>
                </Stack>

                <Typography>079-69663535</Typography>
              </Box>

              <Box>
                <Stack
                  sx={{
                    flexDirection: "row",
                    gap: 1.5,
                    alignItems: "center",
                    mb: 1,
                  }}
                >
                  <MailOutlineOutlinedIcon />

                  <Typography
                    sx={{
                      fontWeight: 700,
                    }}
                  >
                    Mail Id
                  </Typography>
                </Stack>

                <Typography>gnc@lkpifsc.com</Typography>
              </Box>
            </Stack>
          </Box>

          {/* Right Side */}
          <Box
            sx={{
              flex: 1,
              pt: {
                lg: 3,
              },
            }}
          >
            <Stack
              sx={{
                gap: 3,
                mb: 8,
              }}
            >
              {registrationDetails.map((item) => (
                <Stack
                  key={item.label}
                  sx={{
                    flexDirection: "row",
                    gap: 5,
                  }}
                >
                  <Typography
                    sx={{
                      width: 260,
                      color: "rgba(255,255,255,.9)",
                      fontSize: 18,
                    }}
                  >
                    {item.label}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 18,
                    }}
                  >
                    {item.value}
                  </Typography>
                </Stack>
              ))}
            </Stack>

            <Typography
              sx={{
                fontWeight: 700,
                fontSize: 24,
                mb: 3,
              }}
            >
              Other Links
            </Typography>

            <Stack
              sx={{
                flexDirection: "row",
                flexWrap: "wrap",
                rowGap: 2,
                mb: 4,
              }}
            >
              {firstLinks.map((link, index) => (
                <Typography
                  key={link.label}
                  component="a"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    fontSize: 18,
                    cursor: "pointer",
                    color: "inherit",
                    textDecoration: "none",
                    "&:hover": {
                      color: "#6FB8FF",
                    },
                  }}
                >
                  {link.label}
                  {index !== firstLinks.length - 1 && (
                    <Box
                      component="span"
                      sx={{
                        mx: 2,
                        color: "rgba(255,255,255,.5)",
                      }}
                    >
                      |
                    </Box>
                  )}
                </Typography>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
