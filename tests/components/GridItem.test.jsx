import { render } from '@testing-library/react';
import { GridItem } from '../../src/components/GridItem';

describe('Pruebas en <GridTem />', () => {
  const title = 'Dark Souls';
  const url = 'https://dark-souls.com/dark-souls.jpg';

  test('Evaluar el snapshot', () => {
    const { container } = render(<GridItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
});
