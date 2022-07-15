import React from 'react';
import { Link } from 'react-router-dom';
import './List.css';

const ListEconomic = () => {
  return (
    <div>
      <ul>
        <li className="mt-2">
          <Link className="link text-black" to="/economic">
            ЭКОНОМИКА И ФИНАНСЫ
          </Link>
        </li>
        <ul className="mt-3">
          <li className="mb-2">
            <Link className="link text-blue-500" to="economic/finance">
              Финансовые рынки и рынки капиталов
            </Link>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default ListEconomic;
