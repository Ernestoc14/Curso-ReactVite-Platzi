import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import { useState, useEffect } from "react"

function Home() {
	const [items, setItems] = useState(null)
	
	//Call to API 
	useEffect(() => {
		fetch('https://api.escuelajs.co/api/v1/products').then(response => console.log(response.json()))
	}, [])
	return (
		<Layout>
			<h1>Exclusive Products</h1>
			<input className="p-4 rounded-lg mt-3" placeholder="Search a Product" />
			<Card />
		</Layout>
	)
}

export default Home
