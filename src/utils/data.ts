import { v4 as uuid } from 'uuid';

const navLinks = [
  {
    id: uuid(),
    title: 'about'
  },
  {
    id: uuid(),
    title: 'home'
  },
  {
    id: uuid(),
    title: 'home'
  },
]

const homeCardsData = [
  {
    id: uuid(),
    title: 'Ravatech',
    description: 'Ravatech est la société mère de Connected Ecole. Elle offre différents services, du marketing moderne à la numérisation des anciens systèmes manuels.'
  },
  {
    id: uuid(),
    title: 'Connected Ecole',
    description: "Rendre les donnees scolaires accessibles aux parents et aux superviseurs de l'education pour une fracabilite integrale. Connected ecole est le moyen de communication dont vous aves besoin."
  },
  {
    id: uuid(),
    title: 'Kivusearch',
    description: 'Ravatech est la société mère de Connected Ecole. Elle offre différents services, du marketing moderne à la numérisation des anciens systèmes manuels.'
  }
]

export {
  navLinks,
  homeCardsData
};

