import './styles.css'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

const ProductDetails = () => {
    const context = useContext(ShoppingCartContext)

    return (
        <aside className={`${context.isProductDetailsOpen ? 'flex' : 'hidden'} product-details flex-col fixed right-0 border border-black rounded-lg bg-gray-900`}>
            <div className='flex justify-between items-center p-5'>
                <h2 className='text-xl font-medium'>Product Details</h2>
                <XMarkIcon className='w-6 h-6 cursor-pointer'
                    onClick={() => context.closeProductDetails()}
                />
            </div>
            <figure className='px-5'>
                <img
                    className='w-full h-full rounded-lg'
                    src={context.productToShow.image}
                    alt={context.productToShow.title}
                />
            </figure>
            <p className='flex flex-col m-3'>
                <span className='mt-3'>${context.productToShow.price}</span>
                <span className='mt-3'>{context.productToShow.title}</span>
                <span className='mt-3'>{context.productToShow.category}</span>
            </p>
        </aside>
    )
}

export default ProductDetails