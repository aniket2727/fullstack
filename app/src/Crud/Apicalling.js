// Apicalling.js
const { json } = require("react-router-dom");

const getdata = async () => {
    try {
        const getdataapi = await fetch('http://localhost:9009/');
        if (getdataapi.ok) {
            const result = await getdataapi.json();
            return result;
        } else {
            throw new Error("Invalid data");
        }
    } catch (error) {
        return "Internal system error or wrong data";
    }
};

const updatedataapi = async (updatedata) => {
    const params = updatedata.id;
    try {
        const getdataapi = await fetch(`http://localhost:9009/put-data/${params}`, {
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

const deletedata = async (param) => {
    try {
        // Perform delete operation using the param
        // For example:
        await fetch(`http://localhost:9009/delete-data/${param}`, {
            method: "DELETE"
        });
        // Update the UI or perform other actions after successful deletion
    } catch (error) {
        console.error('Error deleting data:', error);
        // Handle errors if necessary
    }
};

module.exports = { getdata, updatedataapi, deletedata };

