import Button from "../components/button";
import Footer from "../components/footer";
import Head from "next/head";
import Input from "../components/input";
import Navbar from "../components/navbar";
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

      <Navbar />
      <main className={styles.main}>
        <section className={styles.section1}>
          <h1 className={styles.heading}>More than just shorter links</h1>
          <p>
            Build your brand&#39;s recognition and get detailed insights on how
            your links are performing.
          </p>
          <Button text={"Get Started"} />
        </section>
        <div className={styles.containerInput}>
          <Input placeholder={"Shorten a link here..."} />
          <Button text={"Shorten It!"} />
        </div>
        <section className={styles.section2}>
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
