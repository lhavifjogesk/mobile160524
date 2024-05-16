import React, {createContext, useState} from "react";

const CarContext = createContext();

export function CarProvider(children){

    const [carros, setCarros] = useState([]);

    return(
        <CarContext.Provider value={{carros, setCarros}}>
            {children}
        </CarContext.Provider>
    )
}

export {CarContext}