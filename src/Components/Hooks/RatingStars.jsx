import React from 'react';
import ReactStars from 'react-rating-stars-component';

const RatingStars = ({ count = 5, value = 0, size = 24, activeColor = "#ffd700", edit = false }) => {
    return (
        <ReactStars
            count={count}
            value={value}
            size={size}
            activeColor={activeColor}
            edit={edit}
        />
    );
};

export default RatingStars;
