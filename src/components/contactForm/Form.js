import { useState } from "react"
import Library from "./Library"

const Form = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [msg, setMsg] = useState('')

    const handleSubmit = (e) => {

    }

  return (
    <div>
    <div className="row d-flex justify-content-center">
        <div className="col-sm-10 col-md-5 my-5 mx-5">
        <div className="card-header">
            <h2>
                Contact Me
            </h2>
        </div>
            <p>Email: <a href="mailto:tjwetmore34@gmail.com">tjwetmore34@gmail.com</a></p>
            <p><img alt="linkedin logo" className="logo" src="https://cdn-icons-png.flaticon.com/512/174/174857.png">
            </img>
            <a href='https://www.linkedin.com/in/thomas-wetmore-548b75151/'>LinkedIn</a>
            </p>
        <div>
            <div className="card-body">
            <form className="d-flex flex-column">
                <input value={email} 
                className="my-2 d-block w-sm-100 w-md-75 custom-input" id='email' 
                placeholder="email..."
                onChange={((e)=> setEmail(e.target.value))}></input>

                <input value={name} 
                className="my-2 d-block  w-sm-100 w-md-75 custom-input" id='name' 
                placeholder="name..."
                onChange={((e)=> setName(e.target.value))}></input>

                <textarea value={msg} 
                className="my-2 d-block  w-sm-100 w-md-75 custom-input" 
                placeholder="Your message here P.S. Feel free to recommend me a book!"
                onChange={((e)=> setMsg(e.target.value))}></textarea>

                <button className="btn btn-primary w-sm-100 w-md-75">Send Message</button>
            </form>
            </div>
            </div>
        </div>
        <div className="col-6">
            <img alt="TJ Wetmore" className="img img-responsive d-sm-none d-md-block my-4 border-img" src="https://picsum.photos/600/400"></img>
        </div>
    </div>
    <Library />
    </div>
  )
}

export default Form