import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import Home from './pages/Home'
import Users from './pages/Users/index.tsx'
import Playground from './pages/Playground/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
	  <BrowserRouter>
	  	<Routes>
			<Route path='/' element={<App />}>
				<Route index element={<Home />} />
				<Route path='/users' element={<Users />} />
				<Route path='/playground' element={<Playground />} />
			</Route > 
	  	</Routes>
	  </BrowserRouter>
  </StrictMode>,
)
