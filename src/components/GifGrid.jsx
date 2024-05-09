import GiftGridItem from "./GiftGridItem";
import useFetchGifs from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h1>Cargando...</h1>}
      <div className="card-grid">
        {images.map((image) => (
          <GiftGridItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
