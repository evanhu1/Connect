import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/discover.module.css";

export default function Home() {
  return (
    <div className={styles.title}>
      <Link href={'/'}>
        <div className={styles.logo}> 
          <Image src={'/logo.png'} alt="logo" width={"120px"} height={"120px"}  />
        </div>
      </Link>
      <div className={styles.navbar}> 
        <h3>Create</h3>
        <div style={{cursor: "pointer"}}><Link href={"/groups"}><h3>My Group Chats</h3></Link></div>
        <h3 className={styles.logout}>Log Out</h3>
      </div>
      <h1 className={styles.heading2}>DISCOVER</h1>
      <h2 className={styles.tre}>Trending Groupchats</h2>
      <div className={styles.trending_box}>
        <div class={styles.container}>
          <div class={styles.column}>
            <div class={styles.circle}>
              <Image src={'/basketball.jpeg'} alt="logo" width={"120px"} height={"120px"}  />
            </div>
            <p>Basketball</p>
          </div>
          <div class={styles.column}>
            <div class={styles.circle}>
              <Image src={'/sharetea.jpeg'} alt="logo" width={"120px"} height={"120px"}  />
            </div>
            <p>Sharetea Enthusiasts</p>
          </div>
          <div class={styles.column}>
            <div class={styles.circle}>
              <Image src={'/movies.jpeg'} alt="logo" width={"120px"} height={"120px"}  />
            </div>
            <p>Movies</p>
          </div>
          <div class={styles.column}>
            <div class={styles.circle}>
              <Image src={'/hiking.jpeg'} alt="logo" width={"120px"} height={"120px"}  />
            </div>
            <p>Hiking</p>
          </div>
        </div>
        <div class={styles.flex_container}>
        </div>
      </div>
      <h2>Group Chats Near You</h2>
      <div className={styles.map}>
        <Image src={'/map.jpeg'} alt="logo" width={"1500px"} height={"666px"}  />
      </div>
    </div>
  );
}
