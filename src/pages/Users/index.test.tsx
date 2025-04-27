import { it, expect, describe, beforeEach } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { UserList } from './index'
import '@testing-library/jest-dom/vitest'

describe('Users', ()=>{

	beforeEach(()=> {
		cleanup();
	})

	it('should render no users when the users array is empty', () => {
		render(<UserList users={[]} />)

		const list = screen.queryByRole("list")
		expect(list).not.toBeInTheDocument()
	})

	it('should render users when the users array is has at least one user', () => {
		const users = ["jose", "marcos"];
		render(<UserList users={users} />)

		const list = screen.queryByRole("list")
		expect(list).toBeInTheDocument()

		const listItems = screen.getAllByRole('listitem')
		expect(listItems).toHaveLength(users.length)
		
		users.forEach(u => expect(screen.getByText(u)).toBeInTheDocument())
	})
})
