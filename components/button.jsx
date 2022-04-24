import styles from "../styles/Home.module.css";

// Button component
export default function Button({ text }) {
  return <button className={styles.button}>{text}</button>;
}
