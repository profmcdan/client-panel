import React from "react";
import Clients from "../client/Clients";
import Sidebar from "../layout/Sidebar";

const Dashboard = () => (
  <div className="row">
    <div className="col-md-10">
      <Clients />
    </div>
    <div className="col-md-2">
      <Sidebar />
    </div>
  </div>
);

export default Dashboard;
