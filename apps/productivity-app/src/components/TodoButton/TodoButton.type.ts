import { MouseEventHandler } from "react";

type TodoButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  checked?: string;
};

type TodoButtonStyledProps = {
  checked: string;
};

export type { TodoButtonProps, TodoButtonStyledProps };
