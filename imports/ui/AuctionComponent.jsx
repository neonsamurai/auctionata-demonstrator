import React, {PropTypes} from 'react';
import ItemComponent from './ItemComponent.jsx';
import BiddingComponent from './BiddingComponent.jsx'

const AuctionComponent = ({item, auction}) => {
    const bidHandler = function () {
        Meteor.call('bid.place', auction, Meteor.userId());
    }
    return (
        <div>
            <p id="currentPrice">Current price : {item.price}</p>
            <button type="button" onClick={bidHandler}>Place Bid!</button>
            <p id="highestBidder">Highest bidder : {auction.highestBidder}</p>
            <ItemComponent {...item} />
        </div>
    )
}

AuctionComponent.propTypes = {
    item: PropTypes.object.isRequired,
    auction: PropTypes.object
}

export default AuctionComponent;
