import React from "react";
import PropTypes from "prop-types";

import shippingLogo from "../../assets/ic_shipping.png";
import styles from "./product-card.module.scss";

const ProductCard = (props) => {
    const { price, stateName, title, showDivider, isFreeShipping, picture, productId, handleRedirect } = props;
    const formatAmount = `$ ${price?.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
    return (
        <div
            className={styles.cardLayout}
            onClick={(event) => {
                event.preventDefault();
                handleRedirect(productId);
            }}
        >
            <article className={styles.card}>
                <img src={picture} className={styles.cardImage} />
                <div className={styles.cardContent}>
                    <div className={styles.cardHeader}>
                        <h3 className={styles.cardAmount}>
                            {formatAmount}
                            {isFreeShipping && <img src={shippingLogo} className={styles.freeShippingLogo} />}
                        </h3>
                        <label className={styles.cardLabel}>{stateName}</label>
                    </div>
                    <p className={styles.cardTitle}>{title}</p>
                </div>
            </article>
            {showDivider && <div className={styles.cardDivider} />}
        </div>
    );
};

ProductCard.propTypes = {
    productId: PropTypes.string.isRequired,
    stateName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    stateName: PropTypes.string,
    picture: PropTypes.string,
    isFreeShipping: PropTypes.bool,
    showDivider: PropTypes.bool,
    price: PropTypes.shape({
        currency: PropTypes.string,
        amount: PropTypes.number,
        decimals: PropTypes.number,
    }),
    handleRedirect: PropTypes.func,
};

ProductCard.defaultProps = {
    picture: undefined,
    isFreeShipping: false,
    showDivider: true,
    handleRedirect: () => {},
};

export default ProductCard;
