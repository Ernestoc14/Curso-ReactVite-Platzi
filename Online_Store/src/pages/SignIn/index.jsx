import Layout from "../../Components/Layout"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { ShoppingCartContext } from "../../Context"

function SignIn() {
	const context = useContext(ShoppingCartContext)

	// Account
	const account = localStorage.getItem('account')
	const parsedAccount = JSON.parse(account)
	// Has an account
	const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
	const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
	const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

	// View for log in or sign up
	const [view, setView] = useState('user-info')

	const renderLogIn = () => {
		return (
			<>
				<div className="w-1/6 flex flex-col mt-20">
					<p>
						<span>Email:</span>
						<span>{parsedAccount?.email}</span>
					</p>
					<p className="mt-6 ">
						<span>Password:</span>
						<span>{parsedAccount?.password}</span>
					</p>
				</div>
				<div className="w-1/6 flex flex-col items-center mt-10">
					<Link to='/' className="bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-6 text-center" >
						<button
							disabled={!hasUserAnAccount}
						>
							Log In
						</button>
					</Link>
					<button className="font-light underline">Forgot my Password</button>
					<button
						className="border border-black disabled:text-black/40 disabled:border-black w-full rounded-lg py-3 mt-6 mb-2"
						disabled={hasUserAnAccount}
						onClick={() => setView('create-user-info')}
					>
						Sign Up
					</button>
				</div>
			</>
		)
	}

	const createNewUser = () => {
		// Create new view
		return(
			<>
			New User
			</>
		)
	}

	const renderView = () => view === 'create-user-info' ? createNewUser() : renderLogIn()

	return (
		<Layout>
			<h1 className="font-medium text-2xl my-6">Welcome to E-Shop</h1>
			{renderView()}
		</Layout>
	)
}

export default SignIn
