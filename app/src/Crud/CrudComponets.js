import React, { useEffect, useState } from 'react';
import { getdata } from './Apicalling';

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

    return (
        <div>
            {error && <p>{error}</p>}
            <ul>
                {data.map((item, index) => (
                    <div  key={index}>
                    <li >{item.name}</li>
                    <button>delete</button>
                    <button>edit</button>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default CrudOperations;
