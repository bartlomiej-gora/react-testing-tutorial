import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from './App';

test('button has correct initial color', () => {
  render(<App />);

  const button = screen.getByRole('button', {
    name: 'Change to blue',
  });

  expect(button).toHaveStyle({
    backgroundColor: 'red',
  });

  fireEvent.click(button);

  expect(button).toHaveStyle({
    backgroundColor: 'blue',
  });

  expect(button.textContent).toBe('Change to red');
});

test('button turns blue when clicked', () => {
  render(<App />);

  const button = screen.getByRole('button', {
    name: 'Change to blue',
  });

  fireEvent.click(button);

  expect(button).toHaveStyle({
    backgroundColor: 'blue',
  });

  expect(button.textContent).toBe('Change to red');
});

test('initial conditions', () => {
  render(<App />);

  const button = screen.getByRole('button', {
    name: 'Change to blue',
  });
  expect(button).toBeEnabled();

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('Button should be changed on Checkbox check', () => {
  render(<App />);

  const button = screen.getByRole('button', {
    name: 'Change to blue',
  });

  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  fireEvent.click(checkbox);
  expect(button).not.toBeEnabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});

test('Button Should be changed after enabled or disabled', () => {
  render(<App />);

  const button = screen.getByRole('button', {
    name: 'Change to blue',
  });

  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  fireEvent.click(checkbox);
  expect(button).not.toBeEnabled();
  expect(button).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
  expect(button).toHaveStyle({ backgroundColor: 'red' });

  fireEvent.click(button);
  expect(button).toBeEnabled();
  expect(button).toHaveStyle({ backgroundColor: 'blue' });

  fireEvent.click(checkbox);
  expect(button).not.toBeEnabled();
  expect(button).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
  expect(button).toHaveStyle({ backgroundColor: 'blue' });
});

describe('spaces before camel-case capital leters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  test('Works for one capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('Works for multiple capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
