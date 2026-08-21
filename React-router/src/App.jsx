import { Route, Routes } from 'react-router-dom'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Home from './components/Home.jsx'

export default function App() {
  return (
    <div>
      <h1>Welcome to Routing </h1>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Contact />} path="/contact" />
      </Routes>
    </div>
  )
}