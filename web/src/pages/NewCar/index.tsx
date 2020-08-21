import React from 'react';

import './styles.css';
import Input from '../../components/Input';

function NewCar (){
    return (
        <div id="create-car-page" className="container">
            <div className="form-container">
                <form action="">
                   <Input 
                    label = "Placa"
                    name = "place"
                    type = "text"/>
                   <Input 
                    label = "Placa"
                    name = "place"
                    type = "text"/>
                   <Input 
                    label = "Placa"
                    name = "place"
                    type = "text"/>
                   <Input 
                    label = "Placa"
                    name = "place"
                    type = "text"/> 

                    <button type ="submit"> Cadastrar Carro </button>
                </form>
            </div>
        </div>
    );
}

export default NewCar;