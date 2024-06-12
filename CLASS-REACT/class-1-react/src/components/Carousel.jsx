/**
 * (point) useState se phele class me ek hi variable ka istemal hota he usse STATE khete hn
 * jis tarah ham props pas karte hn class me use defaultPops khete hn
 */
import { Component } from "react";

class Carousel extends Component {
  state = {
    //  useState()
    active: 0,
  };

  static defaultProps = {
    //  props
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    // console.log("EVENT", event);
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;
    // console.log("IMAGE", images);

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
              onClick={this.handleIndexClick}
              data-index={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
