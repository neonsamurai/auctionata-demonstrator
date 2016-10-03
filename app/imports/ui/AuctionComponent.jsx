import React, {PropTypes} from 'react';
import ItemComponent from './ItemComponent.jsx';

/**
 * @module imports/ui/AuctionComponent
 * Visual representation of an auction. It renders an Item component as child.
 */

/**
 * The auction component. It contains a button which upon click will dispatch an RPC call to place a bid for the aution.
 * @param {Object} item The props object of the item being sold
 * @param {Object} auction The props object of the auction to display.
 * @returns {XML}
 */

const AuctionComponent = ({item, auction}) => {
    const bidHandler = function () {
        Meteor.call('bid.place', auction);
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
