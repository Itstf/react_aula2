import React, { Component } from 'react'; // importar o React toda vez que for arquivo .jsx
import Botao from './botao';
import Card from './card';
import Tittle from './tittle';

class Iniciando extends Component {

    state = {
        contador: 0,
        alunos: ["Hillary", "Zoe", "Eloah"],
        lista: [{titulo: 'SAIR', cor: '#f00'}, {titulo: 'entrar', cor: '#777'}]
    }

    // arrow function
    incrementar = (objeto) => {
        console.log("O objeto é : " + objeto.nome);
        if (this.state.contador == 10) return; // se igual a 10 o contador, não adiciona mais numeros
        this.state.contador++; // adiciona mais um no contador
        this.setState({ contador: this.state.contador }); // pega valor do contador
        console.log(this.state.contador) // exibe no console
    }

    decrementar = () => {
        // nao pode ser menor que 0
        if (this.state.contador == 0) return; // return ja sai da funcao assim que for igual a zero e nao executa o resto
        this.state.contador--;
        this.setState({ contador: this.state.contador });
        console.log(this.state.contador)
    }

    definirCorNumero() {
        // if ternario
        let corNum = this.state.contador == 0 ? 'azul' : 'verde'; // se contador for igual a zero fica vermelho senao fica verde

        return corNum;
    }

    renderizarAlunos() {
        return (
            <ul>
                {this.state.alunos.map((aluno) => (
                    <li key={aluno}> {aluno} </li>
                ))}
            </ul>
        )
    }

    renderizarCard() {
        return (
            <div>
                {this.state.alunos.map((aluno) => (
                    <Card key={aluno} nome={aluno}></Card>
                ))}
            </div>
        )
    }

    //// se apagar não muda nada, função feita na cagada e inutil
    nomeBotao(){
        return(
            <div>
                {this.state.lista.map((lista) => (
                    <Botao key={lista} nome={lista}></Botao>
                ))}
            </div>
        )
    }

    // corBotao(){
 

    // }

    randomizar() {
        // floor é para arredondar
        var randomAlunos = this.state.alunos[Math.floor(Math.random() * this.state.alunos.length)]; // pega a lista, randomiza vezes o numero da quantidade de itens que tem na lista

        return randomAlunos;


    }

    definirCorAlunos() {
        let corAlunos = ' corAluno ';

        return corAlunos;
    }

    render() {

        // let corNum = this.state.contador % 2== 0 ? 'vermelho' : 'verde'; // cada numero é uma cor

        return (
            <>
                
                <Tittle frase="testandoProps" cor="#6fff87"></Tittle> {/* props */}

                <Botao classe="rosa"> {this.nomeBotao()}  </Botao> {/* props */}
                <Botao classe="verdeButton"> </Botao> {/* props */}

                <h1 className='titulo'> Hi </h1>
                <div className='subtittle'> <p> How are you boy </p> </div>
                <div className='numContador'> <span className={this.definirCorNumero()}> {this.state.contador} </span> </div>
                <div className='num'>
                    <button onClick={() => this.incrementar({ id: 4, nome: "Thaiza" })}> Incrementar </button>
                    <button onClick={this.decrementar}> Decrementar </button>
                    <h3 className={this.definirCorAlunos()}> {this.randomizar()} </h3>
                </div>

                {this.state.alunos.length == 0 ? ' Não há alunos cadastrados ' : ' Alunos: '}

                {this.renderizarAlunos()} {/* chama a funcao */}

                {this.renderizarCard()}

                <Card nome="wilson" background="#485aff"></Card>
                <Card></Card> {/* props */}

                <Tittle></Tittle> {/* props */}


            </>
        );
    }
}

export default Iniciando;