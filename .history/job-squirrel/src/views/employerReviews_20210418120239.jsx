import React, {useState} from "react";
import { FaStar } from "react-icons/fa";
import "./stylesheets/Style.css";

const EmployerReview = () => {
    const [rating1, setRating1] = useState(null);
    const [hover1, setHover1] = useState(null);
    return (
    <div>
        <div style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h3>Please rate the overall work completed:</h3><br></br>
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
        
        <div style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h3>Please rate the friendliness of your worker:</h3>
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
    </div>
    )
  }

  export default EmployerReview;