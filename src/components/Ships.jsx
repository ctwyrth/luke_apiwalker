import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Ships = () => {
   const { byId } = useParams();
   const [searchData, setSearchData] = useState();
   const [searchAllData, setSearchAllData] = useState();
   let navigate = useNavigate();

   const handleOnClick = (id) => {
      let siteUrl = '/starships/' + id;
      setSearchAllData();
      navigate(siteUrl);
   }

   const url = 'https://swapi.dev/api/starships/' + byId;

   useEffect(() => {
      if (!byId) {
         axios.get('https://swapi.dev/api/starships')
            .then(response => {
               console.log(response.data.results)
               setSearchAllData(response.data.results)})
            .catch(error => console.log(error))
      } else {
         axios.get(url)
            .then(response => {
               console.log(response.data)
               setSearchData(response.data)})
            .catch(error => console.log(error))
      }
   }, [byId])

   return (
      <div className="container mx-auto mt-4 text-center">
         { searchAllData &&
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
               { searchAllData.map((item, idx) => {
                  return (
                  <div className="col" key={idx}>
                     <div className="card" onClick={() => handleOnClick(idx + 1)}>
                        <div className="card-body">
                           <h5 className="card-title mb-0">{ item.name }</h5>
                        </div>
                     </div>
                  </div>)}
               )}
            </div>
         }
         { searchData && 
            <>
               <h1 className="display-6">{searchData.name}</h1>
               <table className="w-75 table mx-auto text-start">
                  <thead className="bg-light">
                     <tr>
                        <th colspan="2" className="text-center">Starship Details:</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <th>Length:</th>
                        <td>{searchData.length}m</td>
                     </tr>
                     <tr>
                        <th>Crew:</th>
                        <td>{searchData.crew} souls</td>
                     </tr>
                     <tr>
                        <th>Hyperdrive Rating:</th>
                        <td>{searchData.hyperdrive_rating}</td>
                     </tr>
                     <tr>
                        <th>Class:</th>
                        <td>{searchData.starship_class}</td>
                     </tr>
                     <tr>
                        <th>Manufacturer:</th>
                        <td>{searchData.manufacturer}</td>
                     </tr>
                  </tbody>
               </table>
            </> }
      </div>
   )
}

export default Ships