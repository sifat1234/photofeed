import PhotoCard from './PhotoCard';

function PhotoList({ photos }) {
  console.log(photos);
  return (
    <div className='img-grid'>
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
}

export default PhotoList;
