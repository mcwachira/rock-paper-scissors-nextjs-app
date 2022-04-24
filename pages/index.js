import Head from 'next/head'
// import Image from 'next/image'
import classes from '../styles/Home.module.css'
import{useState , useEffect} from 'react'


//importing our components
import Header from '../components/Header/Header.component'
import Rules from '../components/Rules/Rules.component'
import Hands from '../components/Hands/Hands.component'
import Game  from '../components/Game/Game.component'

export default function Home() {


//added the score state so as to change the value of our score
  const [score, setScore] = useState(0);

  //open state will enable us to view the rules component when we click the rules button
  const[open, setOpen] = useState(false)


  //added the my choice state to store the hand the user chooses during playing 
    const [myChoice, setMyChoice] = useState(-1);


    useEffect(() =>{
      const score = JSON.parse(localStorage.getItem('score'))
      if(score){
        setScore(score);
      }else{
        setScore(0)
      }
    })
  return (
    <div >
       <h1>
        Welcome to next
      </h1>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

   
      <Header Score={score} />
 
   
        {/* conditional rendering of the game component and hands component based on the value of myChoice */}
   {myChoice >= 0 ? (
      <Game myChoice={myChoice} Score={score} setScore={setScore} setMyChoice={(choice) => setMyChoice(choice)} />
  ): (
           <Hands setChoice={(value) => setMyChoice(value)} />
  )
   }
      
  
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
