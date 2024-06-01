import React, { useEffect, useState } from 'react';
import { getdata ,updatedata} from './Apicalling';

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

    const updatedata=(param)=>{

        const dataforupdate=data.id===param;

        const updateddata={
            id:param,
            "name": "sanket",
            "surname": "Doe",
            "rollnumber": 123666,
            "phonenumber": 1890
        }

        updatedata(updatedata)

    }

    const deletedata=(param)=>{

    }

    return (
        <div>
            {error && <p>{error}</p>}
            <ul>
                {data.map((item, index) => (
                    <div key={index}>
                        <li >{item.name}</li>
                        <button onClick={()=>updatedata(item.id)}>delete</button>
                        <button onClick={()=>deletedata(item.id)}>edit</button>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default CrudOperations;
