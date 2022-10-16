import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/api/user/users')
      .then((res) => res.json())
      .then((data) => {
        setData(data.result);
      })
  }, [])
  console.log(data);
  return (
    <div className={styles.container}>
      <ul>
        {data.map(element => {
          return (<li key={element.id}>{`Name: ${element.name}`}</li>)
        })}
      </ul>
      
    </div>
  )
}
