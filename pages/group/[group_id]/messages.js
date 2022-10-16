import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles/messages.module.css";
import { useEffect, useState } from 'react'
import Link from "next/link";
import { useRouter } from 'next/router'

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const cohere = require("cohere-ai");
  const { group_id } = router.query;
  
  useEffect(() => {
    const { group_id } = router.query;
    fetch(`/api/group/${group_id}/messages`)
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          setData(data.result);
          setLoading(false);
        }
      })
  }, [router.query]);
  
  cohere.init("2OAkemEGNOVNotZcOU3TcHsWYh3O8CRrah61SSqL");

  const submit = (text) => {
    (async () => { 
      const response = await cohere.classify({ 
        model: 'cohere-toxicity', 
        inputs: [text] 
      }); 
      if (response.body.classifications[0].prediction == "NOT TOXIC") {
        await fetch(`/api/group/${group_id}/post_message`, {
          method: "POST",
          body: text
        });
        window.location.reload();
      }  else {
        alert("We detected toxicity in your message.");
      }
    })(); 
  }

  return (
    <div className={styles.title}>
      <Link href={"/"}>
        <div className={styles.logo}> 
          <Image src={'/logo.png'} alt="logo" width={"120px"} height={"120px"}  />
        </div>
      </Link>
      <div className={styles.navbar}> 
        <h3>Create</h3>
        <div style={{cursor: "pointer"}}><Link href={"/groups"}><h3>My Group Chats</h3></Link></div>
        <h3 className={styles.logout}>Log Out</h3>
      </div>
      <h1 className={styles.heading2}>GROUP</h1>

      <div className={styles.map}>
        {!loading && data.slice().reverse().map(element => {
          return (
            <div key={element.id} className={styles.groupRowContainer}>
              <p style={{alignSelf: "start"}}>
                {element.name}
              </p>
              <div className={styles.groupRow}>
                <p style={{marginLeft: "2rem"}}>{element.text}</p>
              </div>
            </div>
          )})}
          <p style={{alignSelf: "start"}}>
            Type a message:
          </p>
        <input className={styles.input} onKeyPress={(e) => {(e.key === 'Enter' ? submit(e.target.value) : null)}}/>
      </div>
    </div>
  );
}
