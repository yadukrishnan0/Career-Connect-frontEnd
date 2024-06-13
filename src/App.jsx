import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserRouter from "./routers/UserRouter";
import AdminRouter from "./routers/AdminRouter";
import CompanyRouter from "./routers/CompanyRouter";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<UserRouter />} />
          <Route path="/admin/*" element={<AdminRouter />} />
          <Route path="/company/*" element={<CompanyRouter/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
