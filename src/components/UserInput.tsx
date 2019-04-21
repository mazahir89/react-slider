import React from "react";

interface Props {
  userInputValue: number;
  handleOnChange: (e: any) => void;
}

export function UserInput({ userInputValue, handleOnChange }: Props) {
  return (
    <input
      type="number"
      min={0}
      max={10000}
      value={userInputValue}
      onChange={handleOnChange}
    />
  );
}
