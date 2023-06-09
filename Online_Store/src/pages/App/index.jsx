import { useRoutes, BrowserRouter} from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import './App.css'

const AppRoutes = () =>{
  const routes = useRoutes([
    { path: '/', element: <Home />,
    },
    { path: '/my-account', element: <MyAccount/>,
    },
    { path: '/my-orders', element: <MyOrders />,
    },
    { path: '/*', element: <NotFound />,
    },
    { path: '/sign-in', element: <SignIn />,
    }
  ])
  return routes
}

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />   
    </BrowserRouter>
  )
}

export default App