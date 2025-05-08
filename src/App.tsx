import { Flex, Layout, Menu} from 'antd'
import { Outlet } from 'react-router-dom'
import styles from "./App.module.css"
import Header from './components/layout/Header'

const {Content, Footer} = Layout

export default function App() {

  return (
	  <Flex gap="middle" wrap>
	  <Layout className={styles.layout}>
	  		<Header />
			<Content>
			<Outlet />
		</Content>
		{/*
		<Footer> 
			Publius Vergilius Maro
		</ Footer> 
		*/}
	  </Layout>
	  </Flex>
	)
}

