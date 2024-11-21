
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CatalogCategory from './pages/CatalogCategory';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Catalog from './pages/catalog';
import Products from './pages/Products';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
       <Route path='/' element={<Catalog/>}/>
       <Route path='/mens' element={<CatalogCategory category="men"/>}/>
       <Route path='/womens' element={<CatalogCategory category="women"/>}/>
       <Route path='/kids' element={<CatalogCategory category="kid"/>}/>
       <Route path='product' element={<Products/>}>
       <Route path=':productId' element={<Products/>}/>
       </Route>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
