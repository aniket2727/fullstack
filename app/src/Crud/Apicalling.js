const { json } = require("react-router-dom");



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


const updatedata = async (updatedata) => {
    const params = updatedata.id;
    try {
        const getdataapi = await fetch(`http://localhost:9009/${params}`, {
            method: "PUT",
            body: JSON.stringify(updatedata),
            headers: {
                "Content-Type": "application/json"
            }
        });
        // Handle response if needed
    } catch (error) {
        console.error('Error updating data:', error);
        throw error; // Re-throw the error to be caught by the calling function
    }
};


module.exports={getdata,updatedata}