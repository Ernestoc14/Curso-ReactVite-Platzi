import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetails from "../../Components/ProductDetails"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { Loader } from "../../Components/Loader"

function Home() {

	const context = useContext(ShoppingCartContext)
	const { loading } = context

	const renderView = () => {
		if (context.filteredItems?.length > 0) {
			return (
				context.filteredItems?.map((item) => (
					<Card key={item.id} data={item} />
				))
			)
		} else {
			return (
				<div className="flex justify-center items-center">
					<p>
						We don't have that product.
						Sorry!
					</p>
				</div>
			)
		}

	}


	return (
		<Layout>
			<div className="flex items-center justify-center relative w-80 mb-4">
				<h1 className=" font-medium text-2xl my-6">Exclusive Products</h1>
			</div>
			<input className="p-4 border border-black rounded-lg w-80 mb-20 focus:outline-none"
				type="text"
				placeholder="Search a Product"
				onChange={(event) => {
					context.setSearchByTitle(event.target.value)
				}}
			/>
			<div className="grid justify-center items-center gap-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg ">
				{renderView()}
			</div>
			<ProductDetails />
		</Layout>
	)
}

export default Home
