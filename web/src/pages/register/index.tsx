import React from 'react';
import Input from '../../components/Input';

import './styles.css'

import car from '../../assets/Images/car.png'

function Register(){
    return(
        <div id="page-register" className="container">
            <div className="register">
                <img src={car} alt="carro"/>
                <form action="">
                    <h1>Crie uma nova conta!!</h1>
                    <Input 
                        name = "name" 
                        label = "seu nome completo" 
                        type="text"
                    />
                    <Input 
                        name = "email" 
                        label = "seu email" 
                        type="text"
                    />
                    <Input 
                        name = "password" 
                        label = "sau senha" 
                        type="password"
                    />
                    <Input 
                        name = "whatsapp" 
                        label = "seu whatsapp" 
                        type="text"
                    />
                    <Input 
                        name = "cnh" 
                        label = "sau cnh" 
                        type="text"
                    />
                    <div className="button-container">
                        <a href  ="/"className="button" type="submite">
                            Entrar
                        </a>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default Register;