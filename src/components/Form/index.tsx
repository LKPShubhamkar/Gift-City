import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { styles } from "./style";
import useLeadForm from "./useLeadForm";
import SuccessModal from "../Modal";

const LeadForm = () => {
  const {
    formData,
    errors,
    otp,
    timer,
    loading,
    errorsMessage,
    successOpen,
    setSuccessOpen,
    handleChange,
    handleOtpChange,
    sendOtp,
    submitLead,
    otpVerified,
    isFormComplete,
    verifyOtp,
  } = useLeadForm();
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.title}>Get More Information</Typography>
      <Stack spacing={2.2}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          sx={styles.input}
        />

        <Box sx={styles.mobileWrapper}>
          <TextField
            fullWidth
            label="Mobile Number"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleChange}
            error={!!errors.mobileNo}
            helperText={errors.mobileNo}
            sx={styles.input}
            disabled={otpVerified}
          />
          {!otpVerified && (
            <Typography
              sx={{
                ...styles.sendOtp,
                color: timer > 0 ? "#999" : "#0054A6",
                cursor: timer > 0 ? "not-allowed" : "pointer",
              }}
              onClick={timer === 0 ? sendOtp : undefined}
            >
              {timer > 0 ? "Resend OTP" : "Send OTP"}
            </Typography>
          )}
        </Box>

        {/* {timer > 0 && ( */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              mt: 0.5,
              fontSize: 14,
              color: "text.secondary",
              textAlign: "right",
              pr: 3,
            }}
          >
            Enter OTP
          </Typography>
          {!otpVerified && timer > 0 && (
            <Typography
              sx={{
                mt: 0.5,
                fontSize: 14,
                color: "text.secondary",
              }}
            >
              00:{String(timer).padStart(2, "0")}
            </Typography>
          )}
        </Box>

        {/* )} */}
        <Box>
          <Stack
            direction="row"
            spacing={3}
            sx={{
              alignItems: "center",
            }}
          >
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
                sx={styles.otpBox}
                disabled={otpVerified}
              />
            ))}

            <Button
              onClick={verifyOtp}
              disabled={otpVerified || otp.join("").length !== 6}
              sx={styles.verifyButton}
            >
              {otpVerified ? "Verified" : "Verify"}
            </Button>
          </Stack>

          {errors.otp && (
            <Typography
              sx={{
                color: "error.main",
                fontSize: 12,
                mt: 1,
              }}
            >
              {errors.otp}
            </Typography>
          )}
        </Box>

        <TextField
          fullWidth
          label="Enter Your City Name"
          name="city"
          value={formData.city}
          onChange={handleChange}
          error={!!errors.city}
          helperText={errors.city}
          sx={styles.input}
        />

        {/* <TextField
          fullWidth
          multiline
          // rows={2}
          label="Enter your Query"
          name="query"
          value={formData.query}
          onChange={handleChange}
          error={!!errors.query}
          helperText={errors.query}
          sx={styles.queryInput}
        />
        <Typography
          sx={{
            textAlign: "right",
            fontSize: 12,
            color: "text.secondary",
          }}
        >
          {formData.query.length}/100
        </Typography> */}

        <Box sx={styles.mobileWrapper}>
          <TextField
            fullWidth
            multiline
            // rows={2}
            label="Enter your Query"
            name="query"
            value={formData.query}
            onChange={handleChange}
            error={!!errors.query}
            helperText={errors.query}
            sx={styles.queryInput}
          />
          <Typography
            sx={{
              textAlign: "right",
              fontSize: 12,
              color: "text.secondary",
            }}
          >
            {formData.query.length}/100
          </Typography>
        </Box>
        {errorsMessage && (
          <Typography
            sx={{
              color: "error.main",
            }}
          >
            {errorsMessage}
          </Typography>
        )}
        <Button
          sx={styles.submitButton}
          onClick={submitLead}
          disabled={loading || !isFormComplete}
        >
          {loading ? "Submitting..." : "Request a call back"}
        </Button>
      </Stack>{" "}
      <SuccessModal open={successOpen} onClose={() => setSuccessOpen(false)} />
    </Box>
  );
};

export default LeadForm;
