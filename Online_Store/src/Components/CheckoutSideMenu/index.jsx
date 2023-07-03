import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../utils'
import './styles.css'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.shoppingCart.filter(product => product.id != id)
        context.setShoppingCart(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.02.23',
            products: context.shoppingCart,
            totalProducts: context.shoppingCart.length,
            totalPrice: totalPrice(context.shoppingCart)
        }
        context.setMyOrders([...context.myOrders, orderToAdd])
        context.setShoppingCart([])
        context.closeCheckoutSideMenu()
        context.setSearchByTitle(null)
    }

    return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-red-300`}>
            <div className='flex justify-between items-center p-5'>
                <h2 className='text-xl font-medium'>My Order</h2>
                <XMarkIcon className='w-6 h-6 cursor-pointer'
                    onClick={() => context.closeCheckoutSideMenu()}
                />
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
                {context.shoppingCart.map(product => (
                    <OrderCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        imageURL={product.image}
                        price={product.price}
                        handleDelete={handleDelete}
                    />
                ))
                }
            </div>
            <div className='px-6'>
                <p className='flex justify-between text-lg mb-4'>
                    <span className='font-semibold'>Total:</span>
                    <span className='font-bold '>${totalPrice(context.shoppingCart)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button onClick={() => handleCheckout()}
                        className='w-full p-6 bg-black text-white rounded-lg mb-6'>
                        Checkout
                    </button>
                </Link>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu