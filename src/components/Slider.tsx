import React, { useState } from "react";
import { Range } from "./Range";
import { UserInput } from "./UserInput";

interface Props {
  initialValue: number;
}

export default function Slider({ initialValue }: Props) {
  const [value, setValue] = useState(initialValue);
  return (
    <div>
      <Range
        rangeValue={value}
        handleOnChange={e => setValue(e.target.value)}
      />
      <div className="value">{value}</div>
      <UserInput
        userInputValue={value}
        handleOnChange={e => setValue(e.target.value)}
      />
    </div>
  );
}
