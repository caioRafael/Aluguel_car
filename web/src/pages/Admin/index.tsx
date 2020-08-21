import React from 'react';

import './styles.css';

import Header from '../../components/HeaderPage';
import { Link } from 'react-router-dom';

function Admin (){
    return(
        <div id="admin-page" className="container">
            <Header 
                goBack = "/"
                link = "/admin"
                titleLink = "Alugueis"
                title = "Página do Administrador">
                <Link to="/new" className="button-new-car">
                Novo Carro
                </Link>
            </Header> 
            <div className="content">                
                <main>
                    <table>
                        <tr>
                            <th>Placa</th>
                            <th>Ano</th>
                            <th>Cor</th>
                            <th>Modelo</th>
                            <th>Diaria</th>
                            <th>Deletar</th>
                        </tr>
                        <tr>
                            <th>nnr-5145</th>
                            <th>2020</th>
                            <th>vermelho</th>
                            <th>Corsa</th>
                            <th>R$100.00</th>
                            <th><button>Deletar</button></th>
                        </tr>
                    </table>
                </main>
            </div>
        </div>
    );
}

export default Admin;