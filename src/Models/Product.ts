type Rating = {
    count: number,
    rate: number
}

export default class Product {
    title:string = '';
    price:number = 0;
    id:number = 0;
    category:string = '';
    description:string = '';
    image:string = '';
    rating:Rating = {
        count:0,
        rate:0
    }

    constructor(){}
}
