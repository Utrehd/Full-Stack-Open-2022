import React from 'react'
import Part from './Part'
import Summary from './Summary'

const Content = ({parts}) => {  
    console.log(parts[0])
    return(
        <div>
            {parts.map(part => 
                <Part key={part.id} part={part}/>
            )}
            <Summary parts={parts}/>
        </div>
    )
}

export default Content