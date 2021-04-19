import React, {useState} from "react";
import { FaStar } from "react-icons/fa";
import "./stylesheets/Style.css";

const EmployerReview = () => {
    const [rating1, setRating1] = useState(null);
    const [hover1, setHover1] = useState(null);
    return (
    <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', minHeight:'100vh'}}>
        <div>
            
        </div>
        {[...Array(5)].map((star, i)=>{
            const ratingValue1 = i+1;
            return( 
            <label>
                <input 
                  type="radio" 
                  name="rating1"
                  value={ratingValue1} 
                  onClick={()=>setRating1(ratingValue1)} 
                />
            <FaStar 
            className="star1" 
            color={ratingValue1 <= (hover1 || rating1) ? "yellow" : "grey"} 
            size={75} 
            onMouseEnter={()=>setHover1(ratingValue1)}
            onMouseLeave={()=>setHover1(null)}
            />
            </label>
            )
        })}
    </div>
    )
  }

  export default EmployerReview;