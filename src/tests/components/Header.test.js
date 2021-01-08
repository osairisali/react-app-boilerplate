import React from "react";
import { Header } from "../../components/Header";
import { shallow } from "enzyme";

let wrapper, startLogout;

beforeEach(() => {
  startLogout = jest.fn();

  // wrapper = shallow(<Header store={store} startLogout={startLogout} />);
  wrapper = shallow(<Header startLogout={startLogout} />);
});

test("should render header", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should logout when logout button clicked", () => {
  wrapper.find("button").simulate("click");

  expect(startLogout).toHaveBeenCalled();
});
