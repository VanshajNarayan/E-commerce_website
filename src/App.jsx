import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/HomeFolder/Home';
import About from './Components/AboutFolder/About';
import Contact from './Components/ContactFolder/Contact';
import Product from './Components/ProductFolder/Product';
import Error from './Components/ErrorFolder/Error';
import SingleProduct from './Components/SingleProductFolder/SingleProducts';
import Cart from './Components/CartFolder/Cart';
import Header from './Components/HeaderFolder/Header';
import Footer from './Components/FooterFolder/Footer';

function App() {

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/about' element = {<About/>} />
          <Route path='/contact' element = {<Contact/>} />
          <Route path='/product' element = {<Product/>} />
          <Route path='/singleproduct/:id' element = {<SingleProduct/>} />
          <Route path='/cart' element = {<Cart/>} />
          <Route path='*' element = {<Error/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
};

export default App;
