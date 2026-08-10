import { useEffect, useState } from "react";
import { submitLeadApi, sendOtpApi, verifyOtpApi } from "./api";
import { validateLead } from "./validation";
const useLeadForm = () => {
  const initialFormData = {
    name: "",
    mobileNo: "",
    city: "",
    query: "",
  };

  const initialErrors = {
    name: "",
    mobileNo: "",
    city: "",
    query: "",
    otp: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(initialErrors);
  const [errorsMessage, setErrorsMessage] = useState("");

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [sendingOtp, setSendingOtp] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [timer, setTimer] = useState(0);
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const [successOpen, setSuccessOpen] = useState(false);

  useEffect(() => {
    if (timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleOtpChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const temp = [...otp];
    temp[index] = value;

    setOtp(temp);

    if (value && index < 5) {
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

  const submitLead = async () => {
    const { valid, errors } = validateLead(formData, otp);
    if (!otpVerified) {
      setErrors((prev) => ({
        ...prev,
        otp: "Please verify OTP first",
      }));
      return;
    }

    if (!valid) {
      setErrors(errors);
      return;
    }
    try {
      setLoading(true);

      const response = await submitLeadApi(formData);

      console.log(response);

      if (response?.isSuccess) {
        setSuccessOpen(true);
        setFormData(initialFormData);
        setOtp(["", "", "", "", "", ""]);
        setOtpSent(false);
        setOtpVerified(false); // Add this
        setTimer(0);
        setErrors(initialErrors);
      } else {
        setErrorsMessage(response?.errorMessages);
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
      const nameValue = value
        .replace(/[^A-Za-z ]/g, "")
        .replace(/\s{2,}/g, " ")
        .replace(/^\s+/, "");

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

      setOtp(["", "", "", "", "", ""]);
      setOtpVerified(false);
      setOtpSent(false);
      setTimer(0);

      if (errors.mobileNo) {
        setErrors((prev) => ({
          ...prev,
          mobileNo: "",
        }));
      }

      return;
    }

    if (name === "city") {
      const cityValue = value
        .replace(/[^A-Za-z ]/g, "")
        .replace(/\s{2,}/g, " ")
        .replace(/^\s+/, "");

      setFormData((prev) => ({
        ...prev,
        city: cityValue,
      }));

      if (errors.city) {
        setErrors((prev) => ({
          ...prev,
          city: "",
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

  const sendOtp = async () => {
    if (!/^[6-9]\d{9}$/.test(formData.mobileNo)) {
      setErrors((prev) => ({
        ...prev,
        mobileNo: "Enter valid mobile number",
      }));
      return;
    }

    try {
      setSendingOtp(true);

      const response = await sendOtpApi(formData.mobileNo);

      if (response?.isSuccess || response?.statusCode === 200) {
        setOtp(["", "", "", "", "", ""]);
        setOtpVerified(false);
        setOtpSent(true);
        setTimer(59);

        document.getElementById("otp-0")?.focus();
      } else {
        console.error(response?.message);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSendingOtp(false);
    }
  };

  const verifyOtp = async () => {
    const otpValue = otp.join("");

    if (otpValue.length !== 6) {
      setErrors((prev) => ({
        ...prev,
        otp: "Enter valid OTP",
      }));
      return;
    }

    try {
      const response = await verifyOtpApi(formData.mobileNo, otpValue);

      if (response?.data?.isVerified === 1) {
        setOtpVerified(true);

        setErrors((prev) => ({
          ...prev,
          otp: "",
        }));
      } else {
        setOtpVerified(false);

        setErrors((prev) => ({
          ...prev,
          otp: response?.data?.message || "Invalid OTP",
        }));
      }
    } catch (err) {
      console.error(err);

      setOtpVerified(false);

      setErrors((prev) => ({
        ...prev,
        otp: "Something went wrong",
      }));
    }
  };

  const isFormComplete =
    formData.name.trim().length >= 2 &&
    /^[6-9]\d{9}$/.test(formData.mobileNo) &&
    otpVerified &&
    formData.city.trim().length >= 2 &&
    formData.query.trim().length > 0;

  return {
    formData,
    errors,
    otp,
    timer,
    otpSent,
    otpVerified,
    sendingOtp,
    loading,
    successOpen,
    isFormComplete,
    setSuccessOpen,
    handleChange,
    handleOtpChange,
    sendOtp,
    verifyOtp,
    submitLead,
    errorsMessage,
  };
};

export default useLeadForm;
