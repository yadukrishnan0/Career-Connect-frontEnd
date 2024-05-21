import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserHome from "./pages/userPages/UserHome";
import Signup from "./pages/userPages/Signup";
import SignupOtp from "./pages/userPages/SignupOtp";
import CompanyRegisterInfo from "./pages/userPages/CompanyRegisterInfo";
import UserLogin from "./pages/userPages/UserLogin";
import Userlayout from "./Layout/Userlayout";
function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
        
          <Route path="/signup" element={<Signup />} />
          <Route path="/otp" element={<SignupOtp />} />
          <Route path='/login' element={<UserLogin/>}/>
          <Route path="/companyregisterInfo" element={<CompanyRegisterInfo />}/>
          <Route path="/" element={<Userlayout/>}>
             <Route path="/" element={<UserHome />} />
        </Route>
        </Routes>

    

      </BrowserRouter>
    </>
  );
}

export default App;
