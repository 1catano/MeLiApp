import React from "react";
import { shallow } from "enzyme";
import ProductCard from "./ProductCard";
describe("ProductCard", () => {
    const spy = jest.fn();
    const product = {
        productId: "MLA840192565",
        title: "Adaptador iPhone Auriculares Lightning Plug 3.5mm Ultimo Ios",
        price: {
            currency: "ARS",
            amount: 599,
            decimals: 0,
        },
        picture: "http://http2.mlstatic.com/D_624892-MLA31351946715_072019-I.jpg",
        condition: "new",
        isFreeShipping: false,
        stateName: "Capital Federal",
        showDivider: true,
        handleRedirect: spy,
    };

    it("render amount and divider", () => {
        const wrapper = shallow(<ProductCard {...product} />);
        expect(wrapper.find(".cardAmount")).toBeDefined();
        expect(wrapper.find(".cardDivider")).toBeDefined();
    });

    it("render the state name", () => {
        const wrapper = shallow(<ProductCard {...product} />);
        expect(wrapper.find(".cardLabel").get(0).props.children).toEqual("Capital Federal");
    });

    it("simulate click on card", () => {
        const wrapper = shallow(<ProductCard {...product} />);
        const cardLayout = wrapper.find(".cardLayout");
        cardLayout.simulate("click", { preventDefault: () => {} });
        expect(spy).toHaveBeenCalled();
    });
});
