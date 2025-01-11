import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Cards from '../../components/Cards';
import AboutUs from '../../components/AboutUs';
import Quiz from '../../components/Quiz';
import Company from '../../components/Conpany';
import Question from '../../components/Questions';
import Footer from '../../components/Footer';
import Contact from '../../components/Contacts';
import Penultimete from '../../components/Penultimate';
import Cart from '../../components/Cart';


const Home = () => {

  return (
    <div>
      <Header />
      {/* <Cart /> */}
      <Hero />
      <Cards />
      <AboutUs />
      <Quiz />
      <Company />
      <Question />
      <Contact />
      <Penultimete />
      <Footer />
    </div>
  );
};

export default Home;