import classes from './Game.module.css'
import Image from 'next/image'






const Game = ({ myChoice, setMyChoice, Score, setScore }) => {

    const [results, setResults] = useState("");
    const [house, setHouse] = useState("");
    const [show, setShow] = useState(false);
    const [winner, setWinner] = useState('')


    let houseData = ['rock', 'paper', 'scissors']

    //function to generate a random number which will be used by the pc to choose an hand
    const randomNumber = Math.floor(Math.random() * houseData.length)

    useEffect(() => {

        setTimeout(() => {
            setShow(true);
            setHouse(Data[randomNumber].value)

        }, 2000)
    }, [randomNumber])

    const Results = () => {
        const choice = Data[myChoice].value

        //using a switch statement to choose the winner  based on the hand selected and update the score 
        switch (choice + house) {

            case "scissorspaper":
            case "rockscissors":
            case "paperrock":
                setWinner("win");

                setScore(Score + 1)
                return;

            case "paperscissors":
            case "scissorsrock":
            case "rockpaper":
                setWinner("loose");
                setScore(Score - 1)
                return;
            case "paperpaper":
            case "scissorsscissors":
            case "rockrock":
                setWinner("draw")
                return;
            default:
                break;
        }
    }
    useEffect(() => {
        Results()
    }, [Results])


    return (

        <>
            <div className={classes.game}>

                <div className={classes.userHand}>

                    <h1>
                        You Picked
                    </h1>

                    <div className={`${classes[Data[myChoice].value]} ${classes.pickedImageContainer}`}>




                        <img src={`/images/icon-${Data[myChoice].value}.svg`} alt="" />

                    </div>


                </div>




                <div className={classes.results}>
                    <div className={classes.results__heading}>
                     {winner === 'win' && <h2> You  Win</h2>}
                        {winner === 'loose' && <h2> You  Loose</h2>}
                        {winner === 'draw' && <h2>         It is  a tie!</h2>}
                    </div>
                    <button onClick={() => {
                        setMyChoice(-1)
                        setResults("")
                    }}>
                        play again
                    </button>

                </div>

                <div className={classes.houseHand}>

                    <h1>The house picked</h1>

                    <div className={`${classes[house]} ${classes.pickedImageContainer}`}>

                        <img src={`/images/icon-${house}.svg`} alt="" />
                    </div>
                </div>
            </div >



        </>



    )


}
export default Game

