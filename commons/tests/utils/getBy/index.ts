import getByFnProps from "./getByFn.type";

function getByFn({ Element, fn, text, tag, id }: getByFnProps) {
  const getBy = {
    getByText: text ? Element.getByText(text) : "",
    container: tag ? Element.container.querySelector(tag) : "",
    getByTestId: id ? Element.getByTestId(id) : "",
  };

  const currentOperation = getBy[fn];

  return currentOperation;
}

export default getByFn;
