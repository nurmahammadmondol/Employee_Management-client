// components/CompanyLogos.jsx
import Marquee from 'react-fast-marquee';
import { useEffect, useState } from 'react';

const logos = [
  { src: 'https://i.ibb.co/5XwGqr5w/autodesk-logo.png', alt: 'autodesk' },
  { src: 'https://i.ibb.co/XrZDZt8c/Hub-Spot-Logo.png', alt: 'Hub-Spot' },
  {
    src: 'https://i.ibb.co/MxqqzFg8/bitdefender-logo.png',
    alt: 'bitdefender',
  },
  {
    src: 'https://i.ibb.co/mV2ZsqVw/Shopify.webp',
    alt: 'Shopify',
  },
  {
    src: 'https://i.ibb.co/XZfb2RNd/Atlassian-Logo.png',
    alt: 'Atlassian',
  },
  {
    src: 'https://i.ibb.co/JwC4Dxyt/dropbox-logo.png',
    alt: 'dropbox',
  },
  {
    src: 'https://i.ibb.co/WqMjFjR/ansys-logo.png',
    alt: 'ansys',
  },
];

const CompanyLogos = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100); // delay to trigger in-view animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-6 bg-white overflow-hidden">
      <Marquee pauseOnHover={true} speed={40} gradient={false}>
        {logos.map((logo, index) => (
          <div
            key={index}
            className={`mx-6 transition-all duration-500 ${
              animate ? 'fade-blur-in' : ''
            }`}
          >
            <img src={logo.src} alt={logo.alt} className="h-14 w-28 lg:w-36" />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default CompanyLogos;
