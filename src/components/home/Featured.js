import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

function Featured({ project }) {
  return (
    <Card className='col-lg-7 col-md-5 mx-auto mx-sm-5 m-md-3' style={{ width: '36rem', height: '100%' }}>
    <Card.Title className='m-1'>
      <Link style={{ color: 'black' }} to="/projects/0">
        <h2 className='text-center sm-text-left'>Featured Project</h2>
      </Link>
    </Card.Title>
      <Card.Img className='img thumbnail-border' variant="top" src={project.img} />
      <Card.Body>
        <Card.Title className='mx-1'>Daily Dose of Code</Card.Title>
        <Card.Text className='mx-1'>
            Daily coding practice site with a login authorization, built in text editor, and 
            support from mySQL databases. Uses  sequelize, handlebars, and Node.js.
        </Card.Text>
        <div className='d-flex justify-content-around'>
        <a href='https://github.com/TWetmore34/daily-dose-of-code' className='btn btn-secondary'>Github</a>
        <a href='https://desolate-escarpment-26537.herokuapp.com/' className='btn btn-primary'>Deployment</a>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Featured;