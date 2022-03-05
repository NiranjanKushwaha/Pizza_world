import React, { createContext, useState } from "react";
const GlobalDataContext = createContext();

const GlobalDataContextProvider = (props) => {
    const [selectedPizzaData, setSelectedPizzaData] = useState([]);

    return (
        <GlobalDataContext.Provider value={{ selectedPizzaData, setSelectedPizzaData }}>
            {props.children}
        </GlobalDataContext.Provider>
    );
};

export { GlobalDataContext, GlobalDataContextProvider };