import React from "react";
import { shallow } from "enzyme";
import SearchResult from "./SearchResult";
describe("SearchResult snapshot", () => {
    it("take snapshot", () => {
        const component = shallow(<SearchResult />);
        expect(component).toMatchSnapshot();
    });
});
