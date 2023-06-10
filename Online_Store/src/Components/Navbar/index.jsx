import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = ({ children, to}) => {
    const activeStyle = "underline"

    const categories = [
        { name: "All", path: "/" },
        { name: "Clothes", path: "/clothes" },
        { name: "Electronics", path: "/electronics" },
        { name: "Furniture", path: "/furniture" },
        { name: "Toys", path: "/toys"},
        { name: "Others", path: "/others"}
    ]

    const pages = [
        { name: "Home", path: "/" },
        { name: "My Account", path: "/my-account" },
        { name: "My Orders", path: "/my-orders" },
        { name: "Sign In", path: "/sign-in" }
    ]

    return (
        <nav className=''>
            <ul className='flex justify-between'>
                {children}
                {categories.map((category) => (
                    <li key={category.path}>
                        <NavLink to={category.path} className={({isActive})=>`${isActive ? activeStyle : ""}`} >
                            {category.name}
                        </NavLink>
                    </li>
                ))}
                {pages.map((page) => (
                    <li key={page.path}>
                        <NavLink to={page.path}  className={({isActive}) => `${isActive ? activeStyle : ""}`}>
                            {page.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
        )
}

export default NavItem