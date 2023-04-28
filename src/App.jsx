import './App.css'
import MainLogo from './components/MainLogo/MainLogo'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  let navElements = ["INICIO", "PRODUCTOS", "CONTACTO", "POLITICA DE DEVOLUCION"]
  
  return (
    <>
      <header>
        <MainLogo>INDRA</MainLogo>
        <NavBar elements={navElements} cartcount={33}/>
      </header>
      
      <main>
        <ItemListContainer greeting={"Pre-entrega: Christian Toppetti"}/>
      </main>
    </>
  )
}

export default App
