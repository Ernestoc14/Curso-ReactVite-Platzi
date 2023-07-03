import React from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from "../../Context"
import { useContext } from "react"
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import ThemeToggleButton from '../ThemeToggleButton'
import { Th } from '@chakra-ui/react'

const NavItem = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = "underline"

    // Sign Out
    const singOut = localStorage.getItem('sign_out')
    const parsedSignOut = JSON.parse(singOut)
    const isUserSignOut = context.singOut || parsedSignOut

    // Account
    const account = localStorage.getItem('account')
    const parsedAccount = JSON.parse(account)
    // Has an account
    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
    const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

    const handleSignOut = () => {
        const stringifiedSignOut = JSON.stringify(true)
        localStorage.setItem('sign_out', stringifiedSignOut)
        context.setSignOut(true)
    }

    const renderView = () => {
        if (hasUserAnAccount && !isUserSignOut) {
            return (
                <ul className='flex justify-between items-center gap-4'>
                    <li className=' text-base'>
                        {parsedAccount?.email}
                    </li>
                    {pages.map(page => (
                        <li key={page.path}>
                            <NavLink to={page.path} className={({ isActive }) => `${isActive ? activeStyle : ""}`}>
                                {page.name}
                            </NavLink>
                        </li>
                    ))}
                    <li className='flex'>
                        <NavLink to='sign-in' className={({ isActive }) => `${isActive ? activeStyle : ""}`}
                            onClick={() => handleSignOut()}
                        >
                            Sign Out
                        </NavLink>
                    </li>
                    <li className='flex'>
                        <ShoppingCartIcon className='w-6 h-6 mr-3' />
                        {context.shoppingCart.length}
                    </li>
                    <ThemeToggleButton />
                </ul>
            )
        } else {
            return (
                <li className='flex'>
                    <NavLink to='sign-in' className={({ isActive }) => `${isActive ? activeStyle : ""}`}
                        onClick={() => handleSignOut()}
                    >
                        Sign In
                    </NavLink>
                </li>
            )
        }
    }
    const categories = [
        { name: "All", path: "/" },
        { name: "Men's Clothing", path: "/mens-clothes" },
        { name: "Women's Clothing", path: "/womens-clothes" },
        { name: "Electronics", path: "/electronics" },
        { name: "Jewelery", path: "/jewelery" },
        { name: "Others", path: "/others" }
    ]

    const pages = [
        { name: "My Account", path: "/my-account" },
        { name: "My Orders", path: "/my-orders" }
    ]

    return (
        <nav className='flex justify-between fixed z-10 w-full top-0 py-5 px-8 text-sm font-light '>
            <ul className='flex justify-between items-center gap-4'>
                <li className=' font-extrabold'>
                    <NavLink to={`${isUserSignOut ? '/sign-in' : '/'}`}
                    >
                        E-Shop
                    </NavLink>
                </li>
                {categories.map(category =>
                    <li key={category.path}>
                        <NavLink to={category.path} className={({ isActive }) => `${isActive ? activeStyle : ""}`}
                            onClick={() => context.setSearchByCategory(category.name)}
                        >
                            {category.name}
                        </NavLink>
                    </li>
                )}
            </ul>
            {renderView()}
        </nav>
    )
}

export default NavItem