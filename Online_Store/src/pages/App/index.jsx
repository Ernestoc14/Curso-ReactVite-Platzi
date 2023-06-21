import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrders from '../MyOrders'
import MyOrder from '../MyOrder'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Components/Navbar'
import './App.css'
import { ShoppingCartProvider } from '../../Context'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'

const AppRoutes = () => {
	const routes = useRoutes([
		{ path: '/', element: <Home /> },
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
