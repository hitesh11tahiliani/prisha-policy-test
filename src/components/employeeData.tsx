import React, { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { GrSearch } from "react-icons/gr";
import { CiFilter } from "react-icons/ci";
import { MdOutlineFileDownload } from "react-icons/md";
import { allEmployees } from "../helper/apiClients";
import profile from "../assets/profile1.jpeg";
import { IoMdAdd } from "react-icons/io";
// import { getUserId,setUserId } from "../helper/stateManagment";
import EmpForm from "./empForm";

function EmployeeData({ setId ,id , displayForm,setDisplayForm }) {
  console.log(displayForm)
  const [selectedGender, setSelectedGender] = useState("male");
  const [display, setDisplay] = useState(false);

  const handleGenderSelection = (gender) => {
    setSelectedGender(gender);
  };

  const [allEmployee, setAllEmployee] = useState([]);

  useEffect(() => {
    allEmployees().then((res) => {
      setAllEmployee(res);
    });
  }, []);

  console.log(allEmployee);

  return (
    <>
      <div id="buttonEmployeeDependent" className="w-2/3 pl-60 flex flex-col">
        {/* form code  */}

        {/* employee display code  */}

        <div className="bg-white flex px-4 py-3">
          <div className="relative inline-block text-left" id="allPolicies">
            <button
              type="button"
              className="inline-flex justify-center items-center rounded-md border border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              All Policies
              <IoIosArrowDown className="ml-2" />
            </button>
          </div>

          <div
            className="relative inline-block ml-2"
            id="activePendingInactive"
          >
            <ul className="flex text-sm border rounded">
              <li className="-mb-px mr-1">
                <a
                  className="bg-blue-800 text-white py-2 px-4 rounded-l inline-block"
                  href="#active"
                >
                  Active
                </a>
              </li>
              <li className="mr-1">
                <a
                  className="text-blue-800 py-2 px-4 rounded-l inline-block"
                  href="#pending"
                >
                  Pending
                </a>
              </li>
              <li className="mr-1">
                <a
                  className="text-blue-800 py-2 px-4 rounded-l inline-block"
                  href="#inactive"
                >
                  Inactive
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-2 ml-auto" id="buttons">
            <button className="text-gray-500 hover:text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor">
                <GrSearch />
              </svg>
            </button>
            <button className="text-gray-500 hover:text-gray-700 ml-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <CiFilter />
              </svg>
            </button>
            <button className="text-gray-500 hover:text-gray-700 ml-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <MdOutlineFileDownload />
              </svg>
            </button>
          </div>
        </div>

    

        <div className="flex flex-row">
          {displayForm ? <EmpForm displayForm={displayForm} setDisplayForm= {setDisplayForm} /> : <>
          <div className="p-4 w-full">
            {allEmployee.map((employee) => (
              <div
                onClick={() => setId(employee.employee_id)}
                key={employee.employee_id}
                className="p-4 mt-2 rounded flex justify-between items-center border border-gray-300"
              >
                <div className="flex flex-row items-center">
                  <img
                    className="h-10 w-10 rounded-full mx-2"
                    src={profile}
                    alt=""
                  />

                  <div>
                    <p className="font-semibold">{employee.name}</p>
                    <p className="text-sm text-gray-800">
                      {employee.user_id} | {employee.designation}
                    </p>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <div className="h-[36px] w-[36px] bg-[#EDF5FF] rounded-lg flex items-center justify-center">
                    <IoIosArrowForward className="text-[#27378C]" />
                  </div>
                </div>
              </div>
            ))}
          </div></>}
          
        </div>
      </div>
    </>
  );
}

export default EmployeeData;
