type TitleProps = {
  nav: "true" | "false";
};

type TitleNicoMojiProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLHeadingElement> | undefined;
  nav?: "true" | "false";
};

export type { TitleNicoMojiProps, TitleProps };
