import React, { useEffect, useState } from 'react';
import Product from '../../Models/Product';
import Rating from '../Rating';

import './index.css'

type ProductGridProps = {
    products: Product[],
}

function ProductGrid(props: ProductGridProps) {

    const { products } = props

    const defaultPage: number = 0
    const [page, setPage] = useState(defaultPage)

    //Max item per page
    const maxItems = 4

    function prevPage() {
        setPage(prevState => {
            return Math.max(0, prevState - 1)
        })
    }

    function nextPage(maxPages: number) {
        setPage(prevState => {
            if (maxPages === 0)
                return 0
            return Math.min(maxPages - 1, prevState + 1)
        })
    }

    function maxPages(products: Product[]) {
        if (products.length > 0)
            return Math.ceil(products.length / maxItems)
        return 1
    }


    return (
        <>
            {products.slice(page * maxItems, page * maxItems + maxItems).map((p, i) => {
                const { title, image, price, rating } = p
                let { rate } = rating
                rate = Math.round(rate)
                return (
                    <div className='product-card' key={'productCard' + i}>
                        <img src={image}></img>
                        <div className='product-card-title'>{title}</div>
                        <Rating rating={rate} />
                        <div className='product-card-seller m05'>Seller</div>
                        <div className='product-card-price'>${price}</div>
                    </div>
                )
            })}

            <div className='pagination'>
                <button onClick={prevPage}>{'<'}</button>
                <div className='search-input'>
                    <input readOnly={true} value={(page + 1) + ' / ' + (maxPages(products))}></input>
                </div>
                <button onClick={() => nextPage(maxPages(products))}>{'>'}</button>
            </div>
        </>
    );
}

export default ProductGrid;
