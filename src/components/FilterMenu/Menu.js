import React from 'react';
import './Menu.css';

const FilterMenu = props => {
  const menus = ['Popular', 'Top Rated', 'Upcoming', 'My List', 'Categories'];

  return (
    <div className="filter-menu">
      <ul>
        {menus.map((menu, i) => (
          <li style={{ left: `${i * 120}px` }} key={i}>
            {menu}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterMenu;
