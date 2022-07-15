import React from 'react';
import { Link } from 'react-router-dom';
import './List.css'

const ListScience = () => {
  return (
    <div>
      <ul>
        <li className='mt-2'>
          <Link className='link text-black' to="/science">ЕСТЕСТВЕННЫЕ НАУКИ</Link>
        </li>
        <ul className="mt-3">
          <li className="mb-2">
            <Link className='link text-blue-500' to="/science/biology">Биология</Link>
          </li>
          <li className="mb-2">
            <Link className='link text-blue-500' to="/science/electric">Электротехника</Link>
          </li>
          <li className="mb-2">
            <Link className='link text-blue-500' to="/science/physic">Физика</Link>
          </li>
          <li className="mb-2">
            <Link className='link text-blue-500' to="/science/organ">Органическая химия</Link>
          </li>
          <li className="mb-2">
            <Link className='link text-blue-500' to="/science/chemic">Химия</Link>
          </li>
          <li className="mb-2">
            <Link className='link text-blue-500' to="/science/cosmo">Космология и астрономия</Link>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default ListScience;
