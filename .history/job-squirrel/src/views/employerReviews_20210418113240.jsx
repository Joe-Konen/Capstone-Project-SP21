import { ary } from "lodash";
import React from "react";
import { FaStar } from "react-icons/fa";

const EmployerReview = () => {
    return (
    <div style={{display:'flex', marginLeft:'30%', marginTop:'15%'}}>
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