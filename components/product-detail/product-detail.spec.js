import React from "react";
import { shallow } from "enzyme";
import ProductDetail from "./product-detail";
describe("ProductDetail", () => {
    const spy = jest.fn();
    const item = {
        productId: "MLA840192565",
        title: "Adaptador iPhone Auriculares Lightning Plug 3.5mm Ultimo Ios",
        condition: "new",
        sold_quantity: "233",
        description: "Product description",
        picture: "http://http2.mlstatic.com/D_624892-MLA31351946715_072019-I.jpg",
        price: {
            currency: "ARS",
            amount: 599,
            decimals: 6,
        },
    };

    it("render detail info", () => {
        const wrapper = shallow(<ProductDetail productDetail={item} />);
        expect(wrapper.find(".ml-product-detail__info")).toBeDefined();
    });

    it("verify decimals", () => {
        const wrapper = shallow(<ProductDetail productDetail={item} />);
        expect(wrapper.find(".ml-product-detail__info__price__decimals").get(0).props.children).toEqual("60");
    });

    it("verify sold quantity", () => {
        const wrapper = shallow(<ProductDetail productDetail={item} handleClick={spy} />);
        const buyButton = wrapper.find(".is-link");
        buyButton.simulate("click", { preventDefault: () => {} });
        expect(spy).toHaveBeenCalled();
    });
});
