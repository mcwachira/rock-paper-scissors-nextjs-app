import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import{useState} from 'react'

import Header from '../components/Header/Header.component'

export default function Home() {


//added the score state so as to change the value of our score
  const [score, setScore] = useState(0);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header Score={score} />
  
    </div>
  )
}
