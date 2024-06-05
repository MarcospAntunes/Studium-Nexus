import { MouseEventHandler } from "react";

type TodoButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  checked?: string;
};

export default TodoButtonProps;
