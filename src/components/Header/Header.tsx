import styles from './header.module.scss';
import arcoCha from '../../assets/arcoCha.svg';

export default function Header() {
    return (
        <header className={styles.headerContent}>
            <div>
                <img className={styles.logo} src={arcoCha} alt="Logo ig.news" height={44} />
                <p>
                    <span className={styles.gril}>Agnes</span>
                    <span className={styles.boy}>Diego</span>
                </p>
            </div>

            <nav>
                {/* <ActiveLink activeClassName={styles.active} href='/'>
                    <a>Home</a>
                </ActiveLink>

                <ActiveLink activeClassName={styles.active} href={'/posts'}>
                    <a>Posts</a>
                </ActiveLink> */}
            </nav>
        </header>
    )
}