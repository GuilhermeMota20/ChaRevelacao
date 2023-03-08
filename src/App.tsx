import babyChar from './assets/babyChar.svg';
import styles from './home.module.scss';
import { MdLocationOn } from 'react-icons/md';
import { IoTime } from 'react-icons/io5';
import { BsCalendarDateFill } from 'react-icons/bs';
import ButtonConfirm from './components/ButtonConfirm/ButtonConfirm';

function App() {
  return (
    <>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>Olá, Seja bem vindo(a) ao...</span>
          <h1 className={styles.primaryText}>CHÁ DE BEBE <br /> <span>REVELAÇÃO</span>!</h1>

          <div>
            <p>Venha comemorar essa data conosco</p>

            <div className={styles.locationContainer}>
              <div>
                <span>
                  <BsCalendarDateFill className={styles.icon} />
                  23/04/2023
                </span>
                <span>
                  <IoTime className={styles.icon} />
                  Das 15:00 até 20:00
                </span>
              </div>
              <a href="https://goo.gl/maps/vsX4sk1CjNqq6Zgv5" target={'_blank'}>
                <span>
                  <MdLocationOn className={styles.icon} />
                  Rua anum Dourado, Jardim Dom Jose, 260.
                </span>
              </a>
            </div>

            <ButtonConfirm />
          </div>
        </section>

        <div className={styles.teste}>
          <img className={styles.imgBabyChar} src={babyChar} alt="Baby" width={436} />
        </div>
      </main>

      <span className={styles.hexagon} id={styles.hexagon1}></span>
      <span className={styles.hexagon} id={styles.hexagon2}></span>
      <span className={styles.triangle} id={styles.triangle1}></span>
      <span className={styles.triangle} id={styles.triangle2}></span>
    </>
  )
}

export default App