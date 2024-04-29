import verifyRoutes from "./index";
import { converterRoutes, formulaRoutes } from "../../constants/index";

describe("verifyRoutes function", () => {
  test('should return "false"', () => {
    const converterRouter = verifyRoutes(converterRoutes, "time");
    const formulaRouter = verifyRoutes(formulaRoutes, "baskara");

    expect(converterRouter).toBe(false);
    expect(formulaRouter).toBe(false);
  });

  test('should return "true"', () => {
    const converterRouter = verifyRoutes(converterRoutes, "tempo");
    const formulaRouter = verifyRoutes(formulaRoutes, "bhaskara");

    expect(converterRouter).toBe(true);
    expect(formulaRouter).toBe(true);
  });
});
