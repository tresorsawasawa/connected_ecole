import { v4 as uuid } from 'uuid';
import { FaFacebook, FaXTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa6';

const navLinks = [
  {
    id: uuid(),
    title: 'Home',
    path: '/',
  },
  {
    id: uuid(),
    title: 'About',
    path: '/',
  },
  {
    id: uuid(),
    title: 'Contact Us',
    path: '/',
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

const socialData = [
  {
    id: uuid(),
    name: 'Facebook',
    icon: <FaFacebook className="text-[1.5rem]" />,
    path: 'https://www.facebook.com/'
  },
  {
    id: uuid(),
    name: 'X',
    icon: <FaXTwitter className="text-[1.5rem]" />,
    path:'https://x.com/'
  },
  {
    id: uuid(),
    name: 'Linkedin',
    icon: <FaLinkedin className="text-[1.5rem]" />,
    path: 'https://linkedin.com'
  },
  {
    id: uuid(),
    name: 'Instagram',
    icon: <FaInstagram className="text-[1.5rem]" />,
    path: 'https://instagram.com'
  }
]

export {
  navLinks,
  homeCardsData,
  socialData
};

