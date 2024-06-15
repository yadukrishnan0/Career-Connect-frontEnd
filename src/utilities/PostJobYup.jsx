import * as Yup from 'yup';

export const PostjobValidation = Yup.object({
  jobTitle: Yup.string().required('Please enter job title'),
  tags: Yup.string().required('Please enter the tags'),
  jobrole: Yup.string().required('Please enter the job role'),
  minisalary: Yup.number().required('Please enter minimum salary'),
  maxsalary: Yup.number().required('Please enter maximum salary'),
  salaryType: Yup.string().required('Please enter salary type'),
  education: Yup.string().required('Please enter education'),
  experience: Yup.string().required('Please enter experience'),
  jobType: Yup.string().required('Please enter job type'),
  Works_Space_Type: Yup.string().required('Please enter work space type'),
  Vacancies: Yup.number().required('Please enter vacancies'),
  date: Yup.date().required('Please enter date'),
});
