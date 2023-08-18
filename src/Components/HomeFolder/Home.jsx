import Feature from '../FeaturedFolder/Feature';
import HeroSection from '../HeroSectionFolder/HeroSection';
import Service from '../ServicesFolder/Service';
import Trusted from '../TrustedFolder/Trusted';
import './Home.css';

const Home = () => {

  const HeroSectionName = {
    name: "Vanshaj Store",
  };

  return (
    <>
      <HeroSection dataName = {HeroSectionName} />
      <Feature/>
      <Service/>
      <Trusted/>
    </>
  )
};

export default Home;