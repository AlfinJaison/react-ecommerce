import React, { useEffect, useState } from 'react';
import Product from '../../Models/Product';
import { getAllCategories, getProducts } from '../../services/product';
import ProductGrid from '../ProductGrid';
import './index.css'

function Shop() {

    const defaultProducts: Product[] = []
    const [products, setProducts] = useState(defaultProducts)

    const [category, setCategory] = useState('')

    const defaultCategories: string[] = []
    const [categories, setCategories] = useState(defaultCategories)

    const defaultSearchText: string = ''
    const [searchText, setSearchText] = useState(defaultSearchText)

    useEffect(() => {

        getProducts().then((res: Product[]) => {
            if (res && res.length > 0) {
                setProducts(res)
            }
        })

        getAllCategories().then(res => {
            if (res && res.length > 0) {
                setCategories(res)
            }
        })

    }, [])


    function formatProducts(products: Product[], searchText: string, category: string) {

        products = products.filter(p => p.title.toLowerCase().includes(searchText.toLowerCase()))

        if (category.length > 0)
            products = products.filter(p => p.category === category)

        return products
    }

    function capitalize(str:string){
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

                    <div className='filter-category'>
                        <div className='filter-header'>Product Categories</div>

                        {
                            categories.map((c, i) => {
                                return (
                                    <div className='dimOnHover pointer' key={'category' + i}
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

                    <ProductGrid products={formatProducts(products, searchText, category)} />

                </div>

            </div>
        </div>
    );
}

export default Shop;
