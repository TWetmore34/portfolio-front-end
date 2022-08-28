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
    </div>
  )
}

export default ProjectView