import { GridItem } from './GridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {isLoading && <h4>Cargando...</h4>}

      <div className="card-grid">
        {images.map((image) => (
          <GridItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
