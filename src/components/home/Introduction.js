import { selfPhoto } from '../../images'
import { resume } from '../../resumeLink/'
const Introduction = () => {
  return (
    <div className="my-5 mx-auto m-md-5 col-sm-10 col-md-4">
        <img className="img img-responsive col-5 my-3 mx-auto d-block rounded-circle" src={selfPhoto} alt="placeholder img" />
        <h2 className='text-center'>Hey There!</h2>
        <p className='mx-auto col-10 col-sm-12'>I am a server-side developer leveraging a Bachelor of Arts in English. I received my fullstack certificate from Georgia Tech, where I focused on Agile development in JavaScript, HTML5, CSS, React.js, and Node. Driven by a desire to develop apps that bring the perfect blend of joy and convenience, I love developing new products. As a result, I bring that love into everything I produce. My strengths include creativity, teamwork, and sticking with projects all the way from ideation to execution. Feel free to look around or send me a message any time.</p>
        <a className='btn btn-primary mx-auto d-block w-50' href={resume} download>Download My Resume</a>
    </div>
  )
}

export default Introduction