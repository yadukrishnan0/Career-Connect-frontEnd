import * as Yup from 'yup';

export const PostjobValidation = Yup.object().shape({
  jobTitle: Yup.string().required('Job Title is required'),
  tags: Yup.string().required('Tags are required'),
  jobrole: Yup.string().required('Job Role is required'),
  minisalary: Yup.number().required('Minimum Salary is required').positive('Must be positive'),
  maxsalary: Yup.number().required('Maximum Salary is required').positive('Must be positive'),
  salaryType: Yup.string().required('Salary Type is required'),
  education: Yup.string().required('Education is required'),
  experience: Yup.string().required('Experience is required'),
  jobType: Yup.string().required('Job Type is required'),
  Works_Space_Type: Yup.string().required('Work-Space-Type is required'),
  Vacancies: Yup.number().required('Vacancies are required').positive('Must be positive'),
  date: Yup.date().required('Expiration Date is required'),
  requirements: Yup.array().of(
    Yup.object().shape({
      requirement: Yup.string().required('Requirement is required'),
    })
  ).required('Must have requirements').min(1, 'Minimum of 1 requirement'),
});
