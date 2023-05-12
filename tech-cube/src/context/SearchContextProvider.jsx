import { Box } from "@chakra-ui/react";
import { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchContextProvider = ({children}) => {
  const [status, setStatus] = useState(false);
    
    return (
        <SearchContext.Provider value={{status, setStatus}}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContextProvider