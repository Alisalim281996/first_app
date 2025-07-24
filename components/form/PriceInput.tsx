import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

interface PriceFormatProps {
  name: string;
  defaultValue?: number;
}

const PriceInput = ({ name, defaultValue }: PriceFormatProps) => {
  return (
    <div className="mb-2">
      <Label htmlFor="price" className="capitalize mb-3">
        Price ($)
      </Label>
      <Input
        id={name}
        type="number"
        name={name}
        min={0}
        defaultValue={defaultValue || 50}
        required
      />
    </div>
  );
};

export default PriceInput;
