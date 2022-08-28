import Header from './components/header/Header';
import Introduction from './components/home/Introduction';
import Featured from './components/home/Featured';
import Form from './components/contactForm/Form';
import ProjectsAll from './components/projects/ProjectsAll';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import ProjectView from './components/projects/ProjectView';

function App() {
  const projects = [
    {
      title: 'Daily Dose of Code',
      description: 'Take on a daily coding challenge with a built in code editor. Features login Authorization, code editor, and daily email reminders when new challenges are posted. Each day, a new challenge is revealed for you to attempt!',
      tech: ['Express api,','Node.js,','Handlebars,','ace.io,','nodemailer'],
      img: 'https://picsum.photos/300/200',
      id: 0
    },
    {
      title: 'Code Blog',
      description: '',
      tech: ['Handlebars,','Express api,','node.js'],
      img: 'https://picsum.photos/300/200',
      id: 1
    },
    {
      title: 'Social Media Site',
      description: '',
      tech: ['','',''],
      img: 'https://picsum.photos/300/200',
      id: 2
    },
    {
      title: 'Travel Log API',
      description: 'A fully developed rest-ish api using a mySQL database. The site is back end only, but once deployed or installed on a local machine, it includes seed data and saves queries against an api for faster response times on use.',
      tech: ['Express api,','Node.js'],
      img: 'https://picsum.photos/300/200',
      id: 3,
      github: 'https://github.com/TWetmore34/Travel-site-log-api'
    },
    {
      title: 'J.A.T.E',
      description: 'Just Another Text Editor is a fully functioning in-browser text editor that features a download for offline use, as well as in-memory caching, so you klnow your work is always saved!',
      tech: ['Webpack,','Node.js'],
      img: 'https://picsum.photos/300/200',
      id: 4
    },
    {
      title: 'TSG (The Song Goes...)',
      description: '',
      tech: ['Youtube api,','Shazam api,', 'Vanilla J.S'],
      img: 'https://picsum.photos/300/200',
      id: 5
    },
  ]



  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>

      <Route path='/' element={
              <div className='row'>
              <Introduction />
              <Featured />
              </div>
      } />

      <Route path='/contact' element={
        <Form />
      } />

      <Route path='/projects' element={
        <ProjectsAll projects={projects} />
      } />

      <Route path='/projects/:id' element={
        <ProjectView project={projects} />
      } />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
