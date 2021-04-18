import { ary } from "lodash";
import React from "react";
import { FaStar } from "react-icons/fa";

const EmployerReview = () => {
    return (
    <div style={{display:'flex', marginLeft:'%', marginTop:'30%'}}>
        {[...Array(5)].map((star)=>{
            return <FaStar size={75} />
        })}
    </div>
    )
  }

  export default EmployerReview;