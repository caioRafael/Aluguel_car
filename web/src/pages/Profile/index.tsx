import React, { useState } from 'react';

import './styles.css'

import Header from '../../components/HeaderPage';
import Modal from '../../components/Modal';

function Profile(){
    const [isModalVisible, setIsModalVisible] = useState(false);

    function handleToggleModalVisible(){
        setIsModalVisible(!isModalVisible);
    }
    return(
        <div id="profile-page" className="container">
            <Header 
                goBack ="/cars"
                title = "Seus Alugueis"
                titleLink = "Carros disponiveis"
                link = "/cars"
            />
            <main>
                <table>
                    <tr>
                        <th>Id:</th>
                        <th>Carro:</th>
                        <th>Preço:</th>
                        <th>Detalhes:</th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <th>corsa</th>
                        <th>R$2000,00</th>
                        <th><button
                            onClick={handleToggleModalVisible} 
                            className="button-modal"
                            >
                            Mais Detalhes</button>
                            {isModalVisible ? <Modal 
                                client ="Caio"
                                model ="corsa"
                                year ="2020"
                                cost ={100}
                                initial={233}
                                final={243}
                                value={1000}

                                onClick={handleToggleModalVisible} 
                            /> : null}
                        </th>
                    </tr>
                </table>
            </main>

        </div>
    );
}

export default Profile;