import React, { useState } from "react";
import Resturant  from "./Resturant";
import Api from "./Api";
import "./Style.css";
import Footer from "./Footer";

const App = () => {
  const [currdata, updata] = useState(Api);
  const searchfun =(Time)=>{
     const updatedlist = Api.filter((elem)=>{
      return elem.time === Time;
     })
     updata(updatedlist);
  }


  return (
    <>
       <div className="nav-container">
                <ul className="unorderlist">
                    <li className="li1"  onClick={()=>updata(Api)}>Home</li>
                    <li className="Breakfast"  onClick={()=>searchfun("Breakfast")}>BreakFast</li>
                    <li className="li1"  onClick={()=>searchfun("Lunch")}>Lunch</li>
                    <li className="li1"  onClick={()=>searchfun("Dinner")}>Dinner</li>
                    <li className="all"  onClick={()=>updata(Api)}>All</li>
                </ul>

         </div>

      <div className="card-container">
        <Resturant curdata={currdata} />
      </div>
      <Footer/>
    </>
  )
}



export default App;