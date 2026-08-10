import { Box, Container, Divider, Stack, Typography } from "@mui/material";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";

import background from "../../assets/Footer-background.png";
import logo from "../../assets/logo.png";
import { firstLinks, registrationDetails } from "../../Common/data";

const Footer = () => {
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
                xs: 0,
                lg: 3,
              },
            }}
          >
            <Stack
              sx={{
                gap: {
                  xs: 1.5,
                  md: 3,
                },
                mb: {
                  xs: 4,
                  md: 8,
                },
              }}
            >
              {registrationDetails.map((item) => (
                <Stack
                  key={item.label}
                  sx={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: {
                      xs: 1,
                      md: 5,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      width: {
                        // xs: 110,
                        md: 260,
                      },
                      color: "rgba(255,255,255,.9)",
                      fontSize: {
                        xs: 14,
                        md: 18,
                      },
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.label}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: {
                        xs: 14,
                        md: 18,
                      },
                      whiteSpace: "nowrap",
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
                fontSize: {
                  xs: 14,
                  md: 24,
                },
                mb: {
                  xs: 2,
                  md: 3,
                },
              }}
            >
              Other Links
            </Typography>

            <Stack
              sx={{
                flexDirection: "row",
                flexWrap: "wrap",
                rowGap: {
                  xs: 1,
                  md: 2,
                },
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
                    fontSize: {
                      xs: 11,
                      md: 18,
                    },
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
                        mx: {
                          xs: 1,
                          md: 2,
                        },
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
