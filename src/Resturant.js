import React from "react";
import "./Style.css";

const Resturant = ({ curdata }) => {

    return (
        <>
            {curdata.map((e) => {
                return (
                    <>
                        <div className="card">
                            <div className="card-element">
                                <div className="card-no">{e.index}</div>
                                <h3>{e.time}</h3>
                                <h1>{e.fdname}</h1>
                                <div className="about-container">
                                    <p className="about">Cup noodles is best breakfast in Japan and it price is Rs 50 only</p>
                                </div>
                                <hr></hr>
                                
                                <div className="img-order-container">
                                    <img src={e.fdimg} alt="maagi"></img>
                                    <div className="ocontainer">
                                        <h2>Rs {e.price}</h2>
                                        <button >Order Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                );
            })}

        </>
    )
}




export default Resturant;