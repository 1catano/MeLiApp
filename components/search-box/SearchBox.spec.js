import React from "react";
import { shallow } from "enzyme";
import SearchBox from "./SearchBox";
describe("SearchBox", () => {
    const spy = jest.fn();

    it("verify structure", () => {
        const wrapper = shallow(<SearchBox handleQuery={spy} />);
        expect(wrapper.find(".header")).toBeDefined();
        expect(wrapper.find(".searchBar")).toBeDefined();
        expect(wrapper.find(".logo")).toBeDefined();
        expect(wrapper.find(".inputContainer")).toBeDefined();
    });

    it("search from input simulate", () => {
        const wrapper = shallow(<SearchBox handleQuery={spy} />);
        const inputSearch = wrapper.find(".input");
        inputSearch.simulate("keyDown", { keyCode: 13, which: 13, key: "Enter" });
        expect(spy).toHaveBeenCalled();
    });

    it("search from button simulate", () => {
        const wrapper = shallow(<SearchBox handleQuery={spy} />);
        const searchButton = wrapper.find(".button");
        searchButton.simulate("click", { preventDefault: () => {} });
        expect(spy).toHaveBeenCalled();
    });
});
