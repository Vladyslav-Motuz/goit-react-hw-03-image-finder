import React from 'react';
import s from './ImageGalleryItem.module.css';
import Modal from '../Modal/Modal';

class ImageGalleryItem extends React.Component {
  state = { showModal: false };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { source, description, id, dataOriginal} = this.props;    
    return (
      <>
        <li
          key={id}
          className={s.ImageGalleryItem}
          onClick={this.toggleModal}
        >
          <img
            className={s.ImageGalleryItem__image}
            src={source}
            alt={description}            
          />
        </li>
        
        {this.state.showModal && (
          <Modal
            modalImage={dataOriginal}
            modalImageText={description}
            onClose={this.toggleModal}
          />
        )}
      </>
    );
  }
};

export default ImageGalleryItem;