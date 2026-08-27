//import React from "react";
import './Produto.css';

const Produto = ({ marca, nome, preco, condicao }) => {
  const logoUrl = `/imagens/${marca.replace(/\s+/g, '').toLowerCase()}.png`;

  return (
    <div className="produto">
      <div className="cabecalho">
        <img src={logoUrl} alt={`Logomarca da ${marca}`} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>R$ {preco}</h5>
        <h5 style={{ color: condicao === 'Novo' ? 'green' : 'red' }}>
          {condicao.toUpperCase()}
        </h5>
      </div>
    </div>
  )
}

export default Produto;