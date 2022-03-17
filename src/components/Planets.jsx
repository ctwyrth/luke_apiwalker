import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Planets = () => {
   const { byId } = useParams();
   const [searchData, setSearchData] = useState();
   const [searchAllData, setSearchAllData] = useState();
   let navigate = useNavigate();

   const handleOnClick = (id) => {
      let siteUrl = '/planets/' + id;
      setSearchAllData();
      navigate(siteUrl);
   }

   const url = 'https://swapi.dev/api/planets/' + byId;

   useEffect(() => {
      if (!byId) {
         axios.get('https://swapi.dev/api/planets')
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
               <table className="w-50 table mx-auto text-start">
                  <thead className="bg-light">
                     <tr>
                        <th colspan="2" className="text-center">Celestial Details:</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <th>Orbital Period:</th>
                        <td>{searchData.orbital_period} days</td>
                     </tr>
                     <tr>
                        <th>Diameter:</th>
                        <td>{searchData.diameter}km</td>
                     </tr>
                     <tr>
                        <th>Climate:</th>
                        <td>{searchData.climate}</td>
                     </tr>
                     <tr>
                        <th>Population:</th>
                        <td>{searchData.population}</td>
                     </tr>
                  </tbody>
               </table>
            </> }
      </div>
   )
}

export default Planets