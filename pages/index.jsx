import Footer from "../components/footer";
import Head from "next/head";
import styles from "../styles/Home.module.css";

// Home component to render the landing page
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend Mentor | Shortly URL shortening API Challenge</title>
        <meta
          name="description"
          content="This is a solution to the: Shortly URL shortening API Challenge challenge on Frontend Mentor"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}></main>
      <Footer />
    </div>
  );
}
