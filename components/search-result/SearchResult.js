import React from "react";
import PropTypes from "prop-types";
import ProductCard from "../product-card/ProductCard";
import { useRouter } from "next/router";
import sty from "./search-result.module.scss";

const SearchResult = (props) => {
    const { items } = props;
    const router = useRouter();
    const handleRedirect = (id) => {
        router.push(`items/${id}`);
    };
    return (
        <section className={sty["ml-search-result__main"]}>
            {items.map((item, idx) => {
                return (
                    <ProductCard
                        productId={item.id}
                        price={item.price}
                        title={item.title}
                        picture={item.picture}
                        showDivider={items.length - 1 > idx}
                        stateName={item.state_name}
                        isFreeShipping={item.free_shipping}
                        handleRedirect={handleRedirect}
                    />
                );
            })}
        </section>
    );
};

SearchResult.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            price: PropTypes.shape({
                currency: PropTypes.string,
                amount: PropTypes.number,
                decimals: PropTypes.number,
            }),
            title: PropTypes.string,
            picture: PropTypes.string,
            state_name: PropTypes.string,
            free_shipping: PropTypes.bool,
        }),
    ),
};

SearchResult.defaultProps = {
    items: [],
};

export default SearchResult;
