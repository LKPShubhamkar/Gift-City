import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { commonApi } from "../../../services";
import { styles } from "./style";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobileNo: "",
    city: "",
    query: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    mobileNo: "",
    city: "",
    query: "",
    otp: "",
  });

  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(0);
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOtpChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const temp = [...otp];
    temp[index] = value;

    setOtp(temp);

    if (value && index < 3) {
      (
        document.getElementById(`otp-${index + 1}`) as HTMLInputElement
      )?.focus();
    }

    if (!value && index > 0) {
      (
        document.getElementById(`otp-${index - 1}`) as HTMLInputElement
      )?.focus();
    }
  };

  useEffect(() => {
    if (timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const submitLead = async () => {
    if (!validate()) return;

    try {
      setLoading(true);

      const response = await commonApi("WebAdmin/AddApRefLeadsData", {
        ...formData,
        type: "GiftCity/AP",
      });

      console.log(response);

      if (response?.isSuccess) {
        setFormData({
          name: "",
          mobileNo: "",
          city: "",
          query: "",
        });

        setOtp(["", "", "", ""]);
        setOtpSent(false);
        setTimer(0);
        setErrors({
          name: "",
          mobileNo: "",
          city: "",
          query: "",
          otp: "",
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "name") {
      const nameValue = value.replace(/[^A-Za-z ]/g, "");

      setFormData((prev) => ({
        ...prev,
        name: nameValue,
      }));

      if (errors.name) {
        setErrors((prev) => ({
          ...prev,
          name: "",
        }));
      }

      return;
    }

    if (name === "mobileNo") {
      const mobile = value.replace(/\D/g, "").slice(0, 10);

      setFormData((prev) => ({
        ...prev,
        mobileNo: mobile,
      }));

      if (errors.mobileNo) {
        setErrors((prev) => ({
          ...prev,
          mobileNo: "",
        }));
      }

      return;
    }

    if (name === "query") {
      setFormData((prev) => ({
        ...prev,
        query: value.slice(0, 100),
      }));

      if (errors.query) {
        setErrors((prev) => ({
          ...prev,
          query: "",
        }));
      }

      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };
  const validate = () => {
    const temp = {
      name: "",
      mobileNo: "",
      city: "",
      query: "",
      otp: "",
    };

    let valid = true;

    if (!formData.name.trim()) {
      temp.name = "Name is required";
      valid = false;
    }

    if (!/^[A-Za-z ]+$/.test(formData.name.trim())) {
      temp.name = "Only alphabets allowed";
      valid = false;
    }

    if (!/^[6-9]\d{9}$/.test(formData.mobileNo)) {
      temp.mobileNo = "Enter valid mobile number";
      valid = false;
    }

    if (!formData.city.trim()) {
      temp.city = "City is required";
      valid = false;
    }

    if (!formData.query.trim()) {
      temp.query = "Query is required";
      valid = false;
    }

    if (otp.join("").length !== 4) {
      temp.otp = "Enter OTP";
      valid = false;
    }

    setErrors(temp);

    return valid;
  };
  const sendOtp = () => {
    if (!/^[6-9]\d{9}$/.test(formData.mobileNo)) {
      setErrors((prev) => ({
        ...prev,
        mobileNo: "Enter valid mobile number",
      }));
      return;
    }

    setOtp(["", "", "", ""]);
    setOtpSent(true);
    setTimer(60);

    console.log("OTP Sent");
  };
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
          />

          <Typography
            sx={styles.sendOtp}
            onClick={timer === 0 ? sendOtp : undefined}
          >
            {timer > 0 ? `Resend (${timer})` : "Send OTP"}
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

            <Typography color="#555">
              {otpSent ? `00:${String(timer).padStart(2, "0")}` : "00:00"}
            </Typography>
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
                sx={styles.otpBox}
              />
            ))}
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
          </Stack>
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
        <Button
          sx={styles.submitButton}
          onClick={submitLead}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Request a call back"}
        </Button>
      </Stack>
    </Box>
  );
};

export default LeadForm;
