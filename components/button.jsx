import styles from "../styles/Home.module.css";

export default function Button({ text }) {
  return <button className={styles.button}>{text}</button>;
}
