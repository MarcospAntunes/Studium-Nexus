import { Dispatch, SetStateAction } from "react";

type ChangeLayoutContextProps = {
  layout: boolean;
  setLayout: Dispatch<SetStateAction<boolean>>;
};

export default ChangeLayoutContextProps;
