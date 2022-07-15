import React from 'react';
import { Link } from 'react-router-dom';
import './List.css';

const ListHistory = () => {
  return (
    <div>
      <ul>
        <li className="mt-2">
          <Link className="link text-black" to="/hisotry">
            ИСКУССТВО И ГУМАНИТАРНЫЕ НАУКИ
          </Link>
        </li>
        <ul className="mt-3">
          <li className="mb-2">
            <Link className="link text-blue-500" to="/history/world">
              Всемирная история
            </Link>
          </li>
          <li>
            <Link className="link text-blue-500" to="/history/art">
              История искусства
            </Link>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default ListHistory;
