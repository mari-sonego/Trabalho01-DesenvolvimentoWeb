import { useState } from 'react';
import './App.css'
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import Secao from './componentes/Secao/Secao';

function App() {

  const secoes = [
    { nome: 'Computadores', corPrimaria: '#5779c2', corSecundaria: '#d9e8f7' },
    { nome: 'Acessorios', corPrimaria: '#fa82e6', corSecundaria: '#ffe8fd' },
    { nome: 'Impressoras', corPrimaria: '#57d161', corSecundaria: '#e2f8e7' },
    { nome: 'Games', corPrimaria: '#e06b69', corSecundaria: '#fde7e8' },
    { nome: 'Gadgets', corPrimaria: '#be6edb', corSecundaria: '#ece9fa' }
  ];

  const listaSecoes = secoes.map(secao => secao.nome);
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
      <Formulario secoes={listaSecoes} aoProdCadastrado={prod => adicionaProd(prod)} />
      {secoes.map(secao => <Secao
        key={secao.nome}
        nome={secao.nome}
        corPrimaria={secao.corPrimaria}
        corSecundaria={secao.corSecundaria}
        produtos={produtos.filter(p => p.secao === secao.nome)}
      />)}
    </div>

  );
}

export default App
