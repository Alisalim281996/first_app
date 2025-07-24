import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";
const RatingInput = ({
  name,
  labelText,
}: {
  name: string;
  labelText?: string;
}) => {
  const numbers = Array.from({ length: 5 }, (_, i) => {
    const value = i + 1;

    return value.toString();
  }).reverse();

  return (
    <div className="mb-6 w-10 flex gap-2 items-center">
      <Label className="captilaize">{labelText || name}</Label>
      <Select defaultValue={numbers[0]} name={name} required>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {numbers.map((number) => {
            return (
              <SelectItem value={number} key={number}>
                {number}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

export default RatingInput;
