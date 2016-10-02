import React, { PropTypes } from 'react';

const ItemComponent = (item) => {
    const url = () => '/public/pictures/' + item.picture;
    console.log(url());
    return (
        <div>
            <h2 id="item-name">Item: {item.name}</h2>
            <p id="item-price">Starting price: {item.price}</p>
            <p id="item-description">Description: {item.description}</p>

            <div><img id="item-picture" src={url()} alt={item.description} /></div>
        </div>
    )
}

ItemComponent.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    picture: PropTypes.string
}

export default ItemComponent;
