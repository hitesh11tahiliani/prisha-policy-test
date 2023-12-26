import { useState, useEffect } from "react";
import { employeeDependents } from "../helper/apiClients";
import profile from "../assets/profile1.jpeg";
import { GoPencil } from "react-icons/go";
import { RiDeleteBinLine } from "react-icons/ri";
import Icon from "../assets/icon.png";

function dependents({ id, notify }) {
  const [dependents, setDependents] = useState([]);
  console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await employeeDependents({ employeeId: id });
        setDependents(res);
      } catch (error) {
        // console.error("Error fetching dependents:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <div className="sm:w-full md:w-3/5 lg:w-2/5 sm:mt-1 md:mt-2 px-2 max-w-full rounded-lg flex flex-col">
        {id == 0 ? (
          <div className="top-0 flex flex-col justify-center items-center sm:p-2 md:p-4 w-full h-screen border-l border-r">
            <img className="flex" src={Icon} alt="" />
            <div className="text-center sm:p-2 md:p-4">
              <p>No Dependent Selected</p>
              <p className="sm:text-xs md:text-sm mt-2">
                Please select a dependent to view details.
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="w-full sm:p-2 md:p-4 bg-rose-50 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5"></div>
                <div className="text-zinc-900 sm:text-sm md:text-base font-medium">
                  Group Health Insurance
                </div>
              </div>
              <div className="text-zinc-900 sm:text-sm md:text-base font-medium">
                {dependents.length}/{dependents.length}
              </div>
            </div>

            <div className="sm:p-2 md:p-4 flex flex-col sm:gap-1 md:gap-2">
              <div className="flex items-center justify-between">
                <div className="text-zinc-900 sm:text-xs md:text-sm font-light">
                  Dependents
                </div>
                <div className="flex text-zinc-900 sm:text-xs md:text-sm font-medium">
                  {dependents.map((dep, index) => (
                    <p key={index} className="mr-1">
                      {dep.relation},
                    </p>
                  ))}
                </div>
              </div>

              {dependents.map((dependent) => (
                <div className="sm:p-2 md:p-4 mt-2 rounded flex justify-between items-center border border-gray-300">
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
                      <p className="sm:text-xs md:text-sm text-gray-600">
                        {dependent.date_of_birth} | {dependent.relation}
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <GoPencil className="text-indigo-600 hover:text-indigo-800 fa-lg" />
                    <RiDeleteBinLine className="text-red-600 hover:text-red-800 fa-lg" />
                  </div>
                </div>
              ))}

              <div className="w-full sm:p-2 md:p-3 mt-2 rounded border border-blue-900 flex justify-center items-center">
                <div className="text-blue-900 sm:text-sm md:text-base font-medium">
                  Edit details
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default dependents;
