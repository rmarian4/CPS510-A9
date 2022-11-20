import React, {useState, useEffect} from 'react'

const QuriesPage = ({setCloseWindow, message, getFunc}) => {
    const [fetchedData, setFetchedData] = useState(false)

    useEffect(() => {
        getFunc()
        .then(data =>{
            setFetchedData(true)
        })
    }, [])
    
    if(fetchedData){
        return (
            <div>
                <input className='closebtn' type='button' value='Close Window' onClick={() => setCloseWindow(false)}/>
                <p>{message}</p>
            </div>
        )
    }

    return <div></div>
}

export default QuriesPage