import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import { ChackraProvider } from '@chakra-ui/react'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ChackraProvider>
			<App />
		</ChackraProvider>
	</React.StrictMode>
)
