"use client";

import FormContiner from "@/components/form/FormContiner";
import ImageInput from "@/components/form/ImageInput";
import SubmitButton from "@/components/form/SubmitButton";
import { Button } from "@/components/ui/button";
import { actionFunction } from "@/utils/types";
import Image from "next/image";
import React, { useState } from "react";

type ImageContiner = {
  image: string;
  name: string;
  action: actionFunction;
  text: string;
  children?: React.ReactNode;
};

const ImageInputContiner = (props: ImageContiner) => {
  const { image, name, action, text,children } = props;

  const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);

  return (
    <div className="mb-8">
      <Image
        alt={name}
        height={200}
        width={200}
        src={image}
        className="rounded-md object-cover mb-4 w-[200px] h-[200px]"
      />
      <Button
        variant={"outline"}
        size={"sm"}
        className="hover:cursor-pointer"
        onClick={() => setIsUpdateFormVisible((prev) => !prev)}
      >
        {text}
      </Button>
      {isUpdateFormVisible && (
        <div className="max-w-md mt-4">
          <FormContiner action={action}>
            {children}
            <ImageInput name="image" />
            <SubmitButton size={"sm"} />
          </FormContiner>
        </div>
      )}
    </div>
  );
};

export default ImageInputContiner;
