import React from 'react';

const Card = ({name,email,username,id,address}) => {
    return(
            <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                <img src={`https://robohash.org/${id}?200x200`}  alt="robot-pic" />
                <div>
                    <h2>{id+". "+name}</h2>
                    <p>{username}</p>
                    <p>{email}</p>
                    <p>{address.street}</p>
                    <p>{address.zipcode}</p>
                </div>

            </div>
    );
}

export default Card;