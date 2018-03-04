import React from 'react';
import Lightbox from 'react-images';
import './imageModal.css';

class ImageModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentImage: 0,
      isOpen: false,
    }
  }

  openLightbox = (index, event) => {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  gotoImage(index) {
    this.setState({
      currentImage: index,
    });
  }

  handleClickImage = () => {
    if (this.state.currentImage === this.props.images.length - 1) return;

    this.gotoNext();
  }

  renderGallery() {
    const images = this.props.images;

    if (!images) return;

    const gallery = images.map((obj, i) => {
      return (
        <a
          href={obj.src}
          key={i}
          onClick={(e) => this.openLightbox(i, e)}
        >
          <img className={this.props.class} src={obj.src} />
        </a>
      );
    });

    return (
      <div className="gallery-flex-3">
        {gallery}
      </div>
    );
  }

  render() {
    return (
      <div className="sub-gallery-section">
        {this.renderGallery()}
        <Lightbox
          images={this.props.images}
          backdropClosesModal
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClickThumbnail={this.gotoImage}
          onClose={this.closeLightbox}
          preventScroll={this.props.preventScroll}
          showThumbnails={false}
          spinner={this.props.spinner}
          spinnerColor={this.props.spinnerColor}
          spinnerSize={this.props.spinnerSize}
          />
      </div>
    );
  }
}

export default ImageModal;
