import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Rating from "./Rating";
import Image from "next/image";

type Props = {
  review_info: {
    comment: string;
    rating: number;
    name: string;
    image: string;
  };
  children?: React.ReactNode;
};

const ReviewCard = ({ review_info, children }: Props) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4">
          <Image
            src={review_info.image}
            alt={review_info.name}
            width={44}
            height={44}
            className="w-12 rounded-full mb-1"
          />
          <div className="">
            <h3 className="text-sm font-bold capitalize mb-1">
              {review_info.name}
            </h3>
          </div>
          <Rating rating={review_info.rating} />
        </div>
      </CardHeader>
      <CardContent>{review_info.comment}</CardContent>

      <div>{children}</div>
    </Card>
  );
};

export default ReviewCard;
