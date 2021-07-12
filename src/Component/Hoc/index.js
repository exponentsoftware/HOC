import Axios from "axios";
import { useState,useEffect } from "react";
// Sending two parameters component an the api
const HOC = (OldComponent, api) => {

    const EnhancedComponent = () => {
        const [apiData, getApiData] = useState([])
        
        useEffect(() => {
          getData()
        }, [])
        // Fetching the api
        const getData=async()=>{
            const fetchList=await Axios(api)
            getApiData(fetchList.data.hits)            
        }
        // sending the api fetch data as list
      return <OldComponent list={apiData} />;
    };
    return EnhancedComponent;
  };
  
export default HOC;
