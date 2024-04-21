import { ChangeEventHandler } from "react";

type InputConverterProps = {
  type: string;
  accept: string | undefined;
  name: string;
  id: string;
  placeholder?: string;
  required: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: any;
  multiple?: boolean | undefined;
};

export default InputConverterProps;
