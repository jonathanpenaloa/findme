import React from "react";
import "./DashBoard.css"
import UserSchedule from "../../components/UserSchedule/UserSchedule";
import QuickBook from "../../components/QuickBook/QuickBook";

const DashBoard = () => {
  return (
    <div className="dashboard">
      <UserSchedule />
      <QuickBook />
    </div>
  );
}

export default DashBoard