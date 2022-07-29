import React, { Component } from 'react';

class Card extends Component {
    state = { 
    } 

    static defaultProps = {
        nome: 'anonimo'
    }


    render() { 
        return (
            <>
                <div className='card'>     
                <p style={{background: this.props.background}}> {this.props.nome} </p> 
                </div>
            </>
        );
    }
}
 
export default Card;