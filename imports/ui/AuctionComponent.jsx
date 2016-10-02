import React, {PropTypes} from 'react';
import ItemComponent from './ItemComponent.jsx';

const AuctionComponent = ({item, highestBidder}) => {
    return (
        <div>
            <p id="currentPrice">{item.price}</p>
            <p id="highestBidder">{highestBidder}</p>
            <ItemComponent {...item} />
        </div>
    )
}

AuctionComponent.propTypes = {
    item: PropTypes.object.isRequired,
    highestBidder: PropTypes.string
}

export default AuctionComponent;
