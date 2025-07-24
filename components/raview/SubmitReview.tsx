"use client";

import React, { useState } from "react";
import { Card } from "../ui/card";
import FormContainer from "../form/FormContiner";
import { createReviewAction } from "@/utils/action";
import { useUser } from "@clerk/nextjs";
import RatingInput from "./RatingInput";
import TextAreaInput from "../form/TextAreaInput";
import SubmitButton from "../form/SubmitButton";
import { Button } from "../ui/button";

const SubmitReview = ({ productId }: { productId: string }) => {
  const { user } = useUser();
  const [isVisable, setIsVisible] = useState(false);
  return (
    <div className="mt-10">
      <Button onClick={() => setIsVisible((e) => !e)}>Leave Review</Button>
      {isVisable && (
        <div>
          <Card className="p-8 my-10">
            <FormContainer action={createReviewAction}>
              <input type="hidden" name="productId" value={productId} />
              <input
                type="hidden"
                name="authorName"
                value={user?.firstName || ""}
              />
              <input
                type="hidden"
                name="authonImageUrl"
                value={user?.imageUrl || ""}
              />

              <RatingInput name="rating" />
              <TextAreaInput name="comment" labelText="FeedBack" />
              <SubmitButton className="mt-4" />
            </FormContainer>
          </Card>
        </div>
      )}
    </div>
  );
};

export default SubmitReview;
