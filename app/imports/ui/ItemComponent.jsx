import React, { PropTypes } from 'react';

/**
 * @module imports/ui/ItemComponent
 * Visual representation of an auction. It renders an Item component as child.
 */

/**
 * The Item component. It will be presented within an AuctionComponent.
 * @param {Object} item The props object representing the auction Item.
 * @returns {XML} ItemComponent
 */
const ItemComponent = (item) => {
    const url = () => '/pictures/' + item.picture;
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
