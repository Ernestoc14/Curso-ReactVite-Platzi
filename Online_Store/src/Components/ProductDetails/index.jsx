import './styles.css'
import { XMarkIcon } from '@heroicons/react/24/solid'

const ProductDetails = () => {
    return(
        <aside className="product-details flex flex-col fixed right-0 border border-black rounded-lg bg-gray-900 ">
            <div className='flex justify-between items-center p-5'>
                <h2 className='text-xl font-medium'>Product Details</h2>
                <XMarkIcon className='w-6 h-6'/>
            </div>
        </aside>
    )
}

export default ProductDetails