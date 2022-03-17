import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Search from './Search';

const Navigation = (props) => {
   return (
      <>
         <div className="container-fluid bg-dark bg-gradient border-bottom border-2 border-dark">
            <div className="row mx-auto" style={{width: 85+'%'}}>
               <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient ">
                  <div className="container-fluid">
                     <span className="navbar-brand">May the ROUTE be with you!</span>
                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                     </button>
                     <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                           <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                           <li className="nav-item"><Link to="/people" className="nav-link">People</Link></li>
                           <li className="nav-item"><Link to="/planets" className="nav-link">Planets</Link></li>
                           <li className="nav-item"><Link to="/ships" className="nav-link">Starships</Link></li>
                        </ul>
                     </div>
                  </div>
               </nav>
            </div>
         </div>
         <Search />
         <Outlet />
      </>
   )
}

export default Navigation
