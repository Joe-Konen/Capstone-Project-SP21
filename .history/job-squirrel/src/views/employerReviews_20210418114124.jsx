import React, {useState} from "react";
import { FaStar } from "react-icons/fa";
import "./stylesheets/Style.css";

const EmployerReview = () => {
    return (
    <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', minHeight:'100vh'}}>
        {[...Array(5)].map((star, i)=>{
            const ratingValue1 = i+1;
            return( 
            <label>
                <input type="radio" name="rating1" value={ratingValue1} />
                <FaStar className="star1" size={75} />
            </label>
            )
        })}
    </div>
    )
  }

  export default EmployerReview;