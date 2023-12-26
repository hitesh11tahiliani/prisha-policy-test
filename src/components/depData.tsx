import React, { useState, useEffect } from "react";

import { GoPencil } from "react-icons/go";
import { RiDeleteBinLine } from "react-icons/ri";
import { employeeDependents, deleteDependent } from "../helper/apiClients";
import profile from "../assets/profile1.jpeg";
import DependentsDrawer from "./dependentsDrawer";

function EmployeeData({ displayDrawer, setDisplayDrawer, notify }) {
  const [dependents, setDependents] = useState([]);

  const fetchData = async () => {
    try {
      const uid = JSON.parse(localStorage.getItem("employeeId"));
      console.log(uid);
      const res = await employeeDependents({ employeeId: uid });
      setDependents(res);
    } catch (error) {
      // console.error("Error fetching dependents:", error);
    }
  };

  const deleteDep = async (dependentId) => {
    try {
      await deleteDependent({ dependentId });
      fetchData();
    } catch (err) {
      console.log();
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="sm:w-full md:w-3/4 lg:w-2/3 pl-60 flex flex-col">
        <div className="">
          <div className="flex flex-row">
            <div className="sm:p-2 md:p-3 lg:p-4 w-full">
              {displayDrawer ? (
                <DependentsDrawer
                  setDisplayDrawer={setDisplayDrawer}
                  displayDrawer={displayDrawer}
                  fetchData={fetchData}
                  notify={notify}
                />
              ) : (
                ""
              )}

              {dependents.map((dependent) => (
                <div
                  key={dependent.dependent_id}
                  className="sm:p-2 md:p-3 lg:p-4 mt-2 rounded flex justify-between items-center border border-gray-300"
                >
                  <div className="flex flex-row items-center">
                    <img
                      className="h-10 w-10 rounded-full mx-2"
                      src={profile}
                      alt=""
                    />

                    <div>
                      <p className="sm:text-xs md:text-sm lg:text-base font-semibold">
                        {dependent.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {dependent.date_of_birth} | {dependent.relation}
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <GoPencil className="text-indigo-600 hover:text-indigo-800 fa-lg" />
                    <button onClick={() => deleteDep(dependent.dependent_id)}>
                      <RiDeleteBinLine className="text-red-600 hover:text-red-800 fa-lg" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeeData;
