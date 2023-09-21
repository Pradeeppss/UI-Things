import styles from "./buttons.module.css";
export default function Buttons() {
  return (
    <section className={styles.container}>
      <div className={styles.btn_card}>
        <button>click me</button>
      </div>
      <div className={styles.btn_card}>
        <button>click me</button>
      </div>
      <div className={styles.btn_card}>
        <button>click me</button>
      </div>
      <div className={styles.btn_card}>
        <button>click me</button>
      </div>
      <div className={styles.btn_card}>
        <button>click me</button>
      </div>
      <div className={styles.btn_card}>
        <button>click me</button>
      </div>
    </section>
  );
}
