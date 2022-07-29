import React, { Component } from 'react'; // imrc

// cc
class Botao extends Component {
    state = {  } 
    
    static defaultProps = {
        children: "teste"
    }

    render() { 
        return (
            <>
                <button className={this.props.classe}>
                    {this.props.children}
                </button>
            </>
        );
    }
}
 
export default Botao;
