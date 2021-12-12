import { createContext, useContext, useState } from "react";

const ResultContext = createContext();

const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // /videos, /search, /images
  const getResults = async (type) => {
    setIsloading(true);

    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "x-user-agent": "desktop",
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": "ebede5a2a1msh01ea39151d2325dp12d2c0jsn202d82316a9c",
      },
    });

      const data = await response.json();
      
      console.log(data)

    setResults(data);
    setIsloading(false);

   
  };
    
     return (
       <ResultContext.Provider
         value={{ getResults, results, searchTerm, setSearchTerm, isloading }}
       >
         {children}
       </ResultContext.Provider>
     );
};

export const useResultContext = () => useContext(ResultContext);
