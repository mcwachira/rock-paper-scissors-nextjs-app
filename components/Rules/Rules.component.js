import { useState } from 'react'
import classes from './Rules.module.css'
const Rules = ({ open, setopen }) => {
    return (
        <>
            {open && (
                <div className={classes.rules} onClick={() => setopen()}>



                    <div className={classes.title}>

                        <h1>
                            Rules
                        </h1>
                        <img src="/images/icon-close.svg" alt="close" />
                    </div>

                    <div className={classes.image}>
                        <img src="/images/image-rules.svg" alt="rules" />

                    </div>
                </div>
            )}

        </>
    )
}

export default Rules