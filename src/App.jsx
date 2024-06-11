import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import Create from './Components/Create/Create'
import Edit from './Components/Edit/Edit'
import Header from './Components/Header/Header'

function App() {

  return (
    <>

    <Header/>

    <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/create" element={<Create/>} />
       <Route path="/edit/:id" element={<Edit/>} />
    </Routes>
    </>
  )
}

export default App
