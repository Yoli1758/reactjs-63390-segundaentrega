import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Home from './components/Home/Home'
import Contacto from './components/Contacto/Contacto'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import Footer from './components/Footer/Footer'
import './App.css'
import 'react-toastify/dist/ReactToastify.css'


function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/productos' element={<ItemListContainer/>}/>
                    <Route path='/productos/category/:categoryId' element={<ItemListContainer/>}/>
                    <Route path='/producto/detail/:productId' element={<ItemDetailContainer/>}/>
                    <Route path='/contacto' element={<Contacto/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/checkout' element={<Checkout/>}/>
                    <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
                </Routes>
             
                <Footer/>
               
            </BrowserRouter>

        </>
    )
}

export default App