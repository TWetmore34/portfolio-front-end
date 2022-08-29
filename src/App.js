// components
import Header from './components/header/Header';
import Introduction from './components/home/Introduction';
import Featured from './components/home/Featured';
import Form from './components/contactForm/Form';
import ProjectsAll from './components/projects/ProjectsAll';
import ProjectView from './components/projects/ProjectView';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

// images
import { jate, dailyDose, tsg, blog } from './images'

// routing
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';

function App() {
  const projects = [
    {
      title: 'Daily Dose of Code',
      description: 'Take on a daily coding challenge with a built in code editor. Features login Authorization, code editor, and daily email reminders when new challenges are posted. Each day, a new challenge is revealed for you to attempt!',
      tech: ['Express api,','Node.js,','Handlebars,','ace.io,','nodemailer,', 'heroku'],
      img: dailyDose,
      id: 0,
      path: '/projects/0',
      carousel: [
      {
        id: 0,
        imgThumb: dailyDose,
        imgDesc: 'Built in text editor'
      },
      {
        id: 1,
        imgThumb: 'https://picsum.photos/300/200',
        imgDesc: 'Small description'
      },
      {
        id: 2,
        imgThumb: 'https://picsum.photos/300/200',
        imgDesc: 'Small description'
      }
    ],
    github: 'https://github.com/TWetmore34/daily-dose-of-code',
    deployment: 'https://desolate-escarpment-26537.herokuapp.com/'
    },
    {
      title: 'Code Blog',
      description: 'Small blog setup with a mySQL database',
      tech: ['Handlebars,','Express api,','node.js,','Sequelize,','mySQL'],
      img: blog.thumbnail,
      id: 1,
      path: '/projects/1',
      carousel: [
        {
          id: 0,
          imgThumb: blog.thumbnail,
          imgDesc: 'Landing page for code blog'
        },
        {
          id: 1,
          imgThumb: blog.cookie,
          imgDesc: 'Cookie setup is how we keep track of login sessions for users, along with navigation to the user dashboard'
        },
        {
          id: 2,
          imgThumb: blog.login,
          imgDesc: 'Login screen'
        }
      ],
      github: 'https://github.com/TWetmore34/code-blog',
      deployment: 'https://calm-lake-31825.herokuapp.com/'
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
          id: 0,
          imgThumb: 'https://picsum.photos/300/200',
          imgDesc: 'Built in text editor'
        },
        {
          id: 1,
          imgThumb: 'https://picsum.photos/300/200',
          imgDesc: 'Small description'
        },
        {
          id: 2,
          imgThumb: 'https://picsum.photos/300/200',
          imgDesc: 'Small description'
        }
      ],
      github: 'https://github.com/TWetmore34/mock-social-media'
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
          id: 0,
          imgThumb: 'https://picsum.photos/300/200',
          imgDesc: 'Built in text editor'
        },
        {
          id: 1,
          imgThumb: 'https://picsum.photos/300/200',
          imgDesc: 'Small description'
        },
        {
          id: 2,
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
      img: jate.thumbnail,
      id: 4,
      path: '/projects/4',
      carousel: [
        {
          id: 0,
          imgThumb: jate.sw,
          imgDesc: 'Service worker saved onto the browser helps display static assets'
        },
        {
          id: 1,
          imgThumb: jate.indexCache,
          imgDesc: 'Cache for the index.html file makes for much faster loadtimes on second visit'
        },
        {
          id: 2,
          imgThumb: jate.workboxCache,
          imgDesc: 'Cache created by WorkBox helps store assets for the service worker'
        }
      ],
      deployment: 'https://gentle-fortress-36739.herokuapp.com/',
      github: 'https://github.com/TWetmore34/JATE-webpack-setup'
    },
    {
      title: 'TSG (The Song Goes...)',
      description: '',
      tech: ['Youtube api,','Shazam api,', 'Vanilla J.S'],
      img: tsg,
      id: 5,
      path: '/projects/5',
      carousel: [
        {
          id: 0,
          imgThumb: 'https://picsum.photos/300/200',
          imgDesc: 'Built in text editor'
        },
        {
          id: 1,
          imgThumb: 'https://picsum.photos/300/200',
          imgDesc: 'Small description'
        },
        {
          id: 2,
          imgThumb: 'https://picsum.photos/300/200',
          imgDesc: 'Small description'
        }
      ],
      github: 'https://github.com/TWetmore34/TSG-APP-Project-1',
      deployment: 'https://oz4tech.github.io/TSG-APP-Project-1/'
    },
  ]

  console.log(projects[0].img)

  return (
    <div>
      <BrowserRouter // basename={process.env.PUBLIC_URL}
      >
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
