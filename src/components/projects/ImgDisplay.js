import Carousel from 'react-bootstrap/Carousel';

function ImgDisplay({ project }) {
  return (
    <Carousel className='col-10 mx-auto my-4 dimensions-carousel'>
      {project.carousel.map(entry => (
        <Carousel.Item key={entry.id}>
        <img
          className="d-block w-100"
          src={entry.imgThumb}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{color: 'black'}}>{entry.imgDesc}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ImgDisplay;