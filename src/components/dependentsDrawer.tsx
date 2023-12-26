import { useState } from "react";
import { addDependent,deleteDependent } from "../helper/apiClients";
import { getEmployeeId } from "../helper/stateManagment";
import toast, { Toaster } from 'react-hot-toast';



function DependentsDrawer({displayDrawer, setDisplayDrawer,fetchData , notify}) {
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [relation, setRelation] = useState("");


  const handleSaveAndAdd = async() => {
    try{
      const employeeId = getEmployeeId();
      console.log(employeeId);
      const res = await addDependent({employeeId , name,dateOfBirth,relation });
      console.log(res);
      fetchData();
      notify("Dependents successfully added");
      setDisplayDrawer(!displayDrawer);


    }catch(err){
      console.log(err)
      notify("Invalid value");
    }
  }

  

  const handleDiscard = () => {
    setDisplayDrawer(!displayDrawer);
  };

  return (

    <div
     className="absolute right-0 top-0 h-full border-l border-grey-300"
    >
      <div className="w-96 h-96 bg-neutral-100 shadow flex flex-col justify-start items-start">
        <div className="w-96 h-28 px-6 py-5 bg-white border-b border-neutral-200 flex justify-start items-center gap-4">
          <div className="flex flex-col justify-center items-start grow shrink basis-0 gap-0.5">
            <div className="text-black text-xl font-bold leading-loose">
              Add a Dependent
            </div>
            <div className="text-neutral-600 text-base font-normal leading-normal">
              Lorem ipsum dolor sit amet 
            </div>
          </div>
        </div>
        <form className="flex flex-col justify-start items-start self-stretch grow shrink basis-0 p-6 bg-white gap-5">
          {/* Name Input */}
          <div className="self-stretch h-16 rounded-sm flex flex-col justify-start items-start gap-1">
            <label className="flex justify-start items-center gap-2 self-stretch">
              <span className="text-black text-base font-medium leading-normal">
                Name
              </span>
              <span className="text-red-500 text-xs font-medium leading-tight">
                *
              </span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="self-stretch px-3 py-2.5 bg-white rounded border border-stone-300"
              placeholder="Enter here"
            />
          </div>
         
          {/* Date of Birth Input */}
          <div className="self-stretch h-16 rounded-sm flex flex-col justify-start items-start gap-1">
            <label className="flex justify-start items-center gap-2 self-stretch">
              <span className="text-black text-base font-medium leading-normal">
                Date of Birth
              </span>
              <span className="text-red-500 text-xs font-medium leading-tight">
                *
              </span>
            </label>
            <input
              type="text"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              className="self-stretch px-3 py-2.5 bg-white rounded border border-stone-300"
              placeholder="YYYY-MM-DD"
            />
          </div>
          {/* Relation Input */}
          <div className="self-stretch h-16 rounded-sm flex flex-col justify-start items-start gap-1">
            <label className="flex justify-start items-center gap-2 self-stretch">
              <span className="text-black text-base font-medium leading-normal">
                Relation
              </span>
              <span className="text-red-500 text-xs font-medium leading-tight">
                *
              </span>
            </label>
            <input
              type="text"
              value={relation}
              onChange={(e) => setRelation(e.target.value)}
              className="self-stretch px-3 py-2.5 bg-white rounded border border-stone-300"
              placeholder="Select"
            />
          </div>
          {/* Buttons */}
          <div className="absolute bottom-0 pl-0 p-2 border-t border-neutral-200">
          <div className="flex justify-center items-center gap-4 self-stretch">
            <button
              type="button"
              onClick={handleDiscard}
              className={`h-11 px-6 mx-5 rounded-lg flex justify-center items-center text-red-500`}
            >
              Discard
            </button>
            <button
              type="button"
              onClick={handleSaveAndAdd}
              className={`h-11 px-6 mx-5 bg-blue-900 rounded-lg flex justify-center items-center text-white`}
            >
              Save & add
            </button>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DependentsDrawer;
