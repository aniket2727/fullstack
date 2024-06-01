


const getdata=async()=>{

     try{
        const getdataapi=await fetch('http://localhost:9009/');
        if(getdataapi.ok){
            const result=await getdataapi.json();
            return result
        }
       else{
        throw new Error ("invalid data");
       }
    
     }
     catch(error){
        return "internal system error or wrong data"
     }
}


module.exports={getdata}