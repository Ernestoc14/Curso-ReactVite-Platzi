import Layout from "../../Components/Layout"
import { Link } from "react-router-dom"
import { useContext, useState, useRef } from "react"
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

	const form = useRef(null)

	const createAnAccount = () => {
		const formData = new FormData(form.current)
		const data = {
			name: formData.get('name'),
			email: formData.get('email'),
			password: formData.get('password')
		}
	}

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

	const renderCreateUserInfo = () => {
		return(
				<form rel={form} className="flex flex-col gap-4 w-80">
					<div className="flex flex-col gap-1">
						<label htmlFor="name" className="font-light text-sm">Your name:</label>
						<input type="text" 
							id="name"
							name="name"
							defaultValue={parsedAccount?.name}
							placeholder="Name"
							className="rounded-lg border border-black placeholder:text-sm placeholder: 
								text-black/40 placeholder:font-light focus:outline py-2 px-4"
						/>
					</div>
					<div className="flex flex-col gap-1">
						<label htmlFor="email">Your E-mail: </label>
						<input type="text"  
							id="email"
							name="email"
							defaultValue={parsedAccount?.email}
							placeholder="example@hotmail.com"
							className="rounded-lg border border-black placeholder: font-light placeholder: text-sm placeholder:text-black/40 focus: outline-none py-2 px-4"
						/>
					</div>
					<div  className="flex flex-col gap-1">
						<label htmlFor="password">Your password:</label>
						<input type="text" 
							id="password"
							name="password"
							defaultValue={parsedAccount?.password}
							placeholder="*******"
							className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4 "
						/>
					</div>
					<Link to="/">
					<button className="py-3 rounded-lg black text-white" onClick={createAnAccount()}>
						Create User
					</button>
					</Link>
				</form>
			)
	}

	const renderView = () => view === 'create-user-info' ? renderCreateUserInfo() : renderLogIn()

	return (
		<Layout>
			<h1 className="font-medium text-2xl my-6">Welcome to E-Shop</h1>
			{renderView()}
		</Layout>
	)
}

export default SignIn
