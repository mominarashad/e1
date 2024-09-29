import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header';
import Home from './Component/Home';
import Products from './Component/Products';
import About from './Component/About';
import Contact from './Component/Contact';
import SignUp from './Component/SignUp';
import SignIn from './Component/SignIn';
import Cart from './Component/Cart';
import Footer from './Component/Footer';
import Brands from './Component/Brands';
import ProductList from './Component/ProductList';
import ProductDetail from './Component/ProductDetail'

function App() {
  return (
    <>
    <Header/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/products/brands" element={<Brands />} />
        <Route path="/products/:brand" element={<ProductList />} />
        <Route path="/product/:brand/:id" element={<ProductDetail />} /> 
       </Routes>
       <Footer/>
    </>
  );
}

export default App;
