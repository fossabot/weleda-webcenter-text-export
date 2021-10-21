import React from 'react';
import { render, screen } from '@testing-library/react';
import FileDrop from './FileDrop';

test('renders drop field', () => {
  render(<FileDrop />);
  const textElement = screen.getByText(/Click or drag the XML file to this area to upload./i);
  expect(textElement).toBeInTheDocument();
});
