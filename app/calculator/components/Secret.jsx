import React, { useState } from 'react'
import Left from './Left';
import Right from './Right';



const Secret = () => {
    const [refresh, setRefresh] = useState(false);
    return (
        <div className='flex items-start'>
            <Left refresh={refresh} setRefresh={setRefresh}/>
            <Right refresh={refresh} setRefresh={setRefresh}/>
            
        </div>
    )
}

export default Secret;