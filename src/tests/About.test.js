import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import { About } from '../pages';

describe('Teste o componente <About.js />', () => {
  test('É exibido na tela um h2 com texto About Pokédex', () => {
    renderWithRouter(<About />);

    const hum = screen.getByRole('heading', { name: 'About Pokédex', level: 2 });
    expect(hum).toBeInTheDocument();
  });

  test('É exibido na tela uma imagem com url', () => {
    renderWithRouter(<About />);

    const imagem = screen.getByAltText('Pokédex');
    expect(imagem.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
