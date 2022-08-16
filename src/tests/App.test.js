import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Teste o componente <App.js />', () => {
  test('É exibido na tela um link com o texto Home', () => {
    renderWithRouter(<App />);

    const linkHome = screen.getByRole('link', { name: 'Home' });
    expect(linkHome).toBeInTheDocument();
  });

  test('É exibido na tela um link com o texto About', () => {
    renderWithRouter(<App />);

    const linkAbout = screen.getByRole('link', { name: 'About' });
    expect(linkAbout).toBeInTheDocument();
  });

  test('É exibido na tela um link com o texto Favorite Pokémons', () => {
    renderWithRouter(<App />);

    const linkFavorite = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(linkFavorite).toBeInTheDocument();
  });
});
