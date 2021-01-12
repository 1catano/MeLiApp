import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { I18nextProvider } from "react-i18next";
import i18n from "../../translations/i18n";
import SearchBox from "../search-box/SearchBox";

import sty from "./app.module.scss";

const AppComponent = (props) => {
    const cssClass = `${sty["ml-app__main"]} ${props.fullHeight ? sty["ml-app__main--full-height"] : ""}`;
    const router = useRouter();
    const handleQuery = (event) => {
        if (event.keyCode == 13) {
            const query = event.target.value;
            router.push(`/items/?q=${query}`, undefined, { shallow: false });
        }
    };
    return (
        <I18nextProvider i18n={i18n}>
            <div className={cssClass}>
                <SearchBox handleQuery={handleQuery} />
                <div className="container">{props.children}</div>
            </div>
        </I18nextProvider>
    );
};

AppComponent.AppComponent = {
    children: PropTypes.node,
    fullHeight: PropTypes.bool,
};

AppComponent.defaultProps = {
    children: null,
    fullHeight: true,
};

export default AppComponent;
