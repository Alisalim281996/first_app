import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const ImageInput = ({ name }: { name: string }) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="mb-3 capitalize">
        Image
      </Label>
      <Input id={name} name={name} type="file" accept="image/*" />
    </div>
  );
};

export default ImageInput;
