import * as Yup from "yup";

export const PostjobValidation = Yup.object().shape({
  jobTitle: Yup.string().required("Job Title is required"),
  tags: Yup.string().required("Tags are required"),
  jobrole: Yup.string().required("Job Role is required"),
  minisalary: Yup.number()
    .required("Minimum Salary is required")
    .positive("Must be positive"),
  maxsalary: Yup.number()
    .required("Maximum Salary is required")
    .positive("Must be positive"),
  salaryType: Yup.string().required("Salary Type is required"),
  education: Yup.string().required("Education is required"),
  experience: Yup.string().required("Experience is required"),
  jobType: Yup.string().required("Job Type is required"),
  Works_Space_Type: Yup.string().required("Work-Space-Type is required"),
  Vacancies: Yup.number()
    .required("Vacancies are required")
    .positive("Must be positive"),
  date: Yup.date().required("Expiration Date is required"),

  requirements: Yup.array()
    .of(
      Yup.object().shape({
        requirement: Yup.string().required("Requirement is required"),
      })
    )
    .required("Must have requirements")
    .min(1, "Minimum of 1 requirement"),

  skill: Yup.array()
    .of(
      Yup.object().shape({
        skill: Yup.string().required("skill is required"),
      })
    )
    .required("Must have skill")
    .min(1, "Minimum of 1 skillx"),
});

export const ProfileValidation = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name is too short")
    .max(50, "Name is too long"),
  education: Yup.string()
    .required("Education is required")
    .min(2, "Education is too short")
    .max(100, "Education is too long"),
  experience: Yup.string()
    .required("Experience is required")
    .min(2, "Experience is too short")
    .max(100, "Experience is too long"),
  company: Yup.string()
    .required("Company is required")
    .min(2, "Company is too short")
    .max(100, "Company is too long"),
  dob: Yup.date()
    .required("Date of Birth is required")
    .max(new Date(), "Date of Birth cannot be in the future"),
  location: Yup.string()
    .required("Location is required")
    .min(2, "Location is too short")
    .max(100, "Location is too long"),
  skill: Yup.array().of(
    Yup.object().shape({
      skill: Yup.string().required("Skill is required"),
    })
  ),
  language: Yup.array().of(
    Yup.object().shape({
      language: Yup.string().required("Language is required"),
    })
  ),
});
