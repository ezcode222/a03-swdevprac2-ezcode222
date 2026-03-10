import styles from "./card.module.css";

export default function Card() {
  return (
    <div className={styles.card}>
      <img src="/image/image2.jpg" alt="venue" />
      <h3>The Bloom Pavilion</h3>
      <p>A stunning banquet hall where love blossoms and unforgettable memories are made.</p>
    </div>
  );
}