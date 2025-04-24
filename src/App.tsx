import { Flex, Layout, Menu} from 'antd'
import { Link, Outlet } from 'react-router-dom'
import styles from "./App.module.css"

const {Header, Content, Footer} = Layout

export default function App() {

  return (
	  <Flex gap="middle" wrap>
	  <Layout className={styles.layout}>
	  	<Header>
			<Menu theme="light" mode='horizontal' className={styles.menu}>
				<Menu.Item key='1'>
					<Link to="/" className={styles.menuItem}>Home</ Link> 
				</ Menu.Item>
				<Menu.Item key='2'>
					<Link to="/playground" className={styles.menuItem}>Playground</ Link> 
				</ Menu.Item>
				<Menu.Item key='3'>
					<Link to="/users" className={styles.menuItem}>Users</ Link> 
				</Menu.Item>
			</Menu>
	  	</Header>
		<Content>
			<Outlet />
		</Content>
		<Footer> 
			Publius Vergilius Maro
		</ Footer> 
	  </Layout>
	  </Flex>
	)
}

