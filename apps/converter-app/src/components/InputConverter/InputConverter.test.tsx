import { render } from "@testing-library/react";
import InputConverter from "./index";
import "@testing-library/jest-dom";

const Components = [
  {
    id: "testFileInput",
    name: "testInput",
    type: "file",
    key: 0,
    value: "",
    accept: ".pdf, .doc, .docx",
    onChange: () => "",
    placeholder: "input file",
    required: false,
  },
  {
    id: "testNumberInput",
    name: "test",
    type: "number",
    key: 1,
    value: "",
    accept: undefined,
    onChange: () => "",
    placeholder: "input number",
    required: true,
  },
];

describe("InputConverter Component", () => {
  test.each(Components)(
    "%s should be in the document",
    ({
      id,
      name,
      type,
      key,
      value,
      accept,
      onChange,
      placeholder,
      required,
    }) => {
      const { getByPlaceholderText } = render(
        <InputConverter
          id={id}
          name={name}
          type={type}
          key={key}
          value={value}
          accept={accept}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
      );

      expect(getByPlaceholderText(placeholder)).toBeInTheDocument();
    }
  );
});
