import heroImage from '../../assets/img-3.png';
import styles from '../../styles/Hero.module.css';
import Card from '../card/Card';

const hamburgers = [
    {
        id: 1,
        title: "Classic Cheeseburger",
        description: "A juicy beef patty topped with melted cheddar cheese, fresh lettuce, tomato, and our signature sauce, served on a toasted sesame bun.",
        price: 8.99
    },
    {
        id: 2,
        title: "BBQ Bacon Burger",
        description: "Beef patty smothered in tangy BBQ sauce, crispy bacon, cheddar cheese, and fried onions, served on a brioche bun.",
        price: 10.49
    },
    {
        id: 3,
        title: "Spicy Jalapeño Burger",
        description: "A zesty beef patty topped with pepper jack cheese, fresh jalapeños, spicy mayo, and lettuce, served on a toasted bun.",
        price: 9.99
    },
    {
        id: 4,
        title: "Veggie Delight Burger",
        description: "A plant-based patty with fresh avocado, crisp lettuce, tomato, and vegan mayo, served on a whole-grain bun.",
        price: 8.49
    }
];

export default function Hero() {

    return (

        <>

            <section className={styles.heroSection}>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <img src={heroImage} alt="" style={{ width: '500px' }} />
                    </div>
                    <div className={`${styles.col} ${styles.colLeft}`}>

                        <div className="caption">
                            Always Fresh
                        </div>
                        <div className={styles.title}>
                            From Texas with American Love
                        </div>

                        <p style={{ fontSize: '0.9rem', letterSpacing: '1px', color: 'darkgrey' }}> FoodMood is an international chain of fast food restaurants, which has an experience of opening more than 170 restaurants in 10 countries of the world. Thus the restaurants of the new generation had emerged in 2017.</p>
                        <button className={styles.orderBtn}>Order Now</button>
                    </div>
                </div>
            </section>

            <section className={styles.cardWrapper}>
                {
                    hamburgers.map((item, index) => {
                        return (
                            <Card key={item.id} data={item} />
                        )
                    })

                }
            </section>
        </>
    )
}