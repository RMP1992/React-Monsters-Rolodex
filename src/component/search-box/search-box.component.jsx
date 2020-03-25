import React from 'react';
import './search-box.style.css';

export const SearchBox = ({placeholder, handleChange}) => (
    <div className="search-container">
         <input className="search" type="search" placeholder={placeholder} onChange={handleChange}
        //if we want to see the changes to the state we must call a second function and console.log 
        //here we have trigered the setState whenever the user has tyoed something in the search bar (line 5, 6), which sets the state of searchField, which causes our component to re-render and re-call the render method, this then re-filters out the monsters by call the monsters.filter (line 24 on App.js) which sets an new array, which have passed to out<CardLis/>
         />
    </div>
)