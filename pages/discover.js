import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/discover.module.css";

export default function Home() {
  return (
    <div className={styles.title}>
      <div className={styles.logo}> 
        <Image src={'/logo.png'} alt="logo" width={"120px"} height={"120px"}  />
      </div>
      <div className={styles.navbar}> 
        <div style={{cursor: "pointer"}}><Link href={"/groups"}><h3>My Groups</h3></Link></div>
        <h3 className={styles.logout}>Log Out</h3>
      </div>
      <h1 className={styles.heading2}>DISCOVER</h1>
      <h2>Trending Groupchats</h2>
      <div className={styles.trending_box}>
        <div class={styles.container}>
          <div class={styles.circle}>
            <div class={styles.aligner}>Sample</div>
            <p>Basketball</p>
          </div>
          <div class={styles.circle}>
            <div class={styles.aligner}>Sample</div>
            <p>Sharetea Enthusiasts</p>
          </div>
          <div class={styles.circle}>
            <div class={styles.aligner}>Another Sample for a circle</div>
            <p>Movies</p>
          </div>
          <div class={styles.circle}>
            <div class={styles.aligner}>With Kitten</div>
            <p>Hiking</p>
          </div>
        </div>
        <div class={styles.flex_container}>
        </div>
      </div>
      <div className={styles.diy}>
        <p className={styles.button_text}>CREATE</p>
      </div>
      <div className={styles.map} />
    </div>
  );
}
