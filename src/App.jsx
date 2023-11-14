import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import MiApi from './assets/components/miapi/MiApi'
import Header from './assets/components/header/Header';
import Footer from './assets/components/footer/Footer';

function App() {
  const [feriados, setFeriados] = useState([]);
  const [buscador, setBuscador] = useState("");
  return (
    <div className='divPrincipalFeriados'>
      <Header buscador={buscador} setBuscador={setBuscador}></Header>
      <MiApi setFeriados={setFeriados} feriados={feriados} buscador={buscador}></MiApi>
      <footer>
        <Footer></Footer>
      </footer>
    </div>

  )
}

export default App
