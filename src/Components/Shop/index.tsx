import React, { useEffect, useState } from 'react';
import Product from '../../Models/Product';
import { getAllCategories, getProducts } from '../../services/product';
import ProductGrid from '../ProductGrid';
import './index.css'

function Shop() {

    const defaultProducts: Product[] = []
    const [products, setProducts] = useState(defaultProducts)

    const [category, setCategory] = useState('all')

    const defaultCategories: string[] = []
    const [categories, setCategories] = useState(defaultCategories)

    const defaultSearchText: string = ''
    const [searchText, setSearchText] = useState(defaultSearchText)

    const defaultPriceRange: string = '$100 - $1000'
    const [priceRange, setPriceRange] = useState(defaultPriceRange)

    const priceRangeLabels = [
        'Any',
        '$0 - $20',
        '$20 - $100',
        '$100 - $1000',
    ]


    useEffect(() => {

        getProducts().then((res: Product[]) => {
            if (res && res.length > 0) {
                setProducts(res)
            }
        })

        getAllCategories().then(res => {
            if (res && res.length > 0) {
                setCategories(['all', ...res])
            }
        })

    }, [])


    function formatProducts(products: Product[], searchText: string, category: string, priceRange: string) {

        products = products.filter(p => p.title.toLowerCase().includes(searchText.toLowerCase()))

        let range: number[]
        if (priceRange.includes('Any'))
            range = [0, 99999]
        if (priceRange.includes('$0 - $20'))
            range = [0, 20]
        if (priceRange.includes('$20 - $100'))
            range = [20, 100]
        if (priceRange.includes('$100 - $1000'))
            range = [100, 1000]

        products = products.filter(p => p.price > range[0] && p.price < range[1])

        if (category.length > 0 && !category.includes('all'))
            products = products.filter(p => p.category === category)

        return products
    }

    function capitalize(str: string) {
        return str[0].toUpperCase() + str.slice(1)
    }


    return (
        <div className='shop '>
            <div className="grid">

                <div className='col-4 filter-panel'>

                    <div className='search-input'>

                        <input value={searchText}
                            onChange={e => setSearchText(e.target.value)}
                            placeholder='Search Products'>
                        </input>

                        <span className='icon icon-search'></span>
                    </div>

                    <div className='filter'>

                        <div className='filter-header'>
                            Price
                            <span className='icon icon-filter dimOnHover pointer' />

                            <div style={{ position: 'relative' }}>
                                <div className='dropdown'>
                                    {priceRangeLabels.map(r => {
                                        return <div onClick={() => setPriceRange(r)}>{r}</div>
                                    })}
                                </div>
                            </div>

                        </div>


                        <div>
                            Range
                            <div className='filter-price-range'>{priceRange}</div>
                        </div>


                        <div className='filter-header'>Product Categories</div>

                        {
                            categories.map((c, i) => {
                                return (
                                    <div className='dimOnHover pointer category' key={'category' + i}
                                        onClick={() => setCategory(c)}>
                                        {capitalize(c)}
                                        <span className='icon icon-right-arrow'></span>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>

                <div className='col-8 product-grid'>

                    <ProductGrid products={formatProducts(products, searchText, category, priceRange)} />

                </div>

            </div>
        </div>
    );
}

export default Shop;
