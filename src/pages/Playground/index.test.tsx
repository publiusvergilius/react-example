import { it, expect, describe, beforeEach } from 'vitest';
import { cleanup, getByText, render, screen } from '@testing-library/react';
import  Playground  from './index';
import '@testing-library/jest-dom/vitest';
import { userEvent } from '@testing-library/user-event';

describe('User Events', ()=>{

	beforeEach(()=> {
		cleanup();
	})

	it('should render the sad face', () => {
		render(<Playground />);

		const face = screen.getByTestId('face');
		expect(face).toBeInTheDocument();
		expect(face).toHaveTextContent('😢');

		const checkbox = screen.getByRole('checkbox');
		expect(checkbox).toBeInTheDocument();
		expect(checkbox).not.toBeChecked();
	});

	it('should render the happy face when the checkbox is cheked', async () => {
		render(<Playground />);

		const checkbox = screen.getByRole('checkbox');
		const user = userEvent.setup();
		await user.click(checkbox);

		const face = screen.getByTestId('face');
		expect(face).toBeInTheDocument();
		expect(face).toHaveTextContent('😁');

	});

	it('should show the modal when the button is clicked', async () => {
		render(<Playground />);

		const button = screen.getByTestId('open-button');
		const user = userEvent.setup();
		await user.click(button);

		const modal = screen.getByTestId('test-modal')
		expect(modal).toBeInTheDocument()

	});

})
