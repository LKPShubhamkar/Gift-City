// export const validateLead = (formData, otp) => {
//   const errors = {
//     name: "",
//     mobileNo: "",
//     city: "",
//     query: "",
//     otp: "",
//   };

//   let valid = true;

//   if (!formData.name.trim()) {
//     errors.name = "Name is required";
//     valid = false;
//   } else if (!/^[A-Za-z ]+$/.test(formData.name.trim())) {
//     errors.name = "Only alphabets allowed";
//     valid = false;
//   }

//   if (!/^[6-9]\d{9}$/.test(formData.mobileNo)) {
//     errors.mobileNo = "Enter valid mobile number";
//     valid = false;
//   }

//   if (!formData.city.trim()) {
//     errors.city = "City is required";
//     valid = false;
//   }

//   if (!formData.query.trim()) {
//     errors.query = "Query is required";
//     valid = false;
//   }

//   if (otp.join("").length !== 6) {
//     errors.otp = "Enter OTP";
//     valid = false;
//   }

//   return { valid, errors };
// };
export const validateLead = (formData: any, otp: string[]) => {
  const errors = {
    name: "",
    mobileNo: "",
    city: "",
    query: "",
    otp: "",
  };

  let valid = true;

  const name = formData.name.trim().replace(/\s+/g, " ");
  const city = formData.city.trim().replace(/\s+/g, " ");

  // Name
  if (!name) {
    errors.name = "Name is required";
    valid = false;
  } else if (name.length < 2) {
    errors.name = "Name must be at least 2 characters";
    valid = false;
  } else if (name.length > 100) {
    errors.name = "Name cannot exceed 100 characters";
    valid = false;
  } else if (!/^[A-Za-z]+([ '-][A-Za-z]+)*$/.test(name)) {
    errors.name =
      "Only alphabets, spaces, hyphen (-) and apostrophe (') are allowed";
    valid = false;
  }

  // Mobile Number
  if (!formData.mobileNo) {
    errors.mobileNo = "Mobile number is required";
    valid = false;
  } else if (!/^[6-9]\d{9}$/.test(formData.mobileNo)) {
    errors.mobileNo = "Enter a valid 10-digit mobile number";
    valid = false;
  }

  // City
  if (!city) {
    errors.city = "City is required";
    valid = false;
  } else if (city.length < 2) {
    errors.city = "City must be at least 2 characters";
    valid = false;
  } else if (city.length > 50) {
    errors.city = "City cannot exceed 50 characters";
    valid = false;
  } else if (!/^[A-Za-z]+( [A-Za-z]+)*$/.test(city)) {
    errors.city = "Only alphabets and spaces are allowed";
    valid = false;
  }

  // Query
  if (!formData.query.trim()) {
    errors.query = "Query is required";
    valid = false;
  }

  // OTP
  if (otp.join("").length !== 6) {
    errors.otp = "Enter 6-digit OTP";
    valid = false;
  }

  return { valid, errors };
};
