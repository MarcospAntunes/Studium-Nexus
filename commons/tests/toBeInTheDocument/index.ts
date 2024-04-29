/* eslint-disable jest/no-export */
/* eslint-disable jest/valid-title */

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
  role = "",
}: toBeInTheDocumentProps) {
  const reqMethod = getByFn({
    Element,
    fn,
    text,
    tag,
    id,
    alt,
    placeholder,
    role,
  });

  describe(describeText, () => {
    test("should be in the document", () => {
      expect(reqMethod).toBeInTheDocument();
    });
  });
}
export default toBeInTheDocument;
