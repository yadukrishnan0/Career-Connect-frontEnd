import React, { useEffect, useState } from "react";
import axiosInstance from "../../instence/axiosinstance";
import CompanyList from "../../components/companylist/CompanyList";
import DetailsModal from "../../components/DetailsModal/DetailsModal";
import { GiConsoleController } from "react-icons/gi";
import Shimmer from "../../components/shared/Shimmer";
function Companyverification() {
  const [companyData, setCompanyData] = useState([]);
  const[companyId,setCompanyId] =useState('')
  const[companyDetails,setCompanyDetails] =useState([])
  const [Verified, setVerified] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/admin/companyverification");
        const data = response.data?.companyDatas;
        setCompanyData(data);
      // console.log(companyData)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleclick=(id,index)=>{
    
    if(!companyId){
    setCompanyId(id)
  const data=  companyData.filter(val=> {return val._id ==id})
  setCompanyDetails(data);
    }else{
      setCompanyId('')
    }
  }

  const companyVerification =async(id,companyIdd)=>{
  try{
    console.log(companyIdd)
    const response = await axiosInstance.put(`/admin/companyverification?id=${id}`)
if(response.status ==200){
  setCompanyData(companyData.map(company =>
    company._id === companyIdd ? { ...company, companyId
      : { ...company.companyId, adminVerification: true} } : company
  ));
  setCompanyId('')
}
  }catch(error){

  }
  }

    return companyData.length == 0 ?(<div className="flex flex-col gap-4"> <Shimmer/> <Shimmer/><Shimmer/><Shimmer/><Shimmer/></div>):
  (
    
    <div className="flex flex-col gap-7">
      {companyData.map((val, index) => (
        <CompanyList company={val} key={index}   handleclick={handleclick} />
      ))}

      <div className={companyId ? 'flex' :'hidden'}>
      <DetailsModal companyDetails={companyDetails} handleclick={handleclick}  companyVerification={companyVerification}/>
      </div>


    </div>
  )
}

export default Companyverification;
