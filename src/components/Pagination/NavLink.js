import React from "react";
import { Link } from "gatsby";
const NavLink = props => {
    if (!props.test) {
        return (
            <Link to={props.url} id="navlink">
                {props.component}
            </Link>
        );
    } else {
        return <span>{props.component}</span>;
    }
};

export default NavLink;
