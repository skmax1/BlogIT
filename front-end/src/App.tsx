import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import { Post } from './pages/Post'
import './App.css'
import { Posts } from './pages/Posts'
import { Publish } from './pages/Publish'

function App() {


  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/signin' element={<SignIn/>}></Route>
      <Route path='/blogs' element={<Posts/>}></Route>
      <Route path='/blog/:id' element={<Post/>}></Route>
      <Route path='/publish' element={<Publish/>}></Route>
     </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
