import React from 'react'
import PostJob from '../../components/postJob/PostJob'
function PostJobpage() {
const initialValues = {
  jobTitle: '',
  tags: '',
  jobrole: '',
  minisalary: '',
  maxsalary: '',
  salaryType: '',
  education: '',
  experience: '',
  jobType: '',
  Works_Space_Type: '',
  Vacancies: '',
  date: '',
};
const handleSubmit =(values, { setSubmitting, resetForm })=>{
console.log(values);
console.log('hello')
setSubmitting(false);
}


  return (
    <>
    <div className='overflow-y-auto w-full h-full '>
    <PostJob initialValues={initialValues} onSubmit={handleSubmit}/>
    </div>
    
    </>
  )
}

export default PostJobpage