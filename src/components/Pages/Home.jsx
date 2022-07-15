import React from 'react';
import Academy from './Home/Academy';
import Anjali from './Home/Anjali';
import Children from './Home/Children';
import Partner from './Home/Partner';
import Result from './Home/Result';
import SecretHana from './Home/SecretHana';
import Sensei from './Home/Sensei';
import Student from './Home/Student';



const Home = () => {
  return (
    <div>
      <Result />
      <SecretHana />
      <Sensei />
      <Student />
      <Anjali />
      <Children />
      <Academy />
      <Partner />
    </div>
  );
};

export default Home;
