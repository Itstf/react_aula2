import React, { Component } from 'react'; // importar o React toda vez que for arquivo .jsx

// uma arrow function
const Tittle = (props) => (
    <div className='tittleTest'>
        <h1 style={{color: props.cor}}> {props.frase} *titulo teste c: </h1>
    </div>
)

Tittle.defaultProps = {
    frase: 'a default props funcionou'
}

export default Tittle;