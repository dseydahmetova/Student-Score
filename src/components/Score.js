import React from 'react'

function Score({ itemScore }) {
    return (
        <div>
            <span className="title"> Date: </span><p>{itemScore.date}</p>
            <p><span className="title">Score: </span>{itemScore.score} </p>
        </div>
    )
}

export default Score
