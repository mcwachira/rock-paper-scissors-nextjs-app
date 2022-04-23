import Head from 'next/head'
import Image from 'next/image'
import classes from '../styles/Home.module.css'
import{useState} from 'react'


//importing our components
import Header from '../components/Header/Header.component'
import Rules from '../components/Rules/Rules.component'

export default function Home() {


//added the score state so as to change the value of our score
  const [score, setScore] = useState(0);

  //open state will enable us to view the rules component when we click the rules button
  const[open, setOpen] = useState(false)

  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header Score={score} />
  
  <footer className={classes.footer}>
    <div className={classes.rules} onClick={() => setOpen(!open)}>
      Rules
    </div>
  </footer>

  <Rules
  open={open}
  setopen={() => setOpen(!open)}
  />
    </div>
  )
}
