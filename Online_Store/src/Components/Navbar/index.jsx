import React from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from "../../Context"
import { useContext } from "react"

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
        { name: "My Account", path: "/my-account" },
        { name: "My Orders", path: "/my-orders" },
        { name: "Sign In", path: "/sign-in" }
    ]

    const context = useContext(ShoppingCartContext)
    
    return (
        <nav className='flex justify-between fixed z-10 w-full top-0 py-5 px-8 text-sm font-light'>
            <ul className='flex justify-between items-center gap-4'>
                <li className=' font-extrabold'>
                    <NavLink to='/'>
                        E-Shop
                    </NavLink>
                </li>
                {categories.map(category =>
                    <li key={category.path}>
                        <NavLink to={category.path} className={({isActive}) => `${isActive ? activeStyle : ""}`}>
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
                    <svg className='w-6 h-6 mr-2'>
                        <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
                            <g id="Interface / Shopping_Cart_02"> <path id="Vector" d="M3 3H3.26835C3.74213 3 3.97943 3 4.17267 3.08548C4.34304 3.16084 4.48871 3.28218 4.59375 3.43604C4.71269 
                            3.61026 4.75564 3.8429 4.84137 4.30727L7.00004 16L17.4218 16C17.875 16 18.1023 16 18.29 15.9199C18.4559 15.8492 18.5989 15.7346 18.7051 15.5889C18.8252 15.4242 18.8761 
                            15.2037 18.9777 14.7631L18.9785 14.76L20.5477 7.95996L20.5481 7.95854C20.7023 7.29016 20.7796 6.95515 20.6947 6.69238C20.6202 6.46182 20.4635 6.26634 20.2556 6.14192C20.0184 6 
                            19.6758 6 18.9887 6H5.5M18 21C17.4477 21 17 20.5523 17 20C17 19.4477 17.4477 19 18 19C18.5523 19 19 19.4477 19 20C19 20.5523 18.5523 21 18 21ZM8 21C7.44772 21 7 20.5523 7 20C7 
                            19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20C9 20.5523 8.55228 21 8 21Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
                    </svg>
                    {context.itemsCounter}
                </li>
            </ul>
        </nav>
        )
}

export default NavItem