import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
  return (
    <div>
      <Navigation />
      <Logo />
      <h1>À propos</h1>
      <br />
      <p>
        Bienvenu, c'est un projet que j'ai réalisé avec React. Vous pouvez trier le nombre de pays que vous souhaitez afficher grâce au slider et les trier par continent. J'ai utilisé l'API restcountries.com pour récupérer les données des pays.
      </p>
    </div>
  );
};

export default About;
