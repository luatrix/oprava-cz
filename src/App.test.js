import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders hero and contact text on homepage', () => {
  window.scrollTo = jest.fn();
  Element.prototype.scrollIntoView = jest.fn();
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

  expect(screen.getAllByRole('link', { name: /^Zavolat$/i })[0]).toHaveAttribute(
    'href',
    'tel:+420730520302'
  );

  const orderLink = screen.getByRole('link', { name: /Objednat opravu/i });
  expect(orderLink).toHaveAttribute('href', '#contact');
  fireEvent.click(orderLink);
  expect(Element.prototype.scrollIntoView).toHaveBeenCalledWith({
    behavior: 'smooth',
    block: 'start'
  });

  expect(screen.getByRole('form', { name: /Poptávka opravy spotřebiče/i })).toBeInTheDocument();
});

test('renders all three hero actions on a service page', () => {
  window.scrollTo = jest.fn();
  Element.prototype.scrollIntoView = jest.fn();
  window.history.pushState({}, 'Service', '/oprava-pracek-praha');
  render(<App />);

  expect(screen.getByRole('link', { name: /Objednat opravu/i })).toHaveAttribute('href', '#contact');
  expect(screen.getAllByRole('link', { name: /^Zavolat$/i })[0]).toHaveAttribute('href', 'tel:+420730520302');
  expect(screen.getAllByRole('link', { name: /Napsat na WhatsApp/i })[0]).toHaveAttribute(
    'href',
    expect.stringContaining('https://wa.me/420730520302')
  );
});
