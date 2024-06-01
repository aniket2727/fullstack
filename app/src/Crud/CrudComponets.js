// CrudOperations.js
import React, { useEffect, useState } from 'react';
import { getdata, updatedataapi, deletedata } from './Apicalling';

const CrudOperations = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getdata();
                setData(result);
            } catch (error) {
                setError('Error fetching data');
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const updateData = async (param) => {
        const updateddata = {
            id: param,
            "name": "sanket",
            "surname": "Doe",
            "rollnumber": 123666,
            "phonenumber": 1890
        };
    
        try {
            await updatedataapi(updateddata);
            // Optionally, update the local state or perform other actions after successful update
        } catch (error) {
            console.error('Error updating data:', error);
            // Handle errors if necessary
        }
    };
    
    const deleteData = async (param) => {
        try {
            await deletedata(param);
            // Optionally, update the local state or perform other actions after successful deletion
        } catch (error) {
            console.error('Error deleting data:', error);
            // Handle errors if necessary
        }
    };
    

    return (
        <div>
            {error && <p>{error}</p>}
            <ul>
                {data.map((item, index) => (
                    <div key={index}>
                        <li>{item.name}</li>
                        <button onClick={() => deleteData(item.id)}>delete</button>
                        <button onClick={() => updateData(item.id)}>edit</button>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default CrudOperations;


