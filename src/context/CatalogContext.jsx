import React, { createContext } from "react";
import all_product from '../components/assets/all_product'

export const CatalogContext = createContext(null);

const CatalogContextProvider =(props)=>{
    const contextValue ={all_product};

    return(
        <CatalogContext.Provider value={contextValue}>
            {props.children}
        </CatalogContext.Provider>

    )

}

export default ShopContextProvider