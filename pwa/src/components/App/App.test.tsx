import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders drop field', () => {
  render(<App />);
  const textElement = screen.getByText(/Click or drag the XML file to this area to upload./i);
  expect(textElement).toBeInTheDocument();
});
