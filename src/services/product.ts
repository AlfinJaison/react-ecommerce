
export async function getProducts() {
    let res = await fetch('https://fakestoreapi.com/products')
    let data = await res.json()
    return data
}

export async function getProduct(id:number) {
    let res = await fetch(`https://fakestoreapi.com/products${id}`)
    let data = await res.json()
    return data
}

export async function getAllCategories() {
    let res = await fetch(`https://fakestoreapi.com/products/categories`)
    let data = await res.json()
    return data
}
