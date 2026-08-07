import { commonApi } from "../../../services";

export const submitLeadApi = (data: any) => {
  return commonApi("WebAdmin/AddLeadsData", {
    ...data,
    type: "GiftCity",
  });
};
export const sendOtpApi = (mobileNo: string) => {
  return commonApi("Auth/CommonSendOrVerifyOTP", {
    sourceType: "GIFTCity",
    mobileNo,
    emailId: "",
    otp: "",
    action: "Send",
  });
};

export const verifyOtpApi = (mobileNo: string, otp: string) => {
  return commonApi("Auth/CommonSendOrVerifyOTP", {
    sourceType: "GIFTCity",
    mobileNo,
    emailId: "",
    otp,
    action: "Verify",
  });
};
