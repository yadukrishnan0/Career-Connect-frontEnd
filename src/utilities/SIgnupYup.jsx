import { CgPassword } from 'react-icons/cg';
import * as Yup from 'yup';

export const SignupValidation =Yup.object({
    name: Yup.string().required('please enter movie title'),
    email: Yup.string().email('Invalid email address').required('please enter the cast'),
    phone:Yup.string().required('please  enter the language'),
    password:Yup.string().required('please enter discription').matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        "incorrect password format "
      ),
    confirmpassword:Yup.string().oneOf([Yup.ref('password'),null],'password must place').required('confirm password is required')
    
})