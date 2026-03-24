import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero and contact text on homepage', () => {
  window.scrollTo = jest.fn();
  window.history.pushState({}, 'Home', '/');
  render(<App />);

  expect(
    screen.getByRole('heading', {
      name: /Oprava praček, myček a sušiček v Praze/i
    })
  ).toBeInTheDocument();

  expect(
    screen.getByRole('heading', {
      name: /Zavolejte nám nebo odešlete poptávku/i
    })
  ).toBeInTheDocument();
});
