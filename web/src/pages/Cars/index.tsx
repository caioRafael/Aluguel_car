import React from 'react';

import CarItem from '../../components/CarItem';
import Header from '../../components/HeaderPage';

import './styles.css';

function Cars(){
    return(
        <div id="page-cars" className="container">
            <Header
                goBack = "/"
                title = "Alugue um carro"
                titleLink = "Seus alugueis"
                link = "/profile"
            />
            <main>                
                <CarItem
                    model="corsa"
                    year="2020"
                    color="vermelho"
                    cost = {100}
                />                
                <CarItem
                    model="corsa"
                    year="2020"
                    color="vermelho"
                    cost = {100}
                />                
                <CarItem
                    model="corsa"
                    year="2020"
                    color="vermelho"
                    cost = {100}
                />                
                <CarItem
                    model="corsa"
                    year="2020"
                    color="vermelho"
                    cost = {100}
                />
            </main>
        </div>
    );
}

export default Cars;