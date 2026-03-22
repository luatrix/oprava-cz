import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero and contact text on homepage', () => {
  window.history.pushState({}, 'Home', '/');
  render(<App />);

  expect(
    screen.getByRole('heading', {
      name: /Oprava praček, myček a sušiček v Praze/i
    })
  ).toBeInTheDocument();

  expect(screen.getByText(/Zavolejte nám nebo odešlete poptávku/i)).toBeInTheDocument();
});
