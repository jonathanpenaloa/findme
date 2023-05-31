import React, { useContext, useEffect }from "react";
import "./DashBoard.css"
import UserSchedule from "../../components/UserSchedule/UserSchedule";
import QuickBook from "../../components/QuickBook/QuickBook";
import { PrimaryContext } from "../../components/contexts/PrimaryContext";

const DashBoard = () => {


 const { userApps, setUserApps, serviceData, selectedProvider } = useContext(PrimaryContext);
  
//  useEffect(() => {
//     // chack loc store for user
//     // if (tre) {
//     //  setApp()
//     // } else 
//     // 
//     if (window.localStorage.getItem()) {
//       localStoreObj ={
//         userId: [{barberId, slot}, {barberId, slot}]
//       }
//     }
//   }, []);

  return (
    <div className="dashboard">
      <UserSchedule userApps={userApps}/>
      <QuickBook selectedProvider={selectedProvider}/>
    </div>
  );
}

export default DashBoard