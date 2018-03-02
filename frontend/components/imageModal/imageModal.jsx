import React from 'react';
import Lightbox from 'react-images';

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
    const images = [
      { src: 'https://tinyurl.com/y9ymae8n' },
      { src: 'https://tinyurl.com/y9ymae8n' },
      { src: 'https://tinyurl.com/y8cuqbck' }
    ];

    if (!images) return;

    const gallery = images.map((obj, i) => {
      return (
        <a
          href={obj.src}
          key={i}
          onClick={(e) => this.openLightbox(i, e)}
        >
          <img src={obj.src} />
        </a>
      );
    });

    return (
      <div>
        {gallery}
      </div>
    );
  }




  render() {
    return (
      <div className="sub-gallery-section">
        {this.renderGallery()}
        <Lightbox
          images={[
            { src: 'https://tinyurl.com/y9ymae8n' },
            { src: 'https://tinyurl.com/y9ymae8n' },
            { src: 'https://tinyurl.com/y8cuqbck' }
          ]}
          backdropClosesModal
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClickThumbnail={this.gotoImage}
          onClose={this.closeLightbox}
          preventScroll={this.props.preventScroll}
          showThumbnails={this.props.showThumbnails}
          spinner={this.props.spinner}
          spinnerColor={this.props.spinnerColor}
          spinnerSize={this.props.spinnerSize}
          />
      </div>
    );
  }
}

export default ImageModal;
