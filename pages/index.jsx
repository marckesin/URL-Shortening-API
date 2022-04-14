import Footer from "../components/footer";
import Head from "next/head";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import Button from "../components/button";

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
        <div className={styles.containerHeading}>
          <h1 className={styles.heading}>More than just shorter links</h1>
          <p>
            Build your brand&#39;s recognition and get detailed insights on how
            your links are performing.
          </p>
          <Button text={"Get Started"} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
