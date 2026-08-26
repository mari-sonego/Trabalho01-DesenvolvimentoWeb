import { useState } from 'react';
import './App.css'
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';

function App() {

  const [produtos, setProdutos] = useState ( [] )

  const adicionaProd = (prod) => {
    console.log(prod);
    const listaNova = produtos.slice();
    listaNova.push(prod);
    setProdutos( listaNova );
  }


  return (
    
    <div>

      <Banner />
      <Formulario aoProdCadastrado={prod => adicionaProd(prod)} />

    </div>

  );
}

export default App
