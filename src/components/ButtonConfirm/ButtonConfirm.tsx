import styles from './buttonConfirm.module.scss';

export default function ButtonConfirm() {
    const message = '*Olá, eu confirmo minha presença.*\n\n*Sugestão de presentes* 🎁 🌈\n1 pacote de fralda M + 1 Mimo\n_ou_\n1 Pacote de fralda G + 1 Mimo\n\n*Informações adicionais:*\n*Data:* 23/04/2023\n*Horário:* das 15:00 até as 20:00\n*Local:* Rua Anum-Dourado, Jardim Dom Jose, 260.\n\n_Nós (papai e mamãe) agradecemos pela presença com todo o carinho 😊_';
    const formatedMessage = window.encodeURIComponent(message);

    const handleConfirmPresence = ()=> {
        window.open(`https://api.whatsapp.com/send?phone=+5511930339592&text=${formatedMessage}`);
    };

    return (
        // <a href={`https://api.whatsapp.com/send?phone=+5511930339592&text=${formatedMessage}`}>
            <button className={styles.btnConfirm} onClick={handleConfirmPresence}>
                Confirmar presença
            </button>
        // </a>
    )
}