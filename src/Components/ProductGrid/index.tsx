import React, { useEffect, useState } from 'react';
import Product from '../../Models/Product';
import { getProducts } from '../../services/product';
import Rating from '../Rating';
import './index.css'

function ProductGrid() {

    const defaultProduct: Product = new Product()
    const [products, setProducts] = useState([defaultProduct])

    const defaultPage: number = 0
    const [page, setPage] = useState(defaultPage)

    const defaultMaxPages: number = 0
    const [maxPages, setMaxPages] = useState(defaultMaxPages)

    //Max item per page
    const maxItems = 6

    useEffect(() => {

        getProducts().then((res: Product[]) => {
            if (res && res.length > 0) {
                setProducts(res)
                setMaxPages(Math.ceil(res.length / maxItems))
            }

        })

    }, [])

    function prevPage() {
        setPage(prevState => {
            return Math.max(0, prevState - 1)
        })
    }

    function nextPage() {
        setPage(prevState => {
            if(maxPages === 0)
                return 0
            return Math.min(maxPages - 1, prevState + 1)
        })
    }

    return (
        <div className='product-grid '>
            <div className="grid">

                <div className='col-4 filter-panel'>

                    <div className='search-input'>
                        <input placeholder='Search Products'></input>
                        <span className='icon icon-search'></span>
                    </div>
                </div>

                <div className='col-8 product-list'>

                    {products.slice(page * maxItems, page * maxItems + maxItems).map(p => {
                        const { title, image, price, rating } = p
                        let { rate } = rating
                        rate = Math.round(rate)
                        return (
                            <div className='product-card'>
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
                            <input value={(page+1)+' / '+(maxPages)}></input>
                        </div>
                        <button onClick={nextPage}>{'>'}</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProductGrid;
