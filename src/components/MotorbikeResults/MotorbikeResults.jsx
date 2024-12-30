import styles from "./MotorbikeResults.module.css";

export default function MotorbikeResults({ motorbikes }) {
  return (
    <div className={styles.scrollContainer}>
      {motorbikes.map((moto) => (
        <div key={moto.modelo} className={styles.resultsContainer}>
          <span className={styles.imgAndModel}>
            {" "}
            <div
              className={styles.imgContainer}
              style={{ backgroundImage: `url(${moto.img})` }} // Establecemos la imagen como fondo
            ></div>{" "}
            <div className={styles.results}>
              <h4 className={styles.brandModel}>
                {moto.brand} {moto.modelo}
              </h4>
              <span className={styles.tagsContainer}>
                <span className={styles.style}>{moto.style.toUpperCase()}</span>{" "}
                <span className={styles.license}>
                  {moto.license.toUpperCase()}
                </span>{" "}
                <span className={styles.weight}>{moto.weight}kg</span>
              </span>
            </div>
          </span>
          <span className={styles.budget}>{moto.budget}€</span>
        </div>
      ))}
    </div>
  );
}
