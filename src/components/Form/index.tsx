import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

const LeadForm = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleOtpChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const temp = [...otp];
    temp[index] = value;
    setOtp(temp);

    if (value && index < 3) {
      const next = document.getElementById(`otp-${index + 1}`);
      (next as HTMLInputElement)?.focus();
    }
  };

  return (
    <Box
      sx={{
        width: 460,
        bgcolor: "#fff",
        borderRadius: "32px",
        p: "24px",
        boxShadow: "0 18px 45px rgba(0,0,0,.25)",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontSize: 24,
          fontWeight: 700,
          mb: 2,
        }}
      >
        Get More Information
      </Typography>

      <Stack spacing={2}>
        <TextField
          fullWidth
          label="Name"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "16px",
              bgcolor: "#fff",
              boxShadow: "0 4px 18px rgba(0,0,0,.08)",

              "& fieldset": {
                borderColor: "#ECECEC",
              },

              "&:hover fieldset": {
                borderColor: "#0054A6",
              },

              "&.Mui-focused fieldset": {
                borderColor: "#0054A6",
              },
            },
          }}
        />

        <Box sx={{ position: "relative" }}>
          <TextField
            fullWidth
            label="Mobile Number"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "16px",
                bgcolor: "#fff",
                boxShadow: "0 4px 18px rgba(0,0,0,.08)",

                "& fieldset": {
                  borderColor: "#ECECEC",
                },

                "&:hover fieldset": {
                  borderColor: "#0054A6",
                },

                "&.Mui-focused fieldset": {
                  borderColor: "#0054A6",
                },
              },
            }}
          />

          <Typography
            sx={{
              position: "absolute",
              right: 18,
              top: "50%",
              transform: "translateY(-50%)",
              color: "#0054A6",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Send OTP
          </Typography>
        </Box>

        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 1.5,
            }}
          >
            <Typography
              sx={{
                color: "#555",
              }}
            >
              Enter OTP
            </Typography>

            <Typography
              sx={{
                color: "#555",
              }}
            >
              00:60
            </Typography>
          </Box>

          <Stack direction="row" spacing={2}>
            {otp.map((digit, index) => (
              <TextField
                key={index}
                id={`otp-${index}`}
                value={digit}
                onChange={(e) => handleOtpChange(e.target.value, index)}
                inputProps={{
                  maxLength: 1,
                  style: {
                    textAlign: "center",
                    fontSize: 22,
                  },
                }}
                sx={{
                  width: 58,

                  "& .MuiOutlinedInput-root": {
                    height: 58,
                    borderRadius: "12px",
                    boxShadow: "0 4px 14px rgba(0,0,0,.08)",

                    "& fieldset": {
                      borderColor: "#D7D7D7",
                    },

                    "&.Mui-focused fieldset": {
                      borderColor: "#0054A6",
                    },
                  },
                }}
              />
            ))}
          </Stack>
        </Box>

        <TextField
          fullWidth
          label="Enter Your City Name"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "16px",
              bgcolor: "#fff",
              boxShadow: "0 4px 18px rgba(0,0,0,.08)",

              "& fieldset": {
                borderColor: "#ECECEC",
              },

              "&.Mui-focused fieldset": {
                borderColor: "#0054A6",
              },
            },
          }}
        />

        <TextField
          fullWidth
          multiline
          rows={3}
          label="Enter your Query"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "16px",
              bgcolor: "#fff",
              boxShadow: "0 4px 18px rgba(0,0,0,.08)",

              "& fieldset": {
                borderColor: "#ECECEC",
              },

              "&.Mui-focused fieldset": {
                borderColor: "#0054A6",
              },
            },
          }}
        />

        <Button
          variant="contained"
          sx={{
            height: 56,
            borderRadius: "16px",
            bgcolor: "#0054A6",
            textTransform: "none",
            fontSize: 20,
            fontWeight: 600,
            boxShadow: "none",

            "&:hover": {
              bgcolor: "#00458A",
              boxShadow: "none",
            },
          }}
        >
          Request a call back
        </Button>
      </Stack>
    </Box>
  );
};

export default LeadForm;
