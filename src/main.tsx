import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import Home from './pages/Home'
import Users from './pages/Users/index.tsx'
import Playground from './pages/Playground/index.tsx'
import Posts from './pages/Posts/index.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Comments from './pages/Commments/index.tsx'

const queryClient = new QueryClient()
createRoot(document.getElementById('root')!).render(

  <StrictMode>
  <QueryClientProvider client={queryClient}>
	  <BrowserRouter>
	  	<Routes>
			<Route path='/' element={<App />}>
				<Route index element={<Home />} />
				<Route path='/users' element={<Users />} />
				<Route path='/playground' element={<Playground />} />
				<Route path='/posts' element={<Posts />} />
				<Route path='/comments' element={<Comments />} />
			</Route > 
	  	</Routes>
	  </BrowserRouter>
  </QueryClientProvider>
  </StrictMode>,
)
