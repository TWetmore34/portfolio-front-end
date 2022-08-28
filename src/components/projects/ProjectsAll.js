import Project from "./Project"
const ProjectsAll = ({ projects }) => {
    
  return (
    <div className="d-flex justify-content-center flex-wrap">
        {projects.map(project => (
            <Project key={project.id} project={project} />
        ))}
    </div>
  )
}

export default ProjectsAll