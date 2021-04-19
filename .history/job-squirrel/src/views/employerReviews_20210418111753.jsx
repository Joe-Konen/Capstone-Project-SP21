import React, {useState, useMemo} from "react";
import "./stylesheets/Style.css";

function StarIcon(props) {
    const { fill = 'none' } = props;
    return (
      <svg fill={fill} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>

    );
  }
  function StarIcon2(props) {
    const { fill2 = 'none' } = props;
    return (
      <svg fill2={fill2} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>

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
      mouseEnter2,
      mouseLeave2,
      saveRating2,
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
          mouseEnter2={() => mouseEnter2(index2)} 
          mouseLeave2={() => mouseLeave2()} 
          onClick={() => saveRating2(index2)}>
          <StarIcon fill2={fill2} />
        </div>
    )
  }


const EmployerReview = () => {
    
  }

  export default EmployerReview;