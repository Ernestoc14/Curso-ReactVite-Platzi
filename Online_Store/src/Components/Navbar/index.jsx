import React from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from "../../Context"
import { useContext } from "react"
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const NavItem = ({ children, to}) => {
    const activeStyle = "underline"

    const categories = [
        { name: "All", path: "/" },
        { name: "Men's Clothing", path: "/mens-clothes" },
        { name: "Women's Clothing", path: "/womens-clothes" },
        { name: "Electronics", path: "/electronics" },
        { name: "Jewelery", path: "/jewelery" },
        { name: "Others", path: "/others"}
    ]

    const pages = [
        { name: "My Account", path: "/my-account" },
        { name: "My Orders", path: "/my-orders" },
        { name: "Sign In", path: "/sign-in" }
    ]

    const context = useContext(ShoppingCartContext)

    return (
        <nav className='flex justify-between fixed z-10 w-full top-0 py-5 px-8 text-sm font-light'>
            <ul className='flex justify-between items-center gap-4'>
                <li className=' font-extrabold'>
                    <NavLink to='/'
                        onClick={() => context.setSearchByCategory()}
                    >
                        E-Shop
                    </NavLink>
                </li>
                {categories.map(category =>
                    <li key={category.path}>
                        <NavLink to={category.path} className={({isActive}) => `${isActive ? activeStyle : ""}`}
                            onClick={() => context.setSearchByCategory(category.name)}
                        >
                        {category.name}
                        
                        </NavLink>
                    </li>
                    )}
            </ul>
            <ul className='flex justify-between items-center gap-4'>
                {pages.map(page => (
                    <li key={page.path}>
                        <NavLink to={page.path}  className={({isActive}) => `${isActive ? activeStyle : ""}`}>
                            {page.name}
                        </NavLink>
                    </li>
                ))}
                <li className='flex'>
                    <ShoppingCartIcon className='w-6 h-6 mr-3'/>
                    {context.itemsCounter}
                </li>
            </ul>
        </nav>
        )
}

export default NavItem