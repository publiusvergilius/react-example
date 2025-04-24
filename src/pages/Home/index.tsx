import { useState } from "react"

export default function Home() {

	
	return ( 
		<>
			<Login />
		</>
       )
}

type LoginProps = {}

export function Login () {
	const [isLogged, setIsLogged] = useState(false)
	const [username, setUsername] = useState(null)
	function handleLogin(){
		setIsLogged(true)
	}

	return (
		<>	
			{ isLogged ? <h1>{`Ola, ${username}!`}</h1> : null} 
			{ !isLogged ?
			<>
				<button onClick={handleLogin}>Login</button>
				<input value={username || ""} onChange={(v) => setUsername(v.target.value)}/>
			</>
			: null}
		</>
       )
}
