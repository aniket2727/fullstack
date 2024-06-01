


import React, { useEffect, useState } from 'react'

const DisplayComp = () => {

    const [displaydata, setdisplaydata] = useState([])

    useEffect(() => {
        const getdatafromapi = async () => {

            const resultfromapi = await fetch('https://fakestoreapi.com/products/')

            const mainresult = await resultfromapi.json();

            console.log(mainresult)

            setdisplaydata(mainresult)

        }

        getdatafromapi();
    },[])
    return (
        <div>
            <h1>display client</h1>
            
            {
                displaydata.map((item,index)=>(
                    <div key={index}>
                      <h1 style={{border:'1px solid red'}}>{item.title}</h1>
                    </div>
                ))
            }
            
                 
                
      </div>
        )
}


 export default DisplayComp;