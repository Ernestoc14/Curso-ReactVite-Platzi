import Layout from "../../Components/Layout"
import { Link } from "react-router-dom"

function SignIn() {
	return (
		<Layout>
			<h1 className="font-medium text-2xl my-6">Welcome to E-Shop</h1>
			<div className="w-1/6 flex flex-col mt-20">
				<p>
					<span>Email:</span>
					<span>Username@hotmail.com</span>
				</p>
				<p className="mt-6 ">
					<span>Password:</span>
					<span>*****</span>
				</p>
			</div>
			<div className="w-1/6 flex flex-col items-center mt-10">
				<Link to='/' className="bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-6 text-center" >
					<button
						
					>
						Log In
					</button>
				</Link>
				<button className="font-light underline">Forgot my Password</button>
				<button
					className="border border-black disabled:text-black/40 disabled:border-black w-full rounded-lg py-3 mt-6 mb-2"
				>
					Sign Up
				</button>
			</div>
		</Layout>
	)
}

export default SignIn
