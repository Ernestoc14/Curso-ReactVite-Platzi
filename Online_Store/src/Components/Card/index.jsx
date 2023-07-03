import { ShoppingCartContext } from "../../Context"
import { useContext } from "react"
import { CheckIcon, PlusIcon } from "@heroicons/react/24/solid"

const Card = (data) => {
    const context = useContext(ShoppingCartContext)

    const showProductDetails = (productDetails) => {
        context.setProductToShow(productDetails)
        context.openProductDetails()
    }

    const addProductToCart = (event, productData) => {
        event.stopPropagation()
        context.setItemsCounter(context.itemsCounter + 1)
        context.setShoppingCart([...context.shoppingCart, productData])
        context.openCheckoutSideMenu()
        context.closeProductDetails()
    }

    // Function to Render an Icon if the product was added to the shopping cart or not
    const renderCardIcon = (id) => {
        const isInCart = context.shoppingCart.filter(product => product.id === id).length > 0

        if (isInCart) {
            return (
                <button
                    className="absolute top-0 right-0 p-1 m-2 w-6 h-6 
                        flex justify-center items-center bg-gray-900 rounded-full"
                >
                    <CheckIcon className=" text-white" />
                </button>
            )
        } else {
            return(
            <button
                className="absolute top-0 right-0 p-1 m-2 w-6 h-6 
                    flex justify-center items-center bg-white rounded-full"
                onClick={(event) => addProductToCart(event, data.data)}
            >
                <PlusIcon />
            </button>
            )
        }
    }

return (
    <div
        className='bg-white text-black cursor-pointer w-56 h-60 rounded-lg border border-gray-900 '
        onClick={() => showProductDetails(data.data)}
    >
        <figure className='relative mb-2 w-full h-4/5'>
            <img className="w-full h-full object-cover rounded-lg" src={data?.data?.image} alt="" />
            <span className="absolute bottom-0 left-0 bg-slate-200 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data?.data?.category}</span>
            {renderCardIcon(data.data.id)}
        </figure>
        <section className='flex justify-between'>
            <p className="text-sm font-light truncate">{data?.data?.title}</p>
            <span className="text-lg font-medium">${data?.data?.price}</span>
        </section>
    </div>
)
}

export default Card