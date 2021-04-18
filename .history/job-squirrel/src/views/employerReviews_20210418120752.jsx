import React, {useState} from "react";
import { FaStar } from "react-icons/fa";
import "./stylesheets/Style.css";

const EmployerReview = () => {
    const [rating1, setRating1] = useState(null);
    const [hover1, setHover1] = useState(null);
    const [rating2, setRating2] = useState(null);
    const [hover2, setHover2] = useState(null);
    return (
    <div style={{padding:'100px', textAlign:'center'}}>
        <h1>Review your worker!</h1>
        <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', minHeight:'100px'}}>
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
        <br></br>
        <br></br>
        
        <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', minHeight:'100px'}}>
            <h3>Please rate the friendliness of your worker:</h3><br></br>
            {[...Array(5)].map((star2, i2)=>{
            const ratingValue2 = i2+1;
            return( 
            <label>
                <input 
                  type="radio" 
                  name="rating2"
                  value={ratingValue2} 
                  onClick={()=>setRating2(ratingValue2)} 
                />
            <FaStar 
            className="star2" 
            color={ratingValue2 <= (hover2 || rating2) ? "yellow" : "grey"} 
            size={75} 
            onMouseEnter={()=>setHover2(ratingValue2)}
            onMouseLeave={()=>setHover2(null)}
            />
            </label>
            )
        })}
        </div>
    </div>
    )
  }

  export default EmployerReview;