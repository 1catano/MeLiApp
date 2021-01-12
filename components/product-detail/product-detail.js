import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import sty from "./product-detail.module.scss";

const ProductDetail = ({ productDetail, handleClick }) => {
    const { t } = useTranslation();
    const formatPrice = `$ ${productDetail?.price?.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;

    const decimalsToString = productDetail?.price?.decimals?.toString();
    const decimals = decimalsToString?.length === 1 ? `${decimalsToString}0` : decimalsToString;

    const soldQuantity = `${t(`global.${productDetail?.condition}`)} - ${t("global.sold", {
        sold_quantity: productDetail?.sold_quantity || 0,
    })}`;

    return (
        <section className={sty["ml-product-detail"]}>
            {productDetail.title ? (
                <>
                    <div className={sty["ml-product-detail__main"]}>
                        <img className={sty["ml-product-detail__picture"]} src={productDetail?.picture}></img>
                        <div className={sty["ml-product-detail__info"]}>
                            <label className={sty["ml-product-detail__info__label"]}>{soldQuantity}</label>
                            <p className={sty["ml-product-detail__info__title"]}>{productDetail?.title}</p>
                            <h1 className={sty["ml-product-detail__info__price"]}>
                                {formatPrice}
                                <span className={sty["ml-product-detail__info__price__decimals"]}>{decimals}</span>
                            </h1>
                            <button className="button is-link" onClick={handleClick}>
                                {t("global.buy")}
                            </button>
                        </div>
                    </div>
                    <div className={sty["ml-product-detail__description"]}>
                        <h1 className={sty["ml-product-detail__description__title"]}>
                            {t("global.title_description")}
                        </h1>
                        <p className={sty["ml-product-detail__description__paragraph"]}>{productDetail?.description}</p>
                    </div>
                </>
            ) : (
                <h1> {t("global.loading")}</h1>
            )}
        </section>
    );
};

ProductDetail.propTypes = {
    productDetail: PropTypes.shape({
        title: PropTypes.string,
        picture: PropTypes.string,
        condition: PropTypes.string,
        sold_quantity: PropTypes.number,
        description: PropTypes.string,
        price: PropTypes.shape({
            amount: PropTypes.number,
            currency: PropTypes.string,
            decimals: PropTypes.number,
        }),
    }),
    handleClick: PropTypes.func,
};

ProductDetail.defaultProps = {
    productDetail: {},
    handleClick: () => {},
};

export default ProductDetail;
