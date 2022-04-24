import styles from "../styles/Home.module.css";

// Input component
export default function Input({ placeholder }) {
  return (
    <input className={styles.input} type="text" placeholder={placeholder} />
  );
}
