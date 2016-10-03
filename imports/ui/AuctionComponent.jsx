import React, {PropTypes} from 'react';
import ItemComponent from './ItemComponent.jsx';
import BiddingComponent from './BiddingComponent.jsx'

const AuctionComponent = ({item, highestBidder}) => {
    const bidHandler = function () {
        Meteor.call('bid.place', item, Meteor.userId());
    }
    return (
        <div>
            <p id="currentPrice">Current price : {item.price}</p>
            <button type="button" onClick={bidHandler}>Place Bid!</button>
            <p id="highestBidder">Highest bidder : {highestBidder}</p>
            <ItemComponent {...item} />
        </div>
    )
}

AuctionComponent.propTypes = {
    item: PropTypes.object.isRequired,
    highestBidder: PropTypes.string
}

export default AuctionComponent;
