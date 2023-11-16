import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components';

describe('Pruebas en <GifGrid />', () => {
  const category = 'Dark Souls';

  test('debe de mostrar el loading incialmente', () => {
    render(<GifGrid category={category} />);
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
  });
});
