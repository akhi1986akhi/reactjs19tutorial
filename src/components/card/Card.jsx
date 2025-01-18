import styles from '../../styles/Hero.module.css';
import heroImage from '../../assets/img-3.png';



export default function Card({ data }) {
    console.log(data)
    return (
        <>
            <div className={styles.card}>
                <img className={styles.cardImage} src={heroImage} alt="" />
                <div className={styles.cardContent}>
                    <div className={styles.cardTitle}>
                        {data.title}
                    </div>
                    <div className={styles.cardDescription}>
                        {data.description}
                    </div>
                    <div className={styles.price}>
                        {data.price}
                    </div>
                </div>
            </div>
        </>
    )
}