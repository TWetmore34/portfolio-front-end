import { useParams } from "react-router-dom"
import ImgDisplay from "./ImgDisplay"
const ProjectView = ({ project }) => {

    const { id } = useParams()
    const projectId = parseInt(id)
    const current = project[projectId]

  return (
    <div>
        <ImgDisplay project={current} />
        <h2 className="text-center">{current.title}</h2>
        <p>{projectId === 0 ? 'Write the longer description for project 1 here... focus on development philosophy and other stuff related to creating the project' : ''}</p>
    </div>
  )
}

export default ProjectView