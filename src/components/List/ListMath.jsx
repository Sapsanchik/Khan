import React from 'react';
import './List.css';
import { Link } from 'react-router-dom';

const ListMath = () => {
  return (
    <div>
      <ul>
        <li className="mt-2">
          <Link className='link text-black' to="/math">МАТЕМАТИКА</Link>
        </li>
        <ul className="mt-3">
          <li className="mb-2">
            <Link className='link text-blue-500' to="/math/trigonometry">Тригонометрия</Link>
          </li>
          <li className="mb-2">
            <Link className='link text-blue-500' to="/math/statistic">Статистика для средней школы</Link>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default ListMath;
