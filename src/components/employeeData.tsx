import { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { GrSearch } from "react-icons/gr";
import { CiFilter } from "react-icons/ci";
import { MdOutlineFileDownload } from "react-icons/md";
import { allEmployees } from "../helper/apiClients";
import profile from "../assets/profile1.jpeg";
import EmpForm from "./empForm";

function EmployeeData({ setId, displayForm, setDisplayForm }) {
  console.log(displayForm);
  const [selectedGender, setSelectedGender] = useState("male");
  const [display, setDisplay] = useState(false);

  const handleGenderSelection = (gender) => {
    setSelectedGender(gender);
  };

  const [allEmployee, setAllEmployee] = useState([]);

  const getAllEmployees = () => {
    allEmployees().then((res) => {
      setAllEmployee(res);
    });
  };

  useEffect(() => {
    getAllEmployees();
  }, []);

  console.log(allEmployee);

  return (
    <>
      <div
        id="buttonEmployeeDependent"
        className="sm:w-full md:w-4/5 lg:w-2/3 px-4 sm:px-6 md:pl-40 lg:pl-60 flex flex-col"
      >
        <div className="bg-white flex flex-wrap px-4 py-3">
          <div
            className="relative inline-block text-left mb-2 sm:mb-0"
            id="allPolicies"
          >
            <button
              type="button"
              className="inline-flex justify-center items-center rounded-md border border-gray-300 px-3 py-1 sm:px-2 sm:py-2 bg-white text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-50"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              All Policies
              <IoIosArrowDown className="ml-1 sm:ml-2 w-4 h-4 sm:w-4 sm:h-4" />
            </button>
          </div>

          <div
            className="relative inline-block ml-2 mb-2 sm:mb-0"
            id="activePendingInactive"
          >
            <ul className="flex text-xs sm:text-sm border rounded">
              <li className="-mb-px mr-1">
                <a
                  className="bg-blue-800 text-white py-1 sm:py-2 px-3 sm:px-3 rounded-l inline-block"
                  href="#active"
                >
                  Active
                </a>
              </li>
              <li className="mr-1">
                <a
                  className="text-blue-800 py-1 sm:py-2 px-3 sm:px-3 rounded-l inline-block"
                  href="#pending"
                >
                  Pending
                </a>
              </li>
              <li className="mr-1">
                <a
                  className="text-blue-800 py-1 sm:py-2 px-3 sm:px-3 rounded-l inline-block"
                  href="#inactive"
                >
                  Inactive
                </a>
              </li>
            </ul>
          </div>

          <div className="ml-auto flex" id="buttons">
            <button className="text-gray-500 hover:text-gray-700">
              <GrSearch className="w-5 h-5" />
            </button>
            <button className="text-gray-500 hover:text-gray-700 ml-2">
              <CiFilter className="w-5 h-5" />
            </button>
            <button className="text-gray-500 hover:text-gray-700 ml-2 ">
              <MdOutlineFileDownload className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row">
          {displayForm ? (
            <EmpForm
              getAllEmployees={getAllEmployees}
              displayForm={displayForm}
              setDisplayForm={setDisplayForm}
            />
          ) : (
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
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default EmployeeData;
