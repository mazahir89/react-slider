import React from "react";
interface Props {
  handleOnChange: (e: any) => void;
  rangeValue: number;
}

export function Range({ rangeValue, handleOnChange }: Props) {
  return (
    <input
      type="range"
      min={0}
      max={10000}
      value={rangeValue}
      className="slider"
      onChange={handleOnChange}
    />
  );
}
