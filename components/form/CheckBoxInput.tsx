import React from "react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

const CheckBoxInput = ({
  name,
  label,
  defaultChecked = false,
}: {
  name: string;
  label: string;
  defaultChecked?: boolean;
}) => {
  return (
    <div className="flex items-center gap-3">
      <Checkbox id={name} name={name} defaultChecked={defaultChecked} />
      <Label className="text-sm leading-none capitalize" htmlFor={name}>
        {label}
      </Label>
    </div>
  );
};

export default CheckBoxInput;
