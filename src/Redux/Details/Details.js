import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import './details.css'

const Details = () => {
  const location = useLocation()
  const [btnState, setState] = useState(false)
  return (
    <div>
      <Link className="back" to="/">HOME</Link>
      <section className="details">
      <img className="details-img" src={location.state.image} alt={location.state.title} />
        <div>
            <h1 className="details-title">
              {location.state.title} 
            </h1>
            <p className="details-description">
            {location.state.description} 
            </p>
            <button 
            onClick={() =>setState(!btnState) }
             className={btnState? "active":"details-like"}>Like</button>
        </div>
        
      </section>
    </div>
  );
}

export default Details;
