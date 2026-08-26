import { useState } from "react";
import CampoTexto from "../CampoTexto/CampoTexto";
import "./Formulario.css";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";
import RadioButton from "../RadioButton/RadioButton";

const Formulario = (props) => {

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoProdCadastrado(
            {
                "secao": secao,
                "marca": marca,
                "nome": nome,
                "preco": preco,
                "condicao": estadoProduto

            }
        )
    }

    const secoes = [
        'Computadores',
        'Acessorios',
        'Impressoras',
        'Game',
        'Gadget'
    ]

    const marcas = [
        'HP',
        'Dell',
        'Positivo',
        'Asus',
        'Genérico'
    ]

    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [secao, setSecao] = useState('Computadores')
    const [marca, setMarca] = useState('Dell')

    const [estadoProduto, setEstadoProduto] = useState("");

    const lidarComMudanca = (event) => {
        setEstadoProduto(event.target.value);
    };


    return (
        <section className="formulario">

            <form onSubmit={aoSalvar}>

                <h2>Dados do produto:</h2>
                
                <ListaSuspensa label="Seções" itens={secoes} valor={secao} aoAlterado={valor => setSecao(valor)}/>
                <ListaSuspensa label="Marcas" itens={marcas} valor={marca} aoAlterado={valor => setMarca(valor)}/>
                
                <CampoTexto label="Nome" placeholder="Digite o nome" valor={nome} aoAlterado={valor => setNome(valor)}/>
                <CampoTexto label="Preço" placeholder="Digite o preço" valor={preco} aoAlterado={valor => setPreco(valor)}/>
                
                <div className="radio">
                    <RadioButton id="novo" name="condicao_produto" valor="Novo" checked={estadoProduto === "Novo"} onChange={lidarComMudanca}/>
                    <RadioButton id="usado" name="condicao_produto" valor="Usado" checked={estadoProduto === "Usado"} onChange={lidarComMudanca}/>
                </div>

                <Botao texto="Adicionar produto" />

            </form>

        </section>
    )
}

export default Formulario;