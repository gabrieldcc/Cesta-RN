import logo from '../../assets/logo.png';
import tomate from '../../assets/frutas/Tomate.png'

const cesta = {
    topo: {
        titulo: "Detalhes da cesta"
    },
    detalhes: {
        nome: "Cesta de verduras",
        logoFazenda: logo,
        nomeFazenda: "Jenny Jack Farmy",
        descricao: "Uma cesta com produtos selecionados cuidadosamente direto para sua cozinha",
        preco: "R$ 40,00",
        botao: "Comprar",
    },
    itens: {
        titulo: "Itens da cesta",
        lista: [
            {
                nome: "Tomate",
                imagem: tomate,

            }
        ]
    }
}

export default cesta;