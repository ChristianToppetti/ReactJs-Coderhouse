import {Routes, Route, useLocation} from 'react-router-dom'
import {CartContextProvider} from './context/cartContext.jsx'
import Header from './components/Header/Header.jsx'
import MainWrapper from './components/MainWrapper/MainWrapper.jsx'
import Home from './components/Home/Home'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import OrderConfirmation from './components/OrderConfirmation/OrderConfirmation.jsx'
import Cart from './components/Cart/Cart.jsx'
import './App.css'

function App() {
  const location = useLocation();
  const currentPath = location.pathname;
  const isItemDetailPath = currentPath.startsWith('/detail/')
  const isCartPath = currentPath.startsWith('/cart')

  let background = location.state?.background

  //Si es un modal y no tiene background le agregamos /products como default
  if((isItemDetailPath || isCartPath) && !background) {
    const bg = {...location}
    bg.pathname = "/products"    
    background = bg
  }
  
  return (
    <CartContextProvider>
      <Header />
      
      <MainWrapper>
        <Routes location={background || location}>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ItemListContainer />} />
          <Route path='/category/:catId' element={<ItemListContainer/>} />
          <Route path='/confirmation/:orderId' element={<OrderConfirmation/>} />

          {(!isItemDetailPath && !isCartPath) &&
            <Route path='*' element={<h2 style={{color: "black"}}>Error 404: Page not found</h2>} />
          }
        </Routes>

        {isItemDetailPath && (
          <Routes>
            <Route path='/detail/:itemId' element={<ItemDetailContainer/>} />
          </Routes>
        )}
        
        {isCartPath && (
          <Routes>
            <Route path='/cart' element={<Cart/>} />
          </Routes>
        )}
      </MainWrapper>
    </CartContextProvider>
  )
}

export default App
