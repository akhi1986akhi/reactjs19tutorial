import React, { useEffect, useState } from 'react'

export default function Products() {

    const [data, setData] = useState([]);
    const [loading, setLoading]= useState(true);
    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                setData(data);
                setLoading(false);
            })
    }, []);

    if(loading){
        return(
            <>
                <p>Loading...</p>
            </>
        )
    }

    return (

        <>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                </tr>


                {

                    data.map((item, index) => {
                        return (

                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                            </tr>
                        )
                    })
                }


            </table>
        </>
    )
}
