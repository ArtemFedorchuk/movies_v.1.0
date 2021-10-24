import React from 'react';
import { Cube } from '../../atoms';
import IMAGES from '../../assets/images';

const Home = (): any => {
  return (
    <div>
      <h1>Home page</h1>
      <Cube />
      <div style={{ backgroundImage: `${IMAGES.astral}`, width: 200, height: 200 }} />
    </div>
  );
};

export default Home;
