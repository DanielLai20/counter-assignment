import {render, screen, fireEvent} from '@testing-library/react'
import Counter from '../components/Counter'

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const message = screen.getByText(/Counter/i);
  expect(message).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const initialCount = screen.getByText(/0/i);
  expect(initialCount).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  const button = screen.getByText('+');
  const count = screen.getByTestId("count");
  fireEvent.click(button);
  const newCount = screen.getByText(/1/i);
  expect(newCount).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  const button = screen.getByText('-');
  const count = screen.getByText(/0/i);
  fireEvent.click(button)
  const newCount = screen.getByText(/-1/i);
  expect(newCount).toBeInTheDocument();
});
