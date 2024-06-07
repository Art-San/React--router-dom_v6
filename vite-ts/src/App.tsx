import './App.css'
import { Routes } from './components/Routes'

// https://najm-eddine-zaga.medium.com/react-render-multiple-layouts-with-react-router-dom-v6-7a42bd984acf

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes isAuthorized={false} />
    </>
  )
}

export default App
