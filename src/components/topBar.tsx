import React from "react";
import {MdOutlinePersonAddAlt} from "react-icons/md"
import DependentsDrawer from "./dependentsDrawer";
import { getUserName, getUserRole } from '../helper/stateManagment';
import { useState } from "react";



function topBar({displayForm  , setDisplayForm, displayDrawer, setDisplayDrawer}) {



  // const role = getUserRole();
  const role = localStorage.getItem("userRole");
  return (
    <>
    {role === "Employee"
            ? 
            <>
            <div id="topEmployee" className="flex-1 flex-grow flex-col  pl-60">
            <div>
              <div className="flex justify-between items-center p-4 h-[15%] shadow bg-[#EDF5FF]">
                <div className="flex flex-col">
                  <h1 className="text-2xl font-semibold text-[#27378C] mb-1">
                    Dependents
                  </h1>
                  <p>Manage all the dependents from here</p>
                </div>
                <button
              className="px-7 py-3 flex flex-row bg-[#27378C] text-white rounded hover:bg-indigo-700 transition duration-150 ease-in-out items-center"
              type="button"
              // data-drawer-target="drawer-right-example"
              // data-drawer-show="drawer-right-example"
              // data-drawer-placement="right"
              // aria-controls="drawer-right-example"
              onClick={()=> setDisplayDrawer(!displayDrawer)}
            >
              <MdOutlinePersonAddAlt className="mr-3 fa-xl" />
              <p>Add Dependent</p>
            </button>
              </div>
            </div>
            
          </div>
         
          </>
            :<>
            <div id="topEmployee" className="flex-1 flex-grow flex-col  pl-60">
        <div>
          <div className="flex justify-between items-center p-4 h-[15%] bg-[#EDF5FF]">
            <div className="flex flex-col">
              <h1 className="text-2xl font-semibold text-[#27378C] mb-1">
                Employees
              </h1>
              <p>Manage all the employees from here</p>
            </div>

            <button
              className="px-7 py-3 flex flex-row bg-[#27378C] text-white rounded hover:bg-indigo-800 transition duration-150 ease-in-out items-center"
              type="button"
              // data-drawer-target="drawer-right-example"
              // data-drawer-show="drawer-right-example"
              // data-drawer-placement="right"
              // aria-controls="drawer-right-example"
              onClick={()=> setDisplayForm(!displayForm)}
            >
              <MdOutlinePersonAddAlt className="mr-3 fa-xl" />
              <p>Add Employee</p>
            </button>
          </div>
        </div>
        
      </div>
            </>}
      
    </>
  );
}

export default topBar;
