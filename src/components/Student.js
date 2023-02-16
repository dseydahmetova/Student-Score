import React from 'react'
import Score from "./Score"

function Student({ item }) {

    return (

        <div className='StudentCard'>
            <div className='studentInfo'>
                <p><span className="title"> Student name:</span><h2>{item.name}</h2></p>
                <span className="title">Bio: </span>{item.bio}
            </div>
            <div className='studentScore'>
                {item.scores.map(itemScore => {
                    return (
                        <Score itemScore={itemScore} />
                    )
                })}
            </div>
        </div>
    )
}

export default Student
