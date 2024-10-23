import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login2 from './Login2';

test('renders login form', () => {
  render(<Login2 />);
  
  // Get the heading (can also use getByText if it's more appropriate)
  const heading = screen.getByRole('heading', { name: /login/i });
  
  // Get the email input
  const emailInput = screen.getByPlaceholderText(/email/i);
  
  // Get the login button
  const loginButton = screen.getByRole('button', { name: /login/i });
  
  // Assertions
  expect(heading).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
});