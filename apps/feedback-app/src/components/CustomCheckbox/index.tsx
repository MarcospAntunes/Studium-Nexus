"use client";

import { useEffect, useState } from "react";
import CustomCheckboxStyled from "./CustomCheckbox.style";
import CustomCheckboxProps from "./CustomCheckbox.type";
import { useFeedback } from "../../../src/hooks";

function CustomCheckbox({
  htmlFor,
  name,
  id,
  text,
  onClick,
}: CustomCheckboxProps): JSX.Element {
  const [check, setCheck] = useState(false);
  const { selectedfunctionalities } = useFeedback();

  const handleCheck = () => {
    setCheck(!check);
  };

  useEffect(() => {
    if (!selectedfunctionalities.includes(name)) setCheck(false);
  }, [name, selectedfunctionalities]);

  return (
    <CustomCheckboxStyled onClick={onClick}>
      <label
        htmlFor={htmlFor}
        className={check ? "checked" : ""}
        onClick={() => handleCheck()}
      />
      <input type="checkbox" name={name} id={id} />
      <span>{text}</span>
    </CustomCheckboxStyled>
  );
}

export default CustomCheckbox;
