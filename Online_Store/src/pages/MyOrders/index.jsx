import Layout from "../../Components/Layout"
import OrdersCard from "../../Components/OrdersCard"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

function MyOrders() {
	const context = useContext(ShoppingCartContext)

	return (
		<Layout>
			<div className="flex w-80 justify-center items-center relative mb-6">
				<h1 className="font-medium text-2xl mt-6">My Orders</h1>
			</div>
			{
				context.myOrders.map((order, index) => (
					<Link key={index} to={`/my-orders/${index}`}>
						<OrdersCard
							index={index}
							totalPrice={order.totalPrice}
							totalProducts={order.totalProducts} />
					</Link>
				))
			}
		</Layout>
	)
}

export default MyOrders
