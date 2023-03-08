import styles from './buttonConfirm.module.scss';

export default function ButtonConfirm() {
    return (
        <a href="https://api.whatsapp.com/send?phone=+5511930339592&text=Olá! Confirmo minha presença e estou de acordo em contribuir com um pacote de fralda e um mimo para o baby 🥰🎁">
            <button className={styles.btnConfirm}>
                Confirmar presença
            </button>
        </a>
    )
}