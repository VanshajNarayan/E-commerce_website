import "./StarReview.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiSolidStarHalf } from "react-icons/bi";

const StarReview = ({ stars, review }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let numbers = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <AiFillStar className="star" />
        ) : stars >= numbers ? (
          <BiSolidStarHalf className="star" />
        ) : (
          <AiOutlineStar className="star" />
        )}
      </span>
    );
  });

  return (
    <>
      <p className="mrb"> {ratingStar} <span className="size"> ({review} customer review)  </span> </p>
    </>
  );
};

export default StarReview;
