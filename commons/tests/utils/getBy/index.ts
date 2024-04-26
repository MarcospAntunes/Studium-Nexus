import getByFnProps from "./getByFn.type";

function getByFn({ Element, fn, text, tag, id, alt, placeholder }: getByFnProps) {
  const getBy = {
    getByText: text ? Element.getByText(text) : "",
    container: tag ? Element.container.querySelector(tag) : "",
    getByTestId: id ? Element.getByTestId(id) : "",
    getByAltText: alt ? Element.getByAltText(alt) : "",
    getByPlaceholderText: placeholder ? Element.getByPlaceholderText(placeholder) : ""
  };

  const currentOperation = getBy[fn];

  return currentOperation;
}

export default getByFn;
