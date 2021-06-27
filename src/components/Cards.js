import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1> Check out these epic destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-9.jpg"
                            text="Explora la cascada oculta del Amazonas"
                            label="Adventure"
                            path='/products'
                        />
                        <CardItem
                            src="images/img-2.jpg"
                            text="Viaja a través de las Islas de Bali en un crucero privado"
                            label="Luxury"
                            path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-3.jpg"
                            text="Adentrate en el Océano Atlántico"
                            label="Mistery"
                            path='/services'
                        />
                        <CardItem
                            src="images/img-4.jpg"
                            text="Ten la experiencia de jugar en el Himalaya"
                            label="Sport"
                            path='/services'
                        />
                        <CardItem
                            src="images/img-8.jpg"
                            text="Recorre el desierto Sahara"
                            label="Adrenaline"
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
