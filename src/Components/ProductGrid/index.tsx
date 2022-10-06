import React, { useContext, useEffect, useState } from 'react';
import { GlobalState } from '../../GlobalState';
import Product from '../../Models/Product';
import Rating from '../Rating';

import './index.css'

type ProductGridProps = {
    products: Product[],
}

function ProductGrid(props: ProductGridProps) {

    const { wishList, setWishList } = useContext(GlobalState)


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

    function toggleWishList(id: number) {
        setWishList((prevState) => {
            if (prevState.includes(id))
                return prevState.filter(i => i !== id)
            return [...prevState, id]
        })
    }

    return (
        <>
            {products.slice(page * maxItems, page * maxItems + maxItems).map((p, i) => {
                const { id, title, image, price, rating } = p
                let { rate } = rating
                rate = Math.round(rate)
                return (
                    <div className='product-card' key={'productCard' + i}>
                        <img src={image}></img>

                        <div className='product-wish dimOnHover pointer' onClick={() => toggleWishList(id)}>
                            {
                                wishList.includes(id)
                                    ? <span className='icon icon-heart-fill-primary'></span>
                                    : <span className='icon icon-heart-primary'></span>
                            }

                        </div>

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
