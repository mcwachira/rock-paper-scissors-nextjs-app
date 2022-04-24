import classes from './Hands.module.css'
import Image from 'next/image'
import { Fragment } from 'react'


//import our images 
import paperImage from '../../public/images/icon-paper.svg'
import scissorsImage from '../../public/images/icon-scissors.svg'
import rockImage from '../../public/images/icon-rock.svg'

const Hands = ({ setChoice }) => {

    return (


        <div className={classes.container}>
        <div className={classes.hands}>

            <div className={`${classes.icon} ${classes.paper}`} onClick={() => setChoice(0)}>

                <Image src={paperImage} alt='paper image' layout='fixed' />
            </div>


            <div className={`${classes.icon} ${classes.scissors}`} onClick={() => setChoice(1)}>
                <Image src={scissorsImage} alt='scissors image' layout='fixed' />

            </div>

            <div className={`${classes.icon} ${classes.rock}`} onClick={() => setChoice(2)}>
                <Image src={rockImage} alt='rock image' layout='fixed' />

            </div>

        </div>
        </div>
    )
}


export default Hands;
