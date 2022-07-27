import React, { Component } from 'react';

class  Iniciando extends Component {

    state = { 
        contador : 0,
        alunos: ["Hillary", "Zoe", "Eloah", "Eloah"]
     } 

    incrementar = () => {
        this.state.contador++; // adiciona mais um no contador
        this.setState({ contador : this.state.contador }); // pega valor do contador
        console.log(this.state.contador) // exibe no console
    }

    decrementar = () => {
        // nao pode ser menor que 0
        if (this.state.contador == 0) return; // return ja sai da funcao assim que for igual a zero e nao executa o resto
        this.state.contador--; 
        this.setState({ contador : this.state.contador }); 
        console.log(this.state.contador) 
    }

    definirCorNumero(){
        // if ternario
        let corNum = this.state.contador == 0 ? 'vermelho' : 'verde'; // se contador for igual a zero fica vermelho senao fica verde
        
        return corNum;
    }

    renderizarAlunos(){
        return(
            <ul>
                {this.state.alunos.map((aluno) => (
                    <li key={aluno}> {aluno} </li>
                ))}
            </ul>
        )
    }

    randomizar(){
        var randomAlunos = this.state.alunos[Math.floor(Math.random() * this.state.alunos.length)]; // pega a lista, randomiza vezes o numero da quantidade de itens que tem na lista

        return randomAlunos;

       
    }

    definirCorAlunos(){
        let corAlunos = 'corAluno';

        return corAlunos;
    }

    render() { 
        // if ternario
        // let corNum = this.state.contador % 2== 0 ? 'vermelho' : 'verde'; // cada numero é uma cor
    
        return (
            <>
                <h1 className='titulo'> Hi </h1>
                <p> How are you boy </p>
                <div className='num'>
                    <span className={this.definirCorNumero()}> {this.state.contador} </span>
                    <button onClick={this.incrementar}> Incrementar </button>
                    <button onClick={this.decrementar}> Decrementar </button>
                </div>

                {this.state.alunos.length == 0 ? ' Não há alunos cadastrados ' : ' Alunos: '}

                {this.renderizarAlunos()} {/* chama a funcao */}
                
                <h3 className={this.definirCorAlunos()}> {this.randomizar()} </h3>
            </>
        );
    }
}
 
export default Iniciando;