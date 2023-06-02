import React, { useContext, useEffect }from "react";
import "./DashBoard.css"
import UserSchedule from "../../components/UserSchedule/UserSchedule";
import QuickBook from "../../components/QuickBook/QuickBook";
import { PrimaryContext } from "../../components/contexts/PrimaryContext";

const DashBoard = () => {


 const { userApps, setUserApps, serviceData, selectedProvider } = useContext(PrimaryContext);
  

  return (
    <div className="dashboard">
      <UserSchedule userApps={userApps} setUserApps={setUserApps} />
      <QuickBook selectedProvider={selectedProvider}/>
    </div>
  );
}

export default DashBoard