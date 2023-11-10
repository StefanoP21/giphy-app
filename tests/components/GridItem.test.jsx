import { render, screen } from '@testing-library/react';
import { GridItem } from '../../src/components/GridItem';

describe('Pruebas en <GridItem />', () => {
  const title = 'Dark Souls';
  const url = 'https://dark-souls.com/dark-souls.jpg';

  test('debe de hacer match con el snapshot', () => {
    const { container } = render(<GridItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
    render(<GridItem title={title} url={url} />);
    // screen.debug();
    // expect(screen.getByRole('img').src).toBe(url);
    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('debe de mostrar el título en el componente', () => {
    render(<GridItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
