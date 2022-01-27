import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
  return (
    <div>
      <Navigation />
      <Logo />
      <h1>A propos</h1>
      <br />
      <p>Bienvenue, c'est un projet que j'ai réalisé avec React. Vous pouvez trier le nombre de pays que vous souhiatez afficher grâce au slider et
        les trier par continents. J'ai utilisé l'API restcountries.com pour récupéré les données des pays.
      </p>
    </div>
  );
};

export default About;
