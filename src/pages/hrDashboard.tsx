import React, { useState } from "react";
import Navbar from "../components/navbar";
import TopBar from "../components/topBar";
import EmpData from "../components/employeeData";
import Dependent from "../components/dependents";
import toast, { Toaster } from 'react-hot-toast';

function hrDashboard() {

  const [id, setId] = useState(0);
  const [displayForm, setDisplayForm] = useState(false);
  const notify = (message) => toast(`${message}`);

  return (
    <>
      <div id="screen" className=" flex flex-col">
        <Navbar />
         <Toaster/>
        {/* REST SCREEN  */}
        <div id="restScreen " className="flex flex-col">
          <TopBar setDisplayForm={setDisplayForm} displayForm={displayForm} />

          <div className="flex flex-row">
            <EmpData id={id} notify={notify} setId={setId} displayForm={displayForm}  setDisplayForm={setDisplayForm}/>
            
            <Dependent id={id} notify={notify} setId={setId}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default hrDashboard;
