import * as Yup from 'yup';

export const PostjobValidation =Yup.object({
    jobTitle : Yup.string().required('please enter job title'),
    tags: Yup.string().required('please enter the tags'),
    jobrole:Yup.string().required('please  enter the jobrole'),
    minisalary:Yup.string().required('please enter minimum salary'),
    maxsalary:Yup.string().required('please enter maximum salary'),
    education:Yup.string().required('please enter education'),
    experience:Yup.string().required('please enter  experience'),
    jobType:Yup.string().required('please enter job Type'),
    Works_Space_Type:Yup.string().required('please enter Works Space Type'),
    Vacancies:Yup.string().required('please enter  Vacancies'),
    date:Yup.string().required('please enter  date'),
   });