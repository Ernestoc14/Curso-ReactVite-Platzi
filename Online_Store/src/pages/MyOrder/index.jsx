import Layout from "../../Components/Layout";
import { useContext } from "react";

function MyOrder() {
    return (
        <Layout>
            My Order
            <div className='px-6 overflow-y-scroll flex-1'>
                {
                    context.myOrders?.slice(-1)[0].product.map(product => (
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