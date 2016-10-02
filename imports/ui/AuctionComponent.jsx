import React, {PropTypes} from 'react';
import ItemComponent from './ItemComponent.jsx';

const AuctionComponent = ({item, highestBidder}) => {
    const {name, description, price} = item;

    return (
        <div>
            <p id="currentPrice">{price}</p>
            <p id="highestBidder">{highestBidder}</p>
            <ItemComponent name={name} description={description} price={price} />
        </div>
    )
}

AuctionComponent.propTypes = {
    item: PropTypes.object.isRequired,
    highestBidder: PropTypes.string
}

export default AuctionComponent;
