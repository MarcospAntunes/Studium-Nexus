import { render } from "@testing-library/react"
import "@testing-library/jest-dom";
import ExistingRoutes from "./index"
import { converterRoutes } from '../../constants/index'

type routes = {
  [key: string]: Object;
};

jest.mock("next/navigation", () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}));

function returnComponent(route: routes, slug: string) {
  const Component = render(
      <ExistingRoutes routes={route} slug={slug}>
        <p>test</p>
      </ExistingRoutes>
  )

  return Component
}

describe("ExistingRoutes Component", () => {
  test("should be in the document", () => {
    const ConverterRouter = returnComponent(converterRoutes, "tempo")
    expect(ConverterRouter.getByText("test")).toBeInTheDocument();
  });

  test("should be return 'null'", () => {
    const ConverterRouter = returnComponent(converterRoutes, "time")
    expect(ConverterRouter.container.firstChild).toBeNull();
  })
})
