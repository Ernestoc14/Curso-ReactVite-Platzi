import './styles.css'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../utils'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.shoppingCart.filter(product => product.id != id)
        context.setShoppingCart(filteredProducts)
    }

    return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-red-300`}>
            <div className='flex justify-between items-center p-5'>
                <h2 className='text-xl font-medium'>My Order</h2>
                <XMarkIcon className='w-6 h-6 cursor-pointer'
                    onClick={() => context.closeCheckoutSideMenu()}
                />
            </div>
            <div className='px-6 overflow-y-scroll'>
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
                <p className='flex justify-between text-lg'>
                    <span className='font-semibold'>Total:</span>
                    <span className='font-bold '>${totalPrice(context.shoppingCart)}</span>
                </p>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu