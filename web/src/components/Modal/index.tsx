import React, { SelectHTMLAttributes } from 'react';
 
import './styles.css'

interface PageModalProps extends SelectHTMLAttributes <HTMLButtonElement>{
    client:string
    model: string
    year: string
    cost: number
    initial: number
    final: number
    value: number
}

const Modal: React.FC<PageModalProps> = ({client, model, year, cost, initial, final, value, ...rest}) => {
    function convertNumberToDate(date:number){
        const month = Math.trunc(date/30);
        const day = date%30;
        
        return (day + '/' + month);
    }

    return(
        <div className="modal">
            <div className="modal-container">
                <button className="close-modal" {...rest}>Close</button>
                <div className="content">
                    <p className = "name-client">
                        Cliente: <strong>{client}</strong>
                    </p>
                    <div className="details-car">
                        <p>Carro: <strong>{model}</strong></p>
                        <p>Ano: <strong>{year}</strong></p>
                        <p>Custo diario: <strong>{cost}</strong></p>
                    </div>
                    <div className="details-rent">
                        <p>Data inicial: <strong>{convertNumberToDate(initial)}</strong></p>
                        <p>Data final: <strong>{convertNumberToDate(final)}</strong></p>
                        <p>Valor final: <strong>{value}</strong></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;