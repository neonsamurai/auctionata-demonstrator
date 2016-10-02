import React, { PropTypes } from 'react';

const ItemComponent = (item) => {
    return (
        <div>
            <h2>Item:</h2>
        </div>
    )
}

ItemComponent.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

export default ItemComponent;
