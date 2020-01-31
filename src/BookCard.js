import React from 'react';

import './BookCard.css';

const BookCard = (props) => {
    return(
        <div className="card-container">
           
            <img src={props.image} alt="" />

            <div className="desc">
                <h2>{props.title}</h2>
                <h3>{props.author}</h3>
                <p>{props.published}</p>
            </div>

                        
            <a className="btn" href="javascript:void(0)">
                Descrição
                <div className="popup">
                    <p>{props.description}</p>
                </div>
            </a>

        </div>
    )
}

export default BookCard;