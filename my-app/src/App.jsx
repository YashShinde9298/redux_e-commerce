import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProductListing from "./components/ProductListing"
import ProductDetail from "./components/ProductDetail"
import Cart from "./components/Cart"
import Navbar from "./components/Navbar"
import CategoryComponent from "./components/CategoryComponent"
import Footer from "./components/Footer"


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" Component={ProductListing} />
          <Route exact path="/product/:productId" Component={ProductDetail} />
          <Route exact path='/category/:categoryId' Component={CategoryComponent} />
          <Route exact path="/cart" Component={Cart} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
