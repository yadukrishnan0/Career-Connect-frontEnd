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

  institution: Yup.string()
    .required("Institution is required")
    .min(2, "Institution is too short")
    .max(100, "Institution is too long"),

  jobrole: Yup.string()
    .required("jobrole is required")
    .min(2, "job role is too short")
    .max(100, "job is too long"),

  experience: Yup.string(),
  company: Yup.string(),
  startdate: Yup.date(),
  enddate: Yup.date(),

  dob: Yup.date()
    .required("Date of Birth is required")
    .max(new Date(), "Date of Birth cannot be in the future"),

  location: Yup.string(),
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

export const ApplicationValidation = Yup.object().shape({
  education: Yup.string().required("Education is required"),
  experience: Yup.string().required("Experience is required"),
  company: Yup.string().required("Company is required"),
  location: Yup.string().required("Location is required"),
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
  resume: Yup.mixed()
    .required("Resume is required")
    .test("fileType", "Only PDF files are allowed", (value) => {
      return value && value.type === "application/pdf";
    }),
});
