import React from 'react';
import '../../../Style.css';
import usa from '../../../img/us-flag.png';
import ind from '../../../img/india-flag.png';
import mex from '../../../img/mexico-flag.png';
import bra from '../../../img/brazil-flag.png';
import facebook from '../../../img/facebook.svg';
import twitter from '../../../img/facebook.svg';
import insta from '../../../img/facebook.svg';

const Footer = () => {
  return (
    <div className="footer relative">
      <div className="footerContent box-border relative">
        <div className="footerContentMission flex flex-row relative">
          <div className="footerContentDiv flex flex-col h-full pr-10 pb-10">
            <p className="footerContentP pb-2 m-0">
              Наша миссия - предоставить бесплатное образование мирового уровня
              для каждого в любой точке мира.
            </p>
            <p className="footerContentP pb-2 m-0">
              Академия Хана - некоммерческая организация, регулируемая разделом
              501(c)(3) Кодекса законов США.
              <a href=""> Внести пожертвование</a> или стать
              <a href=""> волонтером</a> уже сегодня!
            </p>
          </div>
          <div className="">
            <ul className="footerUl relative grow columns-3">
              <li className="break-inside-avoid-column pb-8">
                <h3 className="pr-2 pb-2 mb-0 box-border">
                  <a href="">О проекте</a>
                </h3>
                <ul>
                  <li className="footerLi pr-2 pb-2 box-border">
                    <a href="">Новости</a>
                  </li>
                  <li className="footerLi pr-2 pb-2 box-border">
                    <a href="">Влияние</a>
                  </li>
                  <li className="footerLi pr-2 pb-2 box-border">
                    <a href="">Наша команда</a>
                  </li>
                  <li className="footerLi pr-2 pb-2 box-border">
                    <a href="">Наши стажеры</a>
                  </li>
                  <li className="footerLi pr-2 pb-2 box-border">
                    <a href="">Наши эксперты</a>
                  </li>
                  <li className="footerLi pr-2 pb-2 box-border">
                    <a href="">Наше руководство</a>
                  </li>
                  <li className="footerLi pr-2 pb-2 box-border">
                    <a href="">Нас поддерживают</a>
                  </li>
                  <li className="footerLi pr-2 pb-2 box-border">
                    <a href="">Наши участники</a>
                  </li>
                  <li className="footerLi pr-2 pb-2 box-border">
                    <a href="">Наши финансы</a>
                  </li>
                  <li className="footerLi pr-2 pb-2 box-border">
                    <a href="">Вакансии</a>
                  </li>
                  <li className="footerLi pr-2 pb-2 box-border">
                    <a href="">Практика</a>
                  </li>
                </ul>
              </li>
              <li className="break-inside-avoid-column pb-8">
                <h3>Контакты</h3>
                <ul>
                  <li className="footerLi pr-2 pb-2 box-border">
                    <a href="">Центр поддержки</a>
                  </li>
                  <li className="footerLi pr-2 pb-2 box-border">
                    <a href="">Помощь сообщества</a>
                  </li>
                  <li className="footerLi pr-2 pb-2 box-border">
                    <a href="">Поделиться своей историей</a>
                  </li>
                  <li className="footerLi pr-2 pb-2 box-border">
                    <a href="">Для прессы</a>
                  </li>
                </ul>
              </li>
              <li className="break-inside-avoid-column pb-8">
                <h3>Скачать наши приложения</h3>
                <ul>
                  <li className="footerLi pr-2 pb-2 box-border">
                    <a href="">Приложение для iOS</a>
                  </li>
                  <li className="footerLi pr-2 pb-2 box-border">
                    <a href="">Приложение для Android</a>
                  </li>
                </ul>
              </li>
              <li className="break-inside-avoid-column pb-8">
                <h3>Курсы</h3>
                <ul>
                  <li className="footerLi pr-2 pb-2 box-border">
                    <a href="">Математика</a>
                  </li>
                  <li className="footerLi pr-2 pb-2 box-border">
                    <a href="">Естественные науки</a>
                  </li>
                  <li className="footerLi pr-2 pb-2 box-border">
                    <a href="">Экономика и финансы</a>
                  </li>
                  <li className="footerLi pr-2 pb-2 box-border">
                    <a href="">Информатика</a>
                  </li>
                  <li className="footerLi pr-2 pb-2 box-border">
                    <a href="">Искусство и гуманитарные науки</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className=" absolute left-0 bottom-5">
            <span className="text-xs font-normal block">Язык</span>
            <div className="pt-5 flex text-xs flex-row items-center justify-between">
              <span className="block font-sans font-normal">Страна</span>
              <a
                className="ml-3 flex items-center justify-between"
                href="https://www.khanacademy.org/"
              >
                <img className="flag" src={usa} alt="США" />
                США
              </a>
              <a
                className="ml-3 flex items-center justify-between"
                href="https://india.khanacademy.org//"
              >
                <img className="flag" src={ind} alt="США" />
                Индия
              </a>
              <a
                className="ml-3 flex items-center justify-between"
                href="https://es.khanacademy.org//"
              >
                <img className="flag" src={mex} alt="США" />
                Мексика
              </a>
              <a
                className="ml-3 flex items-center justify-between"
                href="https://pt.khanacademy.org//"
              >
                <img className="flag" src={bra} alt="США" />
                Бразилия
              </a>
            </div>
          </div>
        </div>
        <div className="py-2 border-t flex text-xs flex-row items-center">
          © 2022 Khan Academy <br />
          <a className="ml-4 p-0 m-0" href="">
            Условия использования материалов сайта
          </a>
          <a className="ml-4 p-0 m-0" href="">
            Политика конфиденциальности
          </a>
          <a className="ml-4 p-0 m-0" href="">
            Cookie Notice
          </a>
          <div className="">
            <a href="https://www.facebook.com/khanacademy">
              <img
                className="opacity-60 inline-block h-6 w-6"
                src={facebook}
                alt=""
              />
            </a>
            <a href="https://twitter.com/khanacademy">
              <img
                className="opacity-60 inline-block h-6 w-6"
                src={twitter}
                alt=""
              />
            </a>
            <a href="https://instagram.com/khanacademy">
              <img className="opacity-60 inline-block h-6 w-6" src={insta} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
