import React, {PropTypes} from 'react';

const AuctionComponent = ({item, highestBidder}) => {
    return (
        <div>
            <p id="currentPrice">{item.price}</p>
            <p id="highestBidder">{highestBidder}</p>
        </div>
    )
}

AuctionComponent.propTypes = {
    item: PropTypes.object.isRequired,
    highestBidder: PropTypes.string
}

export default AuctionComponent;
