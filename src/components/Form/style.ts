export const styles = {
  container: {
    width: "100%",
    maxWidth: {
      xs: 340,
      sm: 420,
      md: 460,
    },
    mx: "auto",
    bgcolor: "#fff",
    borderRadius: "36px",
    p: {
      xs: 3,
      md: 3.5,
    },
    boxShadow: "0 18px 40px rgba(0,0,0,.18)",
  },

  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: 700,
    mb: 2,
  },

  input: {
    "& .MuiOutlinedInput-root": {
      height: 50,
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
  },

  mobileWrapper: {
    position: "relative",
  },

  sendOtp: {
    position: "absolute",
    right: 20,
    top: "52%",
    transform: "translateY(-50%)",
    color: "#0054A6",
    fontWeight: 500,
    fontSize: 15,
    cursor: "pointer",
  },

  otpHeader: {
    display: "flex",
    justifyContent: "space-between",
    mb: 1.5,
  },

  otpBox: {
    width: 50,

    "& .MuiOutlinedInput-root": {
      width: 50,
      height: 50,
      borderRadius: "14px",
      boxShadow: "0 4px 14px rgba(0,0,0,.08)",

      "& fieldset": {
        borderColor: "#D7D7D7",
      },

      "&.Mui-focused fieldset": {
        borderColor: "#0054A6",
      },
    },
  },

  queryInput: {
    "& textarea": {
      resize: "none",
    },

    "& .MuiOutlinedInput-root": {
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
  },

  submitButton: {
    height: 60,
    borderRadius: "18px",
    bgcolor: "#0054A6",
    textTransform: "none",
    fontSize: 20,
    fontWeight: 600,
    color: "#fff",
    "&:hover": {
      bgcolor: "#00458A",
      boxShadow: "none",
    },
  },
};
