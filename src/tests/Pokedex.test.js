import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokedex.js />', () => {
  test('Teste se a página contém um heading h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);

    const pageReq = screen.getByRole(
      'heading',
      { name: /Encountered pokémons/i, level: 2 },
    );
    expect(pageReq).toBeInTheDocument();
  });

  test('Os botões de filtragem por tipo possuem o nome correto', () => {
    renderWithRouter(<App />);

    const types = ['Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];

    const btnAll = screen.getByRole(
      'button',
      { name: 'All' },
    );
    expect(btnAll).toBeInTheDocument();

    types.forEach((btn) => {
      const btnSelected = screen.getByRole(
        'button',
        { name: btn },
      );
      expect(btnSelected).toBeInTheDocument();
    });
  });

  test('Os botões possuem o data-testid=pokemon-type-button exceto o botão All', () => {
    renderWithRouter(<App />);

    const types = ['Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];

    types.forEach((btn) => {
      const btnSelected = screen.getByRole(
        'button',
        { name: btn },
      );
      expect(btnSelected).toHaveAttribute('data-testid', 'pokemon-type-button');
    });
  });

  test('All está disponivel', () => {
    renderWithRouter(<App />);

    const btnAll = screen.getByRole(
      'button',
      { name: 'All' },
    );
    userEvent.click(btnAll);

    const pika = screen.getByText(/Pikachu/i);

    expect(pika).toBeInTheDocument();
  });
});
