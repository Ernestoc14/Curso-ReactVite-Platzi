import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrders from '../MyOrders'
import MyOrder from '../MyOrder'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Components/Navbar'
import './App.css'
import { ShoppingCartProvider, initializeLocalStorage, ShoppingCartContext } from '../../Context'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'

const AppRoutes = () => {
	const context = useContext(ShoppingCartContext)
	// Account 
	const account = localStorage.getItem('account')
	const parsedAccount = JSON.parse(account)
	// Sign Out
	const signOut = localStorage.getItem('signOut')
	const parsedSignOut = JSON.parse(signOut)
	// Has an account
	const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
	const noAccountInLocalState = Object.keys(context.account).length === 0 
	const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState
	const isUserSignOut = context.signOut || parsedSignOut



	const routes = useRoutes([
		{ path: '/', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'}/> },
		{ path: '/clothes', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'}/>},
		{ path: '/electronics', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sing-in'}/>},
		{ path: '/furniture', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'}/>},
		{ path: '/toys', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'}/>},
		{ path: '/others', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sing-in'}/>},
		{ path: '/my-account', element: <MyAccount /> },
		{ path: '/my-orders', element: <MyOrders /> },
		{ path: '/my-orders/last', element: <MyOrder /> },
		{ path: '/my-orders/:id', element: <MyOrder /> },
		{ path: '/*', element: <NotFound /> },
		{ path: '/sign-in', element: <SignIn /> },
	])
	return routes
}

const App = () => {
	initializeLocalStorage()
	return (
		<ShoppingCartProvider>
			<BrowserRouter>
				<Navbar />
				<AppRoutes />
				<CheckoutSideMenu/>
			</BrowserRouter>
		</ShoppingCartProvider>
	)
}

export default App
