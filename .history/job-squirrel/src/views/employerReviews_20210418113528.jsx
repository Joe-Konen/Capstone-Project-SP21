import { ary } from "lodash";
import React from "react";
import { FaStar } from "react-icons/fa";
import "./stylesheets/Style.css";

const EmployerReview = () => {
    return (
    <div style={{display:'flex', justifyContent: 'center', }}>
        {[...Array(5)].map((star)=>{
            return( 
            <label>
                <input type="radio" name="rating1" />
                <FaStar className="star1" size={75} />
            </label>
            )
        })}
    </div>
    )
  }

  export default EmployerReview;