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
      name: /Domluvte si návštěvu technika/i
    })
  ).toBeInTheDocument();

  expect(screen.getByRole('link', { name: /Zavolat \+420 730 520 302/i })).toHaveAttribute(
    'href',
    'tel:+420730520302'
  );

  expect(screen.getByRole('form', { name: /Poptávka opravy spotřebiče/i })).toBeInTheDocument();
});
