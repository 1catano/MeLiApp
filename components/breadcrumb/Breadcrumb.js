import React from "react";
import PropTypes from "prop-types";
import sty from "./breadcrumb.module.scss";

const Breadcrumb = (props) => {
    const { categories } = props;
    return (
        <div className={sty["ml-breadcrumb__main"]}>
            <nav className="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
                <ul>
                    {categories.map((category, idx) => (
                        <li key={idx}>
                            <a href="#">{category}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

Breadcrumb.protoTypes = {
    categories: PropTypes.arrayOf(PropTypes.string),
};

Breadcrumb.defaultProps = {
    categories: [],
};

export default Breadcrumb;
