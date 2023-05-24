import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Home from './components/Home/Home'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import './App.css'


function App() { 
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ItemListContainer greeting={"Productos"}/>} />
        <Route path='/products/vestidos' element={<ItemListContainer greeting={"Vestidos"} type={"vestido"} />} />
        <Route path='/products/remeras' element={<ItemListContainer greeting={"Remeras"} type={"remera"}/>} />
        <Route path='/products/calzado' element={<ItemListContainer greeting={"Calzado"} type={"calzado"}/>} />

        <Route path='/products/:itemId' element={<ItemDetailContainer/>} />
        <Route path='*' element={<h2 style={{color: "black"}}>Error 404: Page not found</h2>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
