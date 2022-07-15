import React from 'react';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import logo from '../../../img/logo.svg.png';
import ListMath from '../../List/ListMath';
import ListScience from '../../List/ListScience';
import ListEconomic from '../../List/ListEconomic';
import ListInfo from '../../List/ListInfo';
import ListHistory from '../../List/ListHistory';
import './Navbar.css';
import { Route, Routes, Link } from 'react-router-dom';
import Donat from '../Donat';
import Login from '../Login';
import Registration from '../Registration';
// import Home from '../Home';

const Navbar = () => {
  return (
    <div className="w-full flex items-center h-14 font-medium border-b">
      <ul className="grid grid-cols-12 gap-2 w-full">
        <li className="col-start-3 grid justify-items-start">
          <Menu as="div" className="inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center w-full">
                Курсы
                <ChevronDownIcon
                  className="-mr-1 ml-2 h-5 w-5"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Menu.Items className="window absolute mt-4 left-0 w-full h-80 border-b py-6">
              <ul className="grid grid-cols-12 gap-6">
                <li className="col-start-3 col-span-2 grid">
                  <ListMath />
                </li>
                <li className="col-start-5 col-span-2 grid">
                  <ListScience />
                </li>
                <div className="grid grid-rows-2 col-span-2 ">
                  <li className="col-start-7">
                    <ListEconomic />
                  </li>
                  <li className="col-start-7">
                    <ListInfo />
                  </li>
                </div>
                <li className="col-start-9 col-span-2 grid">
                  <ListHistory />
                </li>
              </ul>
            </Menu.Items>
          </Menu>
        </li>
        <li className="col-start-4 grid content-center ">Поиск</li>
        <li className="col-start-6">
          <img className="h-6 grid justify-items-end" src={logo} alt="" />
        </li>
        <li className="col-start-7 col-span-2 grid justify-items-center content-center">
          <Link className=" text-blue-800" to="/donat">
            Внести пожертвование
          </Link>
        </li>
        <li className="col-start-9 grid content-center">
          <Link className=" text-blue-800" to="/login">
            Войти
          </Link>
        </li>
        <li className="col-start-10 grid content-center">
          <Link className=" text-blue-800" to="/registration">
            Зарегистрироваться
          </Link>
        </li>
      </ul>
      <Routes>
        <Route path="/donat" element={<Donat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        {/* <Route path='/' element={<Home />} /> */}
      </Routes>
    </div>
  );
};

export default Navbar;
