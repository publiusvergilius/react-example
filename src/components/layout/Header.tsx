import React from "react"
import { Header as AntHeader } from "antd/es/layout/layout"
import { Link } from "react-router-dom"
import { Menu } from "antd"
import styles from "./Header.module.css"

export default function Header() {
	return (
		  	<AntHeader>
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
				<Menu.Item key='4'>
					<Link to="/posts" className={styles.menuItem}>Posts</ Link> 
				</Menu.Item>
				<Menu.Item key='5'>
					<Link to="/comments" className={styles.menuItem}>Comments</ Link> 
				</Menu.Item>
			</Menu>
	  	</AntHeader>

	)
}
