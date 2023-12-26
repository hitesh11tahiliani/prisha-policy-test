import React from "react";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import DependentsDrawer from "./dependentsDrawer";
import { getUserName, getUserRole } from "../helper/stateManagment";
import { useState } from "react";

function topBar({
  displayForm,
  setDisplayForm,
  displayDrawer,
  setDisplayDrawer,
}) {
  const role = localStorage.getItem("userRole");
  return (
    <>
      {role === "Employee" ? (
        <>
          <div
            id="topEmployee"
            className="flex-1 flex-grow flex-col pl-10 sm:pl-20 md:pl-40 lg:pl-60"
          >
            <div className="flex justify-between items-center p-4 h-[15%] shadow bg-[#EDF5FF]">
              <div className="flex flex-col">
                <h1 className="text-xl sm:text-2xl font-semibold text-[#27378C] mb-1">
                  Dependents
                </h1>
                <p className="text-sm sm:text-base">
                  Manage all the dependents from here
                </p>
              </div>
              <button
                className="px-4 sm:px-7 py-2 sm:py-3 flex flex-row bg-[#27378C] text-white rounded hover:bg-indigo-700 transition duration-150 ease-in-out items-center text-sm sm:text-base"
                type="button"
                onClick={() => setDisplayDrawer(!displayDrawer)}
              >
                <MdOutlinePersonAddAlt className="mr-2 sm:mr-3 fa-xl" />
                <p>Add Dependent</p>
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            id="topEmployee"
            className="flex-1 flex-grow flex-col pl-10 sm:pl-20 md:pl-40 lg:pl-60"
          >
            <div className="flex justify-between items-center p-4 h-[15%] bg-[#EDF5FF]">
              <div className="flex flex-col">
                <h1 className="text-xl sm:text-2xl font-semibold text-[#27378C] mb-1">
                  Employees
                </h1>
                <p className="text-sm sm:text-base">
                  Manage all the employees from here
                </p>
              </div>
              <button
                className="px-4 sm:px-7 py-2 sm:py-3 flex flex-row bg-[#27378C] text-white rounded hover:bg-indigo-800 transition duration-150 ease-in-out items-center text-sm sm:text-base"
                type="button"
                onClick={() => setDisplayForm(!displayForm)}
              >
                <MdOutlinePersonAddAlt className="mr-2 sm:mr-3 fa-xl" />
                <p>Add Employee</p>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default topBar;
