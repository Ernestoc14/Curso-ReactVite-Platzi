import './styles.css'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-red-300`}>
            <div className='flex justify-between items-center p-5'>
                <h2 className='text-xl font-medium'>My Order</h2>
                <XMarkIcon className='w-6 h-6 cursor-pointer'
                    onClick={() => context.closeCheckoutSideMenu()}
                />
            </div>
        </aside>
    )
}

export default CheckoutSideMenu