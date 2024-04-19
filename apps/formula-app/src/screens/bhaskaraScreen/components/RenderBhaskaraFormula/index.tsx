function RenderBhaskaraFormula(
  value: number,
  name: string,
  power?: number
): string | number | JSX.Element {
  if (value) {
    const valueString: string = value.toString();

    if (name.includes("^"))
      return (
        <>
          {value}
          <sup>{power}</sup>
        </>
      );

    if (name === "b" && !valueString.includes("-")) return `-${value}`;

    return value;
  }
  if (name === "b") return `-${name}`;
  if (name.includes("^"))
    return (
      <>
        {name[0]}
        <sup>{power}</sup>
      </>
    );
  return name;
}

export default RenderBhaskaraFormula;
