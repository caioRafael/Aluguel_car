import React from 'react';

import Input from '../../components/Input';

import './styles.css'
import { Link } from 'react-router-dom';

function Landing(){
    return(
        <div id="page-landing" className="container">
            
            <h1>Alugue um carro!</h1>
            <div className="form-logon">
                <form action="">
                    <h3>Faça seu login</h3>
                    <Input 
                        name = "id" 
                        label = "sua ID" 
                        type="text"
                    />
                    <Input 
                        name = "password" 
                        label = "sau senha" 
                        type="password"
                    />
                    <div className="button-container">
                        <a href  ="/cars "className="button">
                            Entrar
                        </a>
                    </div>
                </form>
                <div className="links">
                    <Link to="/register">Criar uma conta</Link>
                    <Link to="/admin"> {'->'}</Link>
                </div>

            </div>
        </div>
    );
}


export default Landing;