import getByFnProps from "./getByFn.type";

function getByFn({ Element, fn, text, tag = "" }: getByFnProps) {
  const getBy = {
    getByText: text ? Element.getByText(text) : "",
    container: Element.container.querySelector(tag)
  }

  const currentOperation = getBy[fn]

  return currentOperation
}

export default getByFn;
