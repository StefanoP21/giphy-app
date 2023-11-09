import { useEffect, useState } from 'react';
import { GridItem } from './GridItem';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map(({ id, title, url }) => (
          <GridItem key={id} title={title} url={url} />
        ))}
      </div>
    </>
  );
};
