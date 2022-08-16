import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokemon.js />', () => {
  test('Navega até os detalhes', () => {
    renderWithRouter(<App />);

    const pkmType = screen.getByRole(
      'button',
      { name: 'Bug' },
    );
    userEvent.click(pkmType);

    const details = screen.getByRole(
      'link',
      { name: 'More details' },
    );
    userEvent.click(details);

    const pkm = screen.getByText('Caterpie');

    expect(pkm).toBeInTheDocument();
  });

  test('A imagem do pokemon possui o src e alt correto', () => {
    renderWithRouter(<App />);

    const pkmType = screen.getByRole(
      'button',
      { name: 'Bug' },
    );
    userEvent.click(pkmType);

    const details = screen.getByRole(
      'link',
      { name: 'More details' },
    );
    userEvent.click(details);

    const img = screen.getAllByRole('img');

    expect(img[0].src).toBe('https://cdn2.bulbagarden.net/upload/8/83/Spr_5b_010.png');
    expect(img[0]).toHaveAttribute('alt', 'Caterpie sprite');
  });

  test('A imagem de favorito tem src e alt correto', () => {
    renderWithRouter(<App />);

    const pkmType = screen.getByRole(
      'button',
      { name: 'Bug' },
    );
    userEvent.click(pkmType);

    const details = screen.getByRole(
      'link',
      { name: /More detail/i },
    );
    userEvent.click(details);

    const labelFav = screen.getByLabelText('Pokémon favoritado?');
    userEvent.click(labelFav);

    const img = screen.getAllByRole('img');

    expect(img[1].src).toBe('http://localhost/star-icon.svg');
    expect(img[1]).toHaveAttribute('alt', 'Caterpie is marked as favorite');
  });

  test('É exibido na tela um texto com o tipo do pokemon', () => {
    renderWithRouter(<App />);

    const pkmType = screen.getByRole(
      'button',
      { name: 'Bug' },
    );
    userEvent.click(pkmType);

    const details = screen.getByRole(
      'link',
      { name: /More detail/i },
    );
    userEvent.click(details);

    const labelType = screen.getByTestId('pokemon-type');

    expect(labelType).toHaveTextContent('Bug');
  });

  test('É exibido na tela um link pro pokemon', () => {
    renderWithRouter(<App />);

    const pkmType = screen.getByRole(
      'button',
      { name: 'Bug' },
    );
    userEvent.click(pkmType);

    const details = screen.getAllByRole(
      'link',
      { href: '/pokemons/10' },
    );

    expect(details[0]).toBeInTheDocument();
  });
});
