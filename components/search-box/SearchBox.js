import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import styles from "./search-box.module.scss";

import LogoMeLi from "../../assets/Logo.png";

const SearchBox = ({ handleQuery }) => {
    const { t } = useTranslation();
    return (
        <header className={styles.headerLayout}>
            <div className={`container ${styles.header}`}>
                <nav className={`navbar ${styles.searchBar}`}>
                    <Link href="/" className={styles.figure}>
                        <img className={styles.logo} alt="Logo" src={LogoMeLi} />
                    </Link>
                    <div className={`field has-addons ${styles.inputContainer}`}>
                        <input
                            className="input"
                            type="text"
                            placeholder={t("global.placeholder")}
                            onKeyDown={handleQuery}
                        ></input>
                        <div className="control">
                            <button className="button is-light" onClick={handleQuery}>
                                <span className="icon is-small">
                                    <i className="fas fa-search"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

SearchBox.propTypes = {
    handleQuery: PropTypes.func,
};

SearchBox.defaultProps = {
    handleQuery: () => {},
};

export default SearchBox;
