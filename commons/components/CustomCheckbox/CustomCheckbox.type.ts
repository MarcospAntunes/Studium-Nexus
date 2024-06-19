import { MouseEventHandler } from "react";

type CustomCheckboxProps = {
  htmlFor: string;
  name: string;
  id: string;
  text: string;
  onClick: MouseEventHandler<HTMLLabelElement>;
};

export default CustomCheckboxProps;
