import React from 'react';
import Card from  './Card'

const CardList = ({robots}) => {
    const CardsComponent = robots.map((user, i) => {
       return ( <Card key={i} name={robots[i].name} email={robots[i].email} id ={robots[i].id}/>)
    })

    return (
        CardsComponent
    )
}

export default CardList;