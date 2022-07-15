import React from 'react';
import { Link } from 'react-router-dom';
import './List.css';

const ListInfo = () => {
  return (
    <div>
      <ul>
        <li className="mt-2">
          <Link className="link text-black" to="/info">
            ИНФОРМАТИКА
          </Link>
        </li>
        <ul className="mt-3">
          <li className="mb-2">
            <Link className="link text-blue-500" to="/info/informatic">
              Информатика
            </Link>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default ListInfo;
