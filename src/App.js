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
      id: 0,
      path: '/projects/0',
      carousel: [
      {
        imgThumb: 'https://picsum.photos/300/200',
        imgDesc: 'Small description'
      },
      {
        imgThumb: 'https://picsum.photos/300/200',
        imgDesc: 'Small description'
      },
      {
        imgThumb: 'https://picsum.photos/300/200',
        imgDesc: 'Small description'
      }
    ]
    },
    {
      title: 'Code Blog',
      description: 'Small blog setup with a mySQL database',
      tech: ['Handlebars,','Express api,','node.js,','Sequelize,','mySQL'],
      img: 'https://picsum.photos/300/200',
      id: 1,
      path: '/projects/1',
      carousel: [
        {
          imgThumb: 'https://picsum.photos/300/200',
          imgDesc: 'Small description'
        },
        {
          imgThumb: 'https://picsum.photos/300/200',
          imgDesc: 'Small description'
        },
        {
          imgThumb: 'https://picsum.photos/300/200',
          imgDesc: 'Small description'
        }
      ]
    },
    {
      title: 'Social Media Site',
      description: 'Back end setup for a small scale social media site. Built to act as a rest api with Node.js and express, this app includes functionality to add users, posts, friends, and more!',
      tech: ['mongoDB','mongoose','Node.js','Express api'],
      img: 'https://picsum.photos/300/200',
      id: 2,
      path: '/projects/2',
      carousel: [
        {
          imgThumb: 'https://picsum.photos/300/200',
          imgDesc: 'Small description'
        },
        {
          imgThumb: 'https://picsum.photos/300/200',
          imgDesc: 'Small description'
        },
        {
          imgThumb: 'https://picsum.photos/300/200',
          imgDesc: 'Small description'
        }
      ]
    },
    {
      title: 'Travel Log API',
      description: 'A fully developed rest-ish api using a mySQL database. The site is back end only, but once deployed or installed on a local machine, it includes seed data and saves queries against an api for faster response times on use.',
      tech: ['Express api,','Node.js'],
      img: 'https://picsum.photos/300/200',
      id: 3,
      path: '/projects/3',
      carousel: [
        {
          imgThumb: 'https://picsum.photos/300/200',
          imgDesc: 'Small description'
        },
        {
          imgThumb: 'https://picsum.photos/300/200',
          imgDesc: 'Small description'
        },
        {
          imgThumb: 'https://picsum.photos/300/200',
          imgDesc: 'Small description'
        }
      ],
      github: 'https://github.com/TWetmore34/Travel-site-log-api'
    },
    {
      title: 'J.A.T.E',
      description: 'Just Another Text Editor is a fully functioning in-browser text editor that features a download for offline use, as well as in-memory caching, so you klnow your work is always saved!',
      tech: ['Webpack,','Node.js'],
      img: 'https://picsum.photos/300/200',
      id: 4,
      path: '/projects/4',
      carousel: [
        {
          imgThumb: 'https://picsum.photos/300/200',
          imgDesc: 'Small description'
        },
        {
          imgThumb: 'https://picsum.photos/300/200',
          imgDesc: 'Small description'
        },
        {
          imgThumb: 'https://picsum.photos/300/200',
          imgDesc: 'Small description'
        }
      ]
    },
    {
      title: 'TSG (The Song Goes...)',
      description: '',
      tech: ['Youtube api,','Shazam api,', 'Vanilla J.S'],
      img: 'https://picsum.photos/300/200',
      id: 5,
      path: '/projects/5',
      carousel: [
        {
          imgThumb: 'https://picsum.photos/300/200',
          imgDesc: 'Small description'
        },
        {
          imgThumb: 'https://picsum.photos/300/200',
          imgDesc: 'Small description'
        },
        {
          imgThumb: 'https://picsum.photos/300/200',
          imgDesc: 'Small description'
        }
      ]
    },
  ]



  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header projects={projects} />
      <Routes>

      <Route path='/' element={
              <div className='row'>
              <Introduction />
              <Featured project={projects[0]} />
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
