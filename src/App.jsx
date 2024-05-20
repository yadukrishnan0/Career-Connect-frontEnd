
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';

import UserHome from './pages/userPages/UserHome';
import Signup from './pages/userPages/Signup';
import SignupOtp from './pages/userPages/SignupOtp';

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<UserHome/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/otp' element={<SignupOtp/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
