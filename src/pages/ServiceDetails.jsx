import React, { useEffect, useState } from 'react'

const ServiceDetails = ({id}) => {
    const [data, setData] = useState([])
    useEffect(()=>{
            try {
                fetch(`https://jsonplaceholder.typicode.com/posts/`)
                .then(res=>res.json())
                .then(data=>setData(data))
                    console.log(data)

            } catch (error) {
                console.error(error);
            }

        }, [])
  return (
    <>
    <div>
        {/* <h1>{data.id} {Title}</h1>
        <p>{data.body}</p>
        <img src="#" alt="image1" />
        <button>Add to fav</button> */}

    </div>
    </>
  )
}

export default ServiceDetails