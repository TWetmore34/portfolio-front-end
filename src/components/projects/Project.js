import { Link } from 'react-router-dom'
const Project = ({ project }) => {
  return (
    <div className="col-3 mx-3">
        <div className="text-center">
        <h2><Link to={project.path}>{project.title}</Link></h2>
        <img className="img img-responsive img-thumbnail w-100" src={project.img} alt='project thumbnail'></img>
        <div className="m-2">
        <p>{project.description}</p>
        <p><span className='font-weight-bold'>Tech used:</span>{project.tech.map(piece => (
            ' ' + piece
        ))}
        </p>
        </div>
        </div>
    </div>
  )
}

export default Project