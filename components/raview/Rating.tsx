import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

const Rating = ({ rating }: { rating: number }) => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1 <= rating);
  // حتى لا يعبر ال 5
  return (
    <div className="flex items-center gap-x-1">
      {stars.map((full, i) => {
        return full ? <FaStar key={i} color="yellow"/> : <FaRegStar key={i} />;
      })}
    </div>
  );
};

export default Rating;
