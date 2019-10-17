import React from 'react';
import { Link } from 'gatsby';

const NavLink = (props) => {
    const { url, component, test } = props;
    if (!test) {
        return (
            <Link to={url} id="navlink">
                {component}
            </Link>
        );
    }
    return <span>{component}</span>;
};

export default NavLink;
