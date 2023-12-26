import Navbar from "../components/navbar";
import TopBar from "../components/topBar";
import DepData from "../components/depData";
import toast, { Toaster } from 'react-hot-toast';

import { useEffect, useState } from "react";

function empDashboard() {
  // const location = useLocation();
  //   const uid = location.state.uid;
  //   console.log(uid)
  const [displayDrawer , setDisplayDrawer] = useState(false);
  const notify = (message) => toast(`${message}`);

  
    
  return (
    <>
    {/* <div>empDashboard</div> */}
    <>
      <div id="screen" className=" flex flex-col">
        <Navbar />


        {/* REST SCREEN  */}
        <div id="restScreen " className="flex flex-col">
          <TopBar displayDrawer={displayDrawer} setDisplayDrawer={setDisplayDrawer}/>
          <Toaster/>
          <div className="flex flex-row">
            <DepData notify={notify} setDisplayDrawer={setDisplayDrawer} displayDrawer={displayDrawer} />
            <div className="h-[88vh] border border-grey-300"></div>
            {/* <Dependent /> */}
          </div>
        </div>
      </div>
    </>
    </>
  )
}

export default empDashboard