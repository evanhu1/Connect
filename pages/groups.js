import Head from "next/head";
import Image from "next/image";
import styles from "../styles/groups.module.css";
import { useEffect, useState } from 'react'
import Link from "next/link";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/api/group/groups')
      .then((res) => res.json())
      .then((data) => {
        setData(data.result);
      })
  }, [])

  return (
    <div className={styles.title}>
      <Link href={"/"}>
        <div className={styles.logo}> 
          <Image src={'/logo.png'} alt="logo" width={"120px"} height={"120px"}  />
        </div>
      </Link>
      <div className={styles.navbar}> 
        <h3>Create</h3>
        <h3>My Group Chats</h3>
        <h3 className={styles.logout}>Log Out</h3>
      </div>
      <h1 className={styles.heading2}>GROUP CHATS</h1>
      <Link href={'discover'}><div className={styles.button}>Discover Group Chats</div></Link>

      <div className={styles.map}>
        {data.map(element => {
          return (
            <Link key={element.id}  href={`group/${element.id}/messages`}>
              <div className={styles.groupRow}>
                <div className={styles.group}> 
                  <Image src={'/group.png'} alt="logo" width={"75px"} height={"75px"}  />
                </div>
                  <div className={styles.rowSub}>
                    <h3 style={{margin: 0}}>{`${element.title}`}</h3>
                    <p style={{marginLeft: "2rem"}}>John: What time should we meet up?</p>
                  </div>
              </div>
            </Link>
          )})}
      </div>
    </div>
  );
}
