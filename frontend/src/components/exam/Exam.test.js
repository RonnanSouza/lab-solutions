import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { jest } from "@testing-library/jest-dom";

import Exam from "./Exam";

let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});


it("Renders an Exam with no data", () => {
  act(() => {
    render(<Exam></Exam>, container);
  });
  expect(container.textContent).toBe("Loading...");
})

it("Renders an Exam with mocked data", async () => {

  const fakeExam = {
    id: "00",
    name: "fakeName",
    description: "fakeDescription",
  };

  jest.spyOn(global, "fetch").mockImplementation(() => {
    Promise.resolve({
      json: () => Promise.resolve(fakeExam)
    })
  });
  
  await act(() => {
    render(<Exam id="00"></Exam>, container);
  });
  expect(container.textContent).toContain(fakeExam.name)
  expect(container.textContent).toContain(fakeExam.description)

  global.fetch.mockRestore();
})