import Layout from "../../Components/Layout"
import Card from "../../Components/Card"

function Home() {
	return (
		<Layout>
			<h1>Exclusive Products</h1>
			<input className="p-4 rounded-lg mt-3" placeholder="Search a Product" />
			<Card />
		</Layout>
	)
}

export default Home
