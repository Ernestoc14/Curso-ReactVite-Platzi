import Layout from "../../Components/Layout";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";


function MyOrder() {
    const context = useContext(ShoppingCartContext)

    return (
        <Layout>
            My Order
            <div className=' flex flex-col w-80 py-6 '>
                {
                    context.myOrders?.slice(-1)[0].products.map(product => (
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
