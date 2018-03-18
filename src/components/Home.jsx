import React from 'react';
import Hero from './Hero';
import Skills from './Skills';
import Gallery from './Gallery';
import Bio from './Bio';

function Home() {
  return(
    <div>
      <Hero />
      <Skills />
      <Gallery />
      <Bio />
    </div>
  );
}

export default Home;
