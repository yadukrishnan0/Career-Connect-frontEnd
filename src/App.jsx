
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Userlogin from './pages/userPages/userLoginpage';
import UserHome from './pages/userPages/UserHome';
import Signup from './pages/userPages/Signup';

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<UserHome/>}/>
      <Route path='/login' element={<Userlogin/>}/>
      <Route path='/signup' element={<Signup/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
