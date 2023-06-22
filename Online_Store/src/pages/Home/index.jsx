import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import { useState, useEffect } from "react"
import ProductDetails from "../../Components/ProductDetails"

function Home() {
	const [items, setItems] = useState(null)

	//Call to API 
	useEffect(() => {
		fetch('https://fakestoreapi.com/products/').then(response => response.json()).then(data => setItems(data))
	}, [])
	
	return (
		<Layout>
			<h1 className=" font-medium text-2xl my-6">Exclusive Products</h1>
			<input className="p-4 rounded-lg" placeholder="Search a Product" />
			<div className="grid justify-items-center gap-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-20 w-full max-w-screen-lg "> 
				{items?.map(item => (
					<Card
						key={item.id}
						data={item}
					/>
				))}
			</div>
			<ProductDetails/> 
		</Layout>
	)
}

export default Home
