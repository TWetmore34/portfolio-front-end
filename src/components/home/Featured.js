import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Featured() {
  return (
    <Card className='col-md-6 mx-xs-auto m-md-3' style={{ width: '26rem' }}>
    <Card.Title className='m-1'>
        <h2>Featured Project</h2>
    </Card.Title>
      <Card.Img className='img thumbnail-border' variant="top" src="https://picsum.photos/200" />
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