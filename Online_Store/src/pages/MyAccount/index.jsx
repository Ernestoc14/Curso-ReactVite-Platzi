import Layout from "../../Components/Layout"
import { useState, useContext, useRef } from 'react'
import { ShoppingCartContext } from "../../Context"

function MyAccount() {
	const context = useContext(ShoppingCartContext)
	const [view, setView] = useState('user-info')
	const account = localStorage.getItem('account')
	const parsedAccount = JSON.parse(account)
	const form = useRef(null)

	const editAccount = () => {
		const formData = new FormData(form.current)
		const data = {
			name: formData.get('name'),
			email: formData.get('email'),
			password: formData.get('password')
		}
		// Update Account
		const stringifiedAccount = JSON.stringify(data)
		localStorage.setItem('account', stringifiedAccount)
		context.setAccount(data)
	}

	const renderUserInfo = () => {
		return (
			<div className=" w-80 flex flex-col items-center">
				<div className="w-full flex flex-col">
					<p>
						<span>Name:</span>
						<span> {parsedAccount?.name}</span>
					</p>
					<p className="mt-6 ">
						<span>Email:</span>
						<span> {parsedAccount?.email}</span>
					</p>
				</div>
				<button
					className="w-full bg-slate-700 border border-white py-3 rounded-lg black text-white mt-14"
					onClick={() => setView('edit-user-info')}
				>
					Edita
				</button>
			</div>
		)
	}

	const renderEditUserInfo = () => {
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
				<button
					className=" w-full py-3 rounded-lg  bg-slate-700 border border-white mt-14"
					onClick={() => setView('user-info')}>
					Edit
				</button>
			</form>
		)
	}

	const renderView = () => view === 'edit-user-info' ? renderEditUserInfo() : renderUserInfo()

	return (
		<Layout>
			<h1 className="font-medium text-xl text-center mb-8 mt-16 w-80">My Accounnt</h1>
			{renderView()}
		</Layout>
	)
}

export default MyAccount
