import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from './Home';

describe('App component', () => {
  it('renders magnificent monkeys', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
  it('renders radical rhinos after button click', async () => {
    const user = userEvent.setup();

    render(<Home />);
    const button = screen.getByRole('button', { name: 'Test Button' });

    await user.click(button);

    expect(screen.getByRole('heading').textContent).toMatch(/Radical Rhinos/i);
  });
});
