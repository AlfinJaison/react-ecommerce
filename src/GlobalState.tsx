import React, { createContext, useState } from "react";

class Context{
    wishList:number[] = []
    setWishList:React.Dispatch<React.SetStateAction<number[]>> = ()=>{}
    constructor(){}
}

export const GlobalState = createContext(new Context())

export function GlobalStateProvider(props:any) {

    const defaultWishList: number[] = []
    const [wishList, setWishList] = useState(defaultWishList);

    return (
        <GlobalState.Provider value={{
            wishList,
            setWishList
        }}>
            {props.children}
        </GlobalState.Provider>
    )

}