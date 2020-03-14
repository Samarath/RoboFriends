import React from 'react';

const Card = ({name, email, id}) => {
    return(
        <div className='tc bg-light-green dib dr3 pa3 ma2 grow'>
            <img src={`https://robohash.org/${id}?size=200x200`} alt="robotsimage"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
 }
 export default Card;