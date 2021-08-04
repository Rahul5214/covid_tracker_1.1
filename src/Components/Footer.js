import styles from '../Styles/Footer.module.css';

function Footer() {
    return (
        <>
            <div className={styles.container}>
                Copyright &copy; {new Date().getFullYear()}
            </div>
        </>
    )
}

export default Footer;