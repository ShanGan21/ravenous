import React from 'react';
import ReactDOM from 'react-dom';


const addresses =[
    {
        imageSrc: '../images/pizza.jpg',
name: 'MarginOtto Pizzeria',
address: '1010 Paddington Way',
city: 'Flavortown',
state: 'NY',
zipCode: '10101',
category: 'Italian',
rating: 4.5,
reviewCount: 90
    },
    {
        imageSrc: '../images/pizza.jpg',
name: 'MarginOtto Pizzeria',
address: '1010 Paddington Way',
city: 'Flavortown',
state: 'NY',
zipCode: '10101',
category: 'Italian',
rating: 4.5,
reviewCount: 90
    },
    {
        imageSrc: '../images/pizza.jpg',
name: 'MarginOtto Pizzeria',
address: '1010 Paddington Way',
city: 'Flavortown',
state: 'NY',
zipCode: '10101',
category: 'Italian',
rating: 4.5,
reviewCount: 90
    }
]
function Business(){
    return(
        <div>
            <img src="../images/classicpizzaa.jpg" />
            <div>
             <h2>Margitta Pizza</h2>
             <p>1010 Pddington way, Bordertown, Ny 10101</p>
             <p> Italian, 4.5 stars, and review count</p>
             </div>
        </div>

    );
}

export default Business;