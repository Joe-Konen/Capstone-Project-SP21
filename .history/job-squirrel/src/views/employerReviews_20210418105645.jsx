import React, {useState, useMemo} from "react";
import "./stylesheets/Style.css";

function StarIcon(props) {
    const { fill = 'none' } = props;
    return (
      <svg fill={fill} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>

    );
  }
  
  function RatingIcon(props) {
    const {
      index,
      rating,
      hoverRating,
      onMouseEnter,
      onMouseLeave,
      onSaveRating,
    } = props;
    const fill = useMemo(() => {
      if (hoverRating >= index) {
        return 'yellow';
      } else if (!hoverRating && rating >= index) {
        return 'yellow';
      }
      return 'none';
    }, [rating, hoverRating, index]);
    return (
        <div
          style={{width:'50px'}}
          className ="cursor-pointer"
          onMouseEnter={() => onMouseEnter(index)} 
          onMouseLeave={() => onMouseLeave()} 
          onClick={() => onSaveRating(index)}>
          <StarIcon fill={fill} />
        </div>
    )
  }
  function RatingIcon2(props) {
    const {
      index2,
      rating2,
      hoverRating2,
      onMouseEnter2,
      onMouseLeave2,
      onSaveRating2,
    } = props;
    const fill2 = useMemo(() => {
      if (hoverRating2 >= index2) {
        return 'yellow';
      } else if (!hoverRating2 && rating2 >= index2) {
        return 'yellow';
      }
      return 'none';
    }, [rating2, hoverRating2, index2]);
    return (
        <div
          style={{width:'50px'}}
          className ="cursor-pointer"
          onMouseEnter2={() => onMouseEnter2(index2)} 
          onMouseLeave2={() => onMouseLeave2()} 
          onClick={() => onSaveRating2(index2)}>
          <StarIcon fill2={fill2} />
        </div>
    )
  }


const EmployerReview = () => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const onMouseEnter = (index) => {
      setHoverRating(index);
    };
    const onMouseLeave = () => {
      setHoverRating(0);
    };
    const onSaveRating = (index) => {
      setRating(index);
    };

    const [rating2, setRating2] = useState(0);
    const [hoverRating2, setHoverRating2] = useState(0);
    const mouseEnter2 = (index2) => {
      setHoverRating2(index2);
    };
    const mouseLeave2 = () => {
      setHoverRating2(0);
    };
    const saveRating2 = (index2) => {
      setRating2(index2);
    };
    const styleObj = {
        fontSize: 14,
        color: "#4a54f1",
        textAlign: "center",
        paddingTop: "100px",
    }
    return(
        <div className="employerStar" style={styleObj}>
            <h1>Review your worker!</h1>

        <div>
            <h3>Please rate overall friendliness of you worker:</h3>
            <div className="box flex">
            {[1, 2, 3, 4, 5].map((index) => {
          return (
            <RatingIcon
              id="first" 
              index={index} 
              rating={rating} 
              hoverRating={hoverRating} 
              onMouseEnter={onMouseEnter} 
              onMouseLeave={onMouseLeave} 
              onSaveRating={onSaveRating} 
            />
          )
            })}
        
            </div> 
        </div >
        <div>
            <h3>Please rate overall work that was completed:</h3>
            <div className="box flex">{[1, 2, 3, 4, 5].map((index2) => {
          return (
            <RatingIcon2 
              id="second"
              index2={index2} 
              rating2={rating2} 
              hoverRating2={hoverRating2} 
              onMouseEnter2={onMouseEnter2} 
              onMouseLeave2={onMouseLeave2} 
              onSaveRating2={onSaveRating2} 
            />
          )
            })}
            </div>
            
        </div>
        <div>
            <h3>Any additional comments?</h3>
            <textarea style={{height:'30%', width:'40%'}}></textarea>
        </div>
           
        </div>
    );
  }

  export default EmployerReview;