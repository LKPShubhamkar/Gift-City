import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

const inputSx = {
  "& .MuiOutlinedInput-root": {
    height: 56,
    borderRadius: "16px",
    bgcolor: "#fff",
    boxShadow: "0 6px 18px rgba(0,0,0,.08)",

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
};

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
        width: {
          xs: "100%",
          sm: 420,
          md: 460,
        },
        maxWidth: "100%",
        bgcolor: "#fff",
        borderRadius: "36px",
        p: {
          xs: 3,
          md: 3.5,
        },
        boxShadow: "0 18px 40px rgba(0,0,0,.18)",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontSize: 24,
          fontWeight: 700,
          mb: 3,
        }}
      >
        Get More Information
      </Typography>

      <Stack spacing={2.2}>
        <TextField fullWidth label="Name" sx={inputSx} />

        <Box sx={{ position: "relative" }}>
          <TextField fullWidth label="Mobile Number" sx={inputSx} />

          <Typography
            sx={{
              position: "absolute",
              right: 20,
              top: "52%",
              transform: "translateY(-50%)",
              color: "#0054A6",
              fontWeight: 500,
              fontSize: 15,
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
            <Typography color="#555">Enter OTP</Typography>

            <Typography color="#555">00:59</Typography>
          </Box>

          <Stack direction="row" spacing={2}>
            {otp.map((digit, index) => (
              <TextField
                key={index}
                id={`otp-${index}`}
                value={digit}
                onChange={(e) => handleOtpChange(e.target.value, index)}
                slotProps={{
                  htmlInput: {
                    maxLength: 1,
                    style: {
                      textAlign: "center",
                      fontSize: 22,
                    },
                  },
                }}
                sx={{
                  width: 64,

                  "& .MuiOutlinedInput-root": {
                    width: 64,
                    height: 64,
                    borderRadius: "14px",
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

        <TextField fullWidth label="Enter Your City Name" sx={inputSx} />

        <TextField
          fullWidth
          multiline
          rows={2}
          label="Enter your Query"
          sx={{
            ...inputSx,

            "& textarea": {
              resize: "none",
            },

            "& .MuiOutlinedInput-root": {
              ...inputSx["& .MuiOutlinedInput-root"],
              height: "auto",
            },
          }}
        />

        <Button
          variant="contained"
          sx={{
            height: 60,
            borderRadius: "18px",
            bgcolor: "#0054A6",
            textTransform: "none",
            fontSize: 20,
            fontWeight: 600,

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
