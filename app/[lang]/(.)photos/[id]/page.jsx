import PhotoDetails from '@/components/PhotoDetails';
import Modal from '@/components/Modal';

const PhotoDetailsPage = ({ params: { id, lang } }) => {
  return (
    <Modal>
      <PhotoDetails id={id} lang={lang} />
    </Modal>
  );
};

export default PhotoDetailsPage;
