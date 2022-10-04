import React, { useEffect } from 'react';
import './index.css'

type RatingProps = {
    rating: number;
}

export default function Rating(props: RatingProps) {

    const { rating } = props;

    return (
        <div>
            {Array.from(Array(rating), (e, i) => {
                return (
                    <span key={'rating'+i} className='icon icon-star'></span>
                )
            })}
        </div>
    );
}
