import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const People = () => {
   const { byId } = useParams();
   const [searchData, setSearchData] = useState();
   const [searchAllData, setSearchAllData] = useState();
   const [homeworld, setHomeworld] = useState();
   let navigate = useNavigate();

   const handleOnClick = (id) => {
      let siteUrl = '/people/' + id;
      setSearchAllData();
      navigate(siteUrl);
   }
   
   const url = 'https://swapi.dev/api/people/' + byId;

   useEffect(() => {
      if (!byId) {
         axios.get('https://swapi.dev/api/people')
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
                        <th colSpan="2" className="text-center">Personal Details:</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <th>Height:</th>
                        <td>{searchData.height}cm</td>
                     </tr>
                     <tr>
                        <th>Weight:</th>
                        <td>{searchData.mass}kg</td>
                     </tr>
                     <tr>
                        <th>Hair Color:</th>
                        <td>{searchData.hair_color}</td>
                     </tr>
                     <tr>
                        <th>Eye Color:</th>
                        <td>{searchData.eye_color}</td>
                     </tr>
                     <tr>
                        <th>Homeworld:</th>
                        <td><a href={ searchData.homeworld.slice(21) }>{ searchData.homeworld }</a></td>
                     </tr>
                  </tbody>
               </table>
            </> }

      </div>
   )
}

export default People

// onClick={() => handleOnClick(idx + 1) }

/* <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 g4">
   <div className="col">
      <div className="card">
         <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
         </div>
      </div>
   </div>
</div> */

// {axios.get(searchData.homeworld).then(response => setHomeworld(response.data.name)).catch(error => console.log(error))}