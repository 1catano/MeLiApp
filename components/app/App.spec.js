import React from "react";
import { shallow } from "enzyme";
import App from "./App";
describe("App snapshot", () => {
    it("take snapshot", () => {
        const component = shallow(<App />);
        expect(component).toMatchSnapshot();
    });
});
