import './App.css'
import { Routes } from './components/Routes/routes'

// https://najm-eddine-zaga.medium.com/react-render-multiple-layouts-with-react-router-dom-v6-7a42bd984acf

function App() {
  return (
    <>
      <Routes isAuthorized={true} />
    </>
  )
}

export default App
