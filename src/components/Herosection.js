import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import hero from '../assets/images/div.jpg';

export const Herosection = ()=>{
    return(
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6 col-lg-6 col-sm-12">
                    <h1 style={{fontSize:"4rem"}}>Brainstorm your book easily.</h1>
                    <p>World-class companies use Writealy AI writing platform to unlock brainstorming for publishing a book.</p>
                    <button>Request a demo</button><buttun style={{backgroundColor:"#EB7A65", borderRadius:"30px",padding:"10px",marginLeft:"15px",border:"2px solid black"}}>Try for free</buttun>
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-12">
                        <img src={hero} className="img-fluid"/>
                    </div>
                </div>
            </div>
        </>
    )

}