import React, { useEffect } from 'react';
import { getProducts } from '../../services/product';
import './index.css'

function ProductGrid() {

    useEffect(() => {

        getProducts().then(res => {
            console.log(res)
        })

    }, [])

    return (
        <div className='product-grid '>
            <div className="grid">

                <div className='col-3 filter-panel'>


                </div>

                <div className='col-9 product-list'>

                    <div className='product-card'>
                        
                    </div>
                    <div className='product-card'></div>
                    <div className='product-card'></div>
                    <div className='product-card'></div>
                </div>

            </div>
        </div>
    );
}

export default ProductGrid;
