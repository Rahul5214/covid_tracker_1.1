import styles from '../Styles/Home.module.css';
import web from '../img/img1.jpg';

function Home() {
    return (
        <>
            <div className={styles.container}>
                <h1>Get all the Covid-19 related data here</h1>
                <img src={web} alt="pic" />
            </div>

        </>
    )
}

export default Home;