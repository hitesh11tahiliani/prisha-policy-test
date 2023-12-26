import React, { useEffect, useState } from "react";
import { FaRegBell, FaList, FaRegUser } from "react-icons/fa";
import { RiHome3Line, RiHospitalLine } from "react-icons/ri";
import { LuUsers } from "react-icons/lu";
import { TiDocumentAdd } from "react-icons/ti";
import { allEmployees, employeeDependents } from "../helper/apiClients";
import profileOne from "../assets/profile1.jpeg";
import Banner from "../assets/poweredByIcon.jpg";
import { getUserName, getUserRole } from "../helper/stateManagment";
import WhatsNext from "../assets/whatsNext.jpg";

const buttonsEmployee = [
  { icon: <FaRegBell className="fa-lg mx-4" />, text: "Notifications" },
  { icon: <RiHome3Line className="fa-lg mx-4" />, text: "Home" },
  { icon: <FaList className="fa-lg mx-4" />, text: "Plans" },
  { icon: <LuUsers className="fa-lg mx-4" />, text: "Dependents" },
  { icon: <TiDocumentAdd className="fa-lg mx-4" />, text: "Claims" },
  { icon: <RiHospitalLine className="fa-lg mx-4" />, text: "Hospitals" },
  { icon: <FaRegUser className="fa-lg mx-4" />, text: "Profile" },
];

const buttonsHRManager = [
  { icon: <FaRegBell className="fa-lg mx-4" />, text: "Notifications" },
  { icon: <RiHome3Line className="fa-lg mx-4" />, text: "Home" },
  { icon: <FaList className="fa-lg mx-4" />, text: "Plans" },
  { icon: <LuUsers className="fa-lg mx-4" />, text: "Employees" },
  { icon: <TiDocumentAdd className="fa-lg mx-4" />, text: "Claims" },
  { icon: <TiDocumentAdd className="fa-lg mx-4" />, text: "Corporate Claims" },
  { icon: <RiHospitalLine className="fa-lg mx-4" />, text: "Hospitals" },
  { icon: <FaRegUser className="fa-lg mx-4" />, text: "Profile" },
];

const Navbar: React.FC = () => {
  // const [dependents, setDependents] = useState([]);
  const [allEmployee, setAllEmployee] = useState([]);
  // const userRole = "employee";
  // const role = getUserRole();
  const role = localStorage.getItem("userRole");
  // const userName = getUserName();
  const userName = localStorage.getItem("userName");

  console.log("Role from another file:", role);
  useEffect(() => {
    async function fetchData() {
      try {
        const dependentsResponse = await employeeDependents({ employee_id: 1 });
        setDependents(dependentsResponse);

        const allEmployeesResponse = await allEmployees();
        setAllEmployee(allEmployeesResponse);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div
      id="navbar"
      className="bg-white shadow-md fixed border lg:w-60 md:w-40 sm:w-40 h-screen"
    >
      <div className="flex flex-col h-full">
        <div className="flex flex-row justify-evenly items-center p-3 py-4">
          <img className="rounded-full w-7 h-7" src={profileOne} alt="" />
          <h2 className="font-semibold text-xs md:text-sm lg:text-base">
            {userName.length !== 0 ? userName : "Loading.."}
          </h2>
        </div>

        <hr className="my-0 p-0 self-start w-full border-gray-300" />

        <div className="flex flex-col justify-between h-3/5">
          {(role === "Employee" ? buttonsEmployee : buttonsHRManager).map(
            (button, index) => (
              <button
                key={index}
                className={`flex items-center pl-4 hover:bg-[#EDF5FF] py-2 ${
                  button.text ===
                  (role === "Employee" ? "Dependents" : "Employees")
                    ? "bg-[#EDF5FF]"
                    : ""
                }`}
              >
                {button.icon}
                <span className="text-xs md:text-sm">{button.text}</span>
              </button>
            )
          )}
        </div>

        {role === "Employee" ? (
          <div>
            <img
              className="w-full h-auto rounded-md p-1 pb-0"
              src={WhatsNext}
              alt=""
            />
            <img className="h-auto w-full rounded-md p-1" src={Banner} alt="" />
          </div>
        ) : (
          <div className="absolute bottom-0">
            <hr className="mb-3 p-0 self-start w-full border-gray-300" />
            <div className="flex flex-row items-center justify-center text-center">
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-800"></div>
                <span className="ms-3 text-xs md:text-sm font-medium text-gray-900">
                  Employee View
                </span>
              </label>
            </div>
            <hr className="mt-2 p-0 self-start w-full border-gray-300" />
            <img className="h-auto w-full rounded-md p-1" src={Banner} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
