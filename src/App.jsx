import './App.css'

import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

//components 
import Header from '/src/components/Header'
import Loader from './components/Loader'

//pages
const Home = React.lazy(() => import('/src/pages/Home'))
const Contact = React.lazy(() => import('/src/pages/Contato'))
const Projects = React.lazy(() => import('/src/pages/Projetos'))

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route 
        path="/"
        element={
          <React.Suspense fallback={<Loader />}>
            <Home/>
          </React.Suspense>
        }
        />

        <Route
        path="/contato"
        element={
          <React.Suspense fallback={<Loader />}>
            <Contact />
          </React.Suspense>
        }
        />

        <Route
        path="/projetos"
        element={
          <React.Suspense fallback={<Loader />}>
            <Projects />
          </React.Suspense>
        }
        />
      </Routes>
    </>
  )
}

export default App
