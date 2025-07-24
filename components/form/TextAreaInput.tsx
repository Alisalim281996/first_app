import React from "react";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const TextAreaInput = ({
  name,
  labelText,
  defaultValue,
}: {
  name: string;
  labelText?: string;
  defaultValue?: string;
}) => {
  return (
    <div className="mb-2">
      <Label htmlFor="name" className="mb-3 capitalize">{labelText || name}</Label>
      <Textarea
        id={name}
        name={name}
        defaultValue={defaultValue}
        className="leading-loose"
        required
      />
    </div>
  );
};

export default TextAreaInput;
