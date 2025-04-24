export default function Users () {
	return <UserList users={["jose", "marcos"]}/>
}

export function UserList({users}: {users?: string[] | []}) {
	if (!users || users.length < 1) return <p>Users not found</p>;

	return (<ul>{users.map(u => <li><p>{u}</p></li>)}</ul>)
}


