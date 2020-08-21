import React from 'react'

import './styles.css';

import Popular from '../../assets/Images/icons/popular.png'
import { Link } from 'react-router-dom';

interface PageCarProps{
    id?:number
    model:string
    year:string
    color:string
    cost:number
}

const CarItem:React.FC<PageCarProps> = ({id, model, year, color, cost}) => {
    return(
        <article className="car-item">
            <header>
                <img src={Popular} alt="popular"/>
            </header>
            <div className="info-container">
                <p>
                    Modelo:
                    <strong>{model}</strong>
                </p>
                <p>
                    Ano:
                    <strong>{year}</strong>
                </p>
            </div>
            <p>
                cor:
            <strong>{color}</strong>
            </p>
            <p>
                    Preço/dia:{' '}
                <strong>{cost}</strong>
            </p>
            <Link to = "/rent" className="button">
                Alugar Este Carro
            </Link>
        </article>
    );
}

export default CarItem;