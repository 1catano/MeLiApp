import React from "react";
import { shallow } from "enzyme";
import Breadcrumb from "./Breadcrumb";
describe("Breadcrumb", () => {
    const categories = ["Electrodomesticos", "Televisores"];

    it("renders list-items", () => {
        const wrapper = shallow(<Breadcrumb categories={categories} />);
        expect(wrapper.find("ul")).toBeDefined();
        expect(wrapper.find("li")).toHaveLength(categories.length);
    });

    it("renders a list item", () => {
        const wrapper = shallow(<Breadcrumb categories={categories} />);

        // Check if an element in the Component exists
        expect(
            wrapper.contains(
                <li key="1">
                    <a href="#">Televisores</a>
                </li>,
            ),
        ).toBeTruthy();
    });
});
