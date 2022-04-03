import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <CustomLink className='home' to='/home'>Home</CustomLink>
            <CustomLink to='/reviews'>Review</CustomLink>
            <CustomLink to='/dashboard'>Dashboard</CustomLink>
            <CustomLink to='/blogs'>Blogs</CustomLink>
        </nav>
    );
};
function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ textDecoration: match ? "underline #1dbf73" : "none" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}
export default Header;