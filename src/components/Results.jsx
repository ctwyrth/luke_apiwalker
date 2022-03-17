import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Results = () => {
   const { searchFor, byId } = useParams();
   const [searchData, setSearchData] = useState();
   console.log(searchFor, byId);

   const url = 'https://swapi.dev/api/' + searchFor + '/' + byId;
   console.log(url);

   useEffect(() => {
      axios.get(url)
         .then(response => {
            console.log(response)
            setSearchData(response.data)})
         .catch(error => console.log(error))
   }, []);

   return (
      <div className="col-6 mx-auto mt-4 text-center">
         { 
            searchData && 
            <h1 className="display-6">{searchData.name}</h1>
         }
      </div>
   )
}

export default Results