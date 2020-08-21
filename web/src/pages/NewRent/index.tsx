import React from 'react';

import './styles.css';
import Input from '../../components/Input';

function NewRent (){
    return(
        <div id="rent-page" className="container">
            <div className="rent-content">
                <div className="info-car-content">
                    <p>
                        Modelo:{' '}
                        <strong>Corsa</strong>
                    </p>
                    <p>
                        Ano:{' '}
                        <strong>2020</strong>
                    </p>
                    <p>
                        cor:{' '}
                    <strong>Vermelho</strong>
                    </p>
                    <p>
                        Preço/dia:{' '}
                        <strong>100</strong>
                    </p>
                </div>
                <div className="form-rent-content">
                    <form action="">
                        <Input label = "data de Inicio" name ="initial date" type="text"/>
                        <Input label = "data de Entrega" name ="final date" type="text"/>
                        <button type="submit"> Alugar </button>           
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NewRent;