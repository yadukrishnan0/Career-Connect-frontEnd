import * as Yup from 'yup';

export const SignupValidation = Yup.object({
  Name: Yup.string().required("Please enter name"),
  Companyname: Yup.string().required("Please enter company name"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter the email"),
  phone: Yup.string().required("Please enter the phone"),
  password: Yup.string()
    .required("Please enter password")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      "Incorrect password format"
    ),
  ConfirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});
