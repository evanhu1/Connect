import Head from "next/head";
import Image from "next/image";
import styles from "../styles/title.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.title}>
      <div className={styles.logo}> 
        <Image src={'/logo.png'} alt="logo" width={"120px"} height={"120px"}  />
      </div>
      <div className={styles.navbar}> 
        <h3 className={styles.logout}>Sign In</h3>
      </div>
      <Image src={'/connect.png'} alt="logo" width={"500px"} height={"150px"}  />
      <p style={{marginTop: "-1rem", marginBottom: "2rem"}}>Bring your community to life</p>
      <Link href={'groups'}><div className={styles.button}>Start Chatting</div></Link>
    </div>
  );
}
