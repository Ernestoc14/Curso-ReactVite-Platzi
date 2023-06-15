import { ShoppingCartContext } from "../../Context"
import { useContext } from "react"
import { PlusIcon } from "@heroicons/react/24/solid"

const Card = ({category, title, price, image}) => {
    const context = useContext(ShoppingCartContext)
    
    return (
        <div className='bg-white text-black cursor-pointer w-56 h-60 rounded-lg '>
            <figure className='relative mb-2 w-full h-4/5'>
                <button 
                    className="absolute top-0 right-0 p-1 m-2 w-6 h-6 
                    flex justify-center items-center bg-white rounded-full"
                    onClick={() => context.setItemsCounter(context.itemsCounter+1)}
                >
                    <PlusIcon/>
                </button>
                <img className="w-full h-full object-cover rounded-lg" src={image} alt="" />
                <span className="absolute bottom-0 left-0 bg-slate-200 rounded-lg text-black text-xs m-2 px-3 py-0.5">{category}</span>
            </figure>
            <section className='flex justify-between'>
                <p className="text-sm font-light">{title}</p>
                <span className="text-lg font-medium">${price}</span>
            </section>
        </div>
    )
}

export default Card