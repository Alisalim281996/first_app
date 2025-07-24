import React from "react";
import SectionTitle from "../global/SectionTitle";
import ReviewCard from "./ReviewCard";
import { fetchProductReview } from "@/utils/action";

const ProductReview = async ({ productId }: { productId: string }) => {
  const review = await fetchProductReview(productId);
  return (
    <div className="mt-16">
      <SectionTitle text="Product Review" />

      <div className="grid md:grid-cols-2 gap-8 my-8">
        {review.map((review) => {
          const { comment, rating, authorName, authonImageUrl } = review;

          const review_info = {
            comment: comment,
            rating: rating,
            image: authonImageUrl,
            name: authorName,
          };
          return <ReviewCard key={review.id} review_info={review_info} />;
        })}
      </div>
    </div>
  );
};

export default ProductReview;
