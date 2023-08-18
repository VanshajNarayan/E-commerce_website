import { useProductContext } from "../ContextFolder/ProductContext";
import HeroSection from "../HeroSectionFolder/HeroSection";
import "./About.css";

const About = () => {

  const myName = useProductContext();

  const SectionName = {
    name: "Vanshaj Ecommerce",
  };

  return (
    <>
      <HeroSection dataName = {SectionName} />
    </>
  )
};

export default About;