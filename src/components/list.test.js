import React from "react";
import { render} from "@testing-library/react";
import ProductList from "./ProductList";
import App from '../App'

test("ProductList should render passed props as content body and respond to callback props", () => {
  const productIds = null;
  const { getByTestId } = render(
    <ProductList
      productIds={productIds}
    />
  );

  expect(getByTestId("empty").textContent).toBe(
    "There nothing here"
  );
});