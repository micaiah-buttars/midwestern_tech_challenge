import styles from './card.module.css'

export default function Card({image}){
    return (
		<div className={styles.container}>
			<div className={styles.img_wrapper}>
                <img src={`images/${image}.png`} alt={`${image} SVG`} />
            </div>
            <h2 className={styles.heading}>Heading X</h2>
            <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis hic beatae delectus animi earum</p>
            <button className={styles.button}>Learn More</button>
		</div>
	);
}