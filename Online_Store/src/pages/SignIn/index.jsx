import Layout from "../../Components/Layout"
import { Link, Navigate } from "react-router-dom"
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

	const handleSignIn = () => {
		const stringifiedSignOut = JSON.stringify(false)
		localStorage.setItem('sign_out', stringifiedSignOut)
		context.setSignOut(false)
		// Redirect to home
		return <Navigate replace to={'/'} />
	}

	const createAnAccount = () => {
		const formData = new FormData(form.current)
		const data = {
			name: formData.get('name'),
			email: formData.get('email'),
			password: formData.get('password')
		}
		// Create Account
		const stringifiedAccount = JSON.stringify(data)
		localStorage.setItem('account', stringifiedAccount)
		context.setAccount(data)
		// Sign In
		handleSignIn()
	}

	const renderLogIn = () => {
		return (
			<div className=" w-full flex flex-col items-center">
				<div className="w-1/6 flex flex-col mt-20">
					<p>
						<span>Email:</span>
						<span> {parsedAccount?.email}</span>
					</p>
					<p className="mt-6 ">
						<span>Password:</span>
						<span> {parsedAccount?.password}</span>
					</p>
				</div>
				<div className="w-1/6 flex flex-col items-center mt-10">
					<Link to='/' className="bg-black text-white w-full rounded-lg py-3 mt-4 mb-6 text-center" >
						<button
							onClick={() => handleSignIn()}
							className=" disabled:text-white/40"
							disabled={!hasUserAnAccount}
						>
							Log In
						</button>
					</Link>
					<button className="font-light underline">Forgot my Password</button>
					<button
						className="border border-slate-200 disabled:border-black disabled:text-white/30 disabled:bg-black w-full rounded-lg py-3 mt-6 mb-2"
						disabled={hasUserAnAccount}
						onClick={() => setView('create-user-info')}
					>
						Sign Up
					</button>
				</div>
			</div>
		)
	}

	const renderCreateUserInfo = () => {
		return (
			<form ref={form} className="flex flex-col gap-4 w-80">
				<div className="flex flex-col gap-1">
					<label htmlFor="name">Your name: </label>
					<input
						type="text"
						id="name"
						name="name"
						defaultValue={parsedAccount?.name}
						placeholder="Name"
						className="rounded-lg border border-black placeholder:text-white/80 placeholder:font-light focus:outline py-2 px-4"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<label htmlFor="email">Your Email: </label>
					<input
						type="text"
						id="email"
						name="email"
						defaultValue={parsedAccount?.email}
						placeholder="example@hotmail.com"
						className="rounded-lg border border-black placeholder: font-light placeholder:text-white/80 focus: outline-none py-2 px-4"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<label htmlFor="password">Your password: </label>
					<input
						type="text"
						id="password"
						name="password"
						defaultValue={parsedAccount?.password}
						placeholder="*******"
						className="rounded-lg border border-black placeholder:font-light placeholder:text-white/80 focus:outline-none py-2 px-4 "
					/>
				</div>
				<Link to="/">
					<button
						className=" w-full bg-black py-3 rounded-lg black text-white"
						onClick={() => createAnAccount()}>
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
