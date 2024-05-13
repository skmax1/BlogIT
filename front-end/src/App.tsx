import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import { Post } from './pages/Post'
import './App.css'

function App() {


  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/signin' element={<SignIn/>}></Route>
      <Route path='/post' element={<Post/>}></Route>
     </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
