import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders name and main sections', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: /mathias paradza/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /contact information/i })).toBeInTheDocument();
});

test('images load from the public URL so they work on GitHub Pages', () => {
  render(<App />);
  const photo = screen.getByAltText(/mathias paradza/i) as HTMLImageElement;
  expect(photo.getAttribute('src')).toBe(`${process.env.PUBLIC_URL}/images/profile.jpg`);
});
