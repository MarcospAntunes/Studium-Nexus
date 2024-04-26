import "@testing-library/jest-dom";
import { getByFn } from "../utils";
import toBeInTheDocumentProps from "./toBeInTheDocument.type";

function toBeInTheDocument({
  Element,
  describeText,
  fn,
  text = "",
  tag = "",
  id = "",
  alt = "",
  placeholder = "",
}: toBeInTheDocumentProps) {
  const reqMethod = getByFn({ Element, fn, text, tag, id, alt, placeholder });

  describe(describeText, () => {
    test("should be in the document", () => {
      expect(reqMethod).toBeInTheDocument();
    });
  });
}

export default toBeInTheDocument;
