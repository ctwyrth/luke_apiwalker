import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
   const [id, setId] = useState("");
   const [searchType, setSearchType] = useState("");
   let navigate = useNavigate();

   const handleOnSubmit = (e) => {
      e.preventDefault();
      const url = '' + searchType + '/' + id;
      setId('');
      setSearchType('');
      navigate(url);
   }

   return (
      <div className="container-fluid bg-light border-bottom border-dark">
         <section className="container align-items-center bg-light p-3">
            <form onSubmit={ handleOnSubmit } className="col-6 mx-auto">
               <div className="input-group input-group-sm">
                  <span className="input-group-text">Search For:</span>
                  <select className="form-select" name="searchType" id="searchType" onChange={(e) => setSearchType(e.target.value) } value={ searchType }>
                     <option hidden>Choose...</option>
                     <option value="people">Person</option>
                     <option value="planets">Planet</option>
                     <option value="starships">Ship</option>
                  </select>
                  <span className="input-group-text">By ID:</span>
                  <input type="text" name="searchId" id="searchId" className="form-control" onChange={(e)  => setId(e.target.value) } value={ id } />
                  <input type="submit" value="Find" className="btn btn-primary bg-gradient" />
               </div>
            </form>
         </section>
      </div>
   )
}

export default Search

// { searchData ? <Results results={ searchData } /> : <span>...waiting</span> }