import Layout from "../../Components/Layout";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";


function MyOrder() {
    const context = useContext(ShoppingCartContext)
    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
    if(index === 'last') index = context.myOrders?.length - 1

    return (
        <Layout>
            <div className="flex w-80 justify-center items-center relative mb-6">
				<Link to='/my-orders' className="absolute left-0">
					<ChevronLeftIcon className="w-6 h-6 pr-2 text-white cursor-pointer"/>
				</Link>
				<h1>My Order</h1>
			</div>
            <div className=' flex flex-col w-80 py-2 '>
                {
                    context.myOrders?.[index]?.products.map(product => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageURL={product.image}
                            price={product.price}
                        />
                    ))
                }
            </div>
        </Layout>
    )
}

export default MyOrder