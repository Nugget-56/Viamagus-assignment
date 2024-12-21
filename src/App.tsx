import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/homePage";
import Login from './pages/loginPage'
import Posts from './pages/postsPage'
import DetailedPost from "./pages/detailedPostPage";
import CreatePost from './pages/createPostPage'
import ShoppingCart from './pages/cartPage'
import { Toaster } from 'sonner'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:postID" element={<DetailedPost />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
      <Toaster richColors duration={3000}/>
    </BrowserRouter>
  )
}

export default App