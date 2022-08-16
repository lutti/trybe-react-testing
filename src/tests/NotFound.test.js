import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import { NotFound } from '../pages';

describe('Teste o componente <NotFound.js />', () => {
  test('É exibido na tela um h2 com o texto Page requested not found', () => {
    renderWithRouter(<NotFound />);

    const pageReq = screen.getByRole(
      'heading',
      { name: /Page requested not found/, level: 2 },
    );
    expect(pageReq).toBeInTheDocument();
  });

  test('Existe uma imagem com o src https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    renderWithRouter(<NotFound />);

    const imagem = screen.getByAltText(/Pikachu crying/i);
    expect(imagem.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
