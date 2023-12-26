import React from "react";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { addEmployee } from "../helper/apiClients";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";


function empForm({setDisplayForm , displayForm}) {
  const [selectedGender, setSelectedGender] = useState("Male");
  const [employeeName, setEmployeeName] = useState("");
  const [employeeID, setEmployeeID] = useState("");
  const [designation, setDesignation] = useState("");
  const [dateOfJoining, setDateOfJoining] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");

  const notify = (message) => toast(`${message}`);
  const navigate = useNavigate();

  const handleGenderSelection = (gender) => {
    setSelectedGender(gender);
    setGender(gender);
  };

  const handleEmployeeNameChange = (e) => {
    setEmployeeName(e.target.value);
    setEmployeeID(e.target.value);
    setDesignation(e.target.value);
    setDateOfJoining(e.target.value);
    setDateOfBirth(e.target.value);
    setGender(e.target.value)
    setMobileNumber(e.target.value);
    setEmail(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
   
    
      try{
           const res = await addEmployee({ employeeName,
            designation,
            dateOfJoining,
            gender,
            mobileNumber,
            email,})

            console.log(res);
            notify("New employee successfully created");
            setDisplayForm(!displayForm)
            
      }catch(err){
        console.log(err)
        notify("Invalid Details")
      }
     

  };
  return (
    <>
      <div className="w-full">
        <form className="bg-white" onSubmit={handleSubmit}>
          <div className="flex flex-col items-start p-6 space-y-8">
            {/* Employee Name */}
            <div className="flex flex-col w-full space-y-5">
              <div className="flex items-center space-x-4">
                <div className="flex flex-col space-y-1 flex-grow">
                  <div className="flex items-center space-x-2">
                    <div className="text-base font-medium text-black">
                      Employee Name
                    </div>
                    <div className="text-xs font-medium text-red-500">*</div>
                  </div>
                  <div className="flex items-start px-3 py-2.5 bg-white border border-stone-300 rounded">
                    <input
                      className="w-full text-base font-normal text-neutral-500 opacity-80"
                      type="text"
                      placeholder="Full Name"
                      value={employeeName}
                      onChange={(e)=>setEmployeeName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                {/* Employee ID */}
                <div className="flex flex-col space-y-1 flex-grow">
                  <div className="flex items-center space-x-2">
                    <div className="text-base font-medium text-black">
                      Employee ID
                    </div>
                    <div className="text-xs font-medium text-red-500">*</div>
                  </div>
                  <div className="flex items-start px-3 py-2.5 bg-white border border-stone-300 rounded">
                    <input
                      className="w-full text-base font-normal text-neutral-500 opacity-80"
                      type="text"
                      placeholder="Company employee id"
                      value={employeeID}
                      onChange={(e)=> setEmployeeID(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex flex-col space-y-1 flex-grow">
                  <div className="flex items-center space-x-2">
                    <div className="text-base font-medium text-black">
                      Employee Designation
                    </div>
                    <div className="text-xs font-medium text-red-500">*</div>
                  </div>
                  <div className="flex items-start px-3 py-2.5 bg-white border border-stone-300 rounded">
                    <input
                      className="w-full text-base font-normal text-neutral-500 opacity-80"
                      type="text"
                      placeholder="Designation"
                      value={designation}
                      onChange={(e)=>setDesignation(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col space-y-1 flex-grow">
                  <div className="flex items-center space-x-2">
                    <div className="text-base font-medium text-black">
                      Date of Joining
                    </div>
                    <div className="text-xs font-medium text-red-500">*</div>
                  </div>
                  <div className="flex items-start px-3 py-2.5 bg-white border border-stone-300 rounded">
                    <input
                      className="w-full text-base font-normal text-neutral-500 opacity-80"
                      type="text"
                      placeholder="yyyy-mm-dd"
                      value={dateOfJoining}
                      onChange={(e)=>setDateOfJoining(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex flex-col space-y-1 flex-grow">
                  <div className="flex items-center space-x-2">
                    <div className="text-base font-medium text-black">
                      Date of birth
                    </div>
                    <div className="text-xs font-medium text-red-500">*</div>
                  </div>
                  <div className="flex items-start px-3 py-2.5 bg-white border border-stone-300 rounded">
                    <input
                      className="w-full text-base font-normal text-neutral-500 opacity-80"
                      type="text"
                      placeholder="yyyy-mm-dd"
                      value={dateOfBirth}
                      onChange={(e)=>setDateOfBirth(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col space-y-1 flex-grow ">
                  <div className="flex items-center space-x-2">
                    <div className="text-base font-medium text-black">
                      Gender
                    </div>
                    <div className="text-xs font-medium text-red-500">*</div>
                  </div>
                  <div className="flex w-full h-11 bg-white border border-neutral-200 rounded-lg">
                    <div
                      className={`flex items-center justify-center flex-grow space-x-3 px-6 py-3 rounded-md cursor-pointer ${
                        selectedGender === "Male"
                          ? "bg-blue-900 text-white"
                          : ""
                      }`}
                      onClick={()=>handleGenderSelection("Male")}
                    >
                      <div className="text-base font-medium">Male</div>
                    </div>
                    <div
                      className={`flex items-center justify-center flex-grow space-x-3 px-6 py-3 rounded-md cursor-pointer ${
                        selectedGender === "Female"
                          ? "bg-blue-900 text-white"
                          : ""
                      }`}
                      onClick={() => handleGenderSelection("Female")}
                    >
                      <div className="text-base font-medium">Female</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex flex-col space-y-1 flex-grow">
                  <div className="flex items-center space-x-2">
                    <div className="text-base font-medium text-black">
                      Mobile Number
                    </div>
                    <div className="text-xs font-medium text-red-500">*</div>
                  </div>
                  <div className="flex items-start px-3 py-2.5 bg-white border border-stone-300 rounded">
                    <input
                      className="w-full text-base font-normal text-neutral-500 opacity-80"
                      type="text"
                      placeholder="without country code"
                      value={mobileNumber}
                      onChange={(e)=>setMobileNumber(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col space-y-1 flex-grow">
                  <div className="flex items-center space-x-2">
                    <div className="text-base font-medium text-black">
                      Email
                    </div>
                    <div className="text-xs font-medium text-red-500">*</div>
                  </div>
                  <div className="flex items-start px-3 py-2.5 bg-white border border-stone-300 rounded">
                    <input
                      className="w-full text-base font-normal text-neutral-500 opacity-80"
                      type="text"
                      placeholder="corporate email id"
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <button className=" border border-gray-300 rounded py-3 bg-indigo-800 text-white" type="submit">Submit</button>
              {/* Other fields... */}
              {/* Gender Selection */}

              {/* Other fields... */}
            </div>
            {/* Add Dependents */}
            <div className="w-full flex flex-col items-start space-y-2 border-t border-grey-300">
              <div className="text-base font-normal text-neutral-400">
                Add dependents
              </div>
              <div className="flex items-center justify-start w-full p-4 space-x-3 bg-blue-50 border border-blue-900 rounded-lg">
                <IoMdAdd className="text-xl text-blue-900" />
                <div className="text-base font-medium text-blue-900">
                  Add a dependent
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default empForm;
