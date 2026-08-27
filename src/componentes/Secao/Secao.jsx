import './Secao.css';
import Produto from "../Produto/Produto";

const Secao = (props) => {
  const corDeFundo = { backgroundColor: props.corSecundaria };
  const corSublinhado = { borderColor: props.corPrimaria };

  return (
    (props.produtos.length > 0) ? <section className="secao" style={corDeFundo}>
      <h3 style={corSublinhado}>{props.nome}</h3>
      <div className="produtos">
        {props.produtos.map((prod, indice) => <Produto
          key={indice} 
          secao={prod.secao}
          marca={prod.marca}
          nome={prod.nome}
          preco={prod.preco}
          condicao={prod.condicao}
        />)}
      </div>
    </section>
    : ''
  );
}

export default Secao;