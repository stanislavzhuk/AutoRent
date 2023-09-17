import { Link } from 'react-router-dom';
import carImage from '../../assets/audi.png';
import css from './Home.module.css';

const Home = () => {
  return (
    <main className={css.container}>
      <img src={carImage} className={css.carImage} alt="Car" />
      <h1 className={css.heroTitle}>
        Your Journey Begins Here with{' '}
        <span className={css.accent}>AutoRent</span>
      </h1>
      <section>
        <h2 className={css.sectionTitle}>Our services</h2>
        <p className={css.sectionText}>
          We offer a wide range of rental cars in Ukraine. Regardless of your
          budget and needs, we have a car that meets your requirements. We
          provide cars of various classes and models to cater to all your
          mobility needs. Our goal is to make your journey comfortable and safe
          by giving you access to high-quality vehicles at affordable prices.
          Make your choice according to your budget and enjoy your trip with us.
        </p>
      </section>
      <section>
        <h2 className={css.sectionTitle}>About us</h2>
        <p className={css.sectionText}>
          Our company specializes in providing cars for rent and has a decade of
          experience in the field. We take pride in serving clients across the
          entire Ukraine, offering a wide range of vehicles to meet various
          mobility needs. Our mission is to ensure your journey is not only
          comfortable but also unforgettable. With a decade of expertise under
          our belt, we are committed to delivering the best rental experience
          possible.
        </p>
      </section>
      <Link to={'/catalog'} className="button-primary button-home">
        Book now
      </Link>
      <p className={css.copyright}>
        &copy; 2023 AutoRent. Created by Stanislav Zhuk.
      </p>
    </main>
  );
};

export default Home;
