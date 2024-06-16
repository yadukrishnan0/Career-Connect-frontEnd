import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import CompanyHeader from "../components/CompanyHeader/CompanyHeader";
import CompanySidebar from "../components/CompanySidebar/CompanySidebar";
import { jwtDecode } from "jwt-decode";

function CompanyLayout() {
  const [authenticated, setAuthenticate] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const checkAuth = () => {
      try {
        const token = localStorage.getItem("jwt");
        if (token) {
          const payload = jwtDecode(token);
          if (payload.role == "company") {
            setAuthenticate(true);
          } else {
            navigate("/company/overview", { replace: true });
          }
        } else {
          setAuthenticate(false);
          navigate("/login", { replace: true });
        }
      } catch (error) {
        setAuthenticate(false);
        console.log("Error in check auth", error);
      }
    };

    checkAuth();
  }, []);

  return (
    <>
      {authenticated && (
        <div className="min-h-screen">
          <CompanyHeader />
          <div className="flex h-[calc(100vh-120px)]">
            <div className=" border-2 h-full ">
              <CompanySidebar />
            </div>
            <div className="w-full">
              <Outlet />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CompanyLayout;
